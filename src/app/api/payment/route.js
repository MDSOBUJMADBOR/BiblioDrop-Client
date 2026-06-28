
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe";
import { auth } from "@/lib/auth";


export async function POST(request) {
  try {
    const headersList = await headers();
    const origin = headersList.get("origin");

    const userSession = await auth.api.getSession({
      headers: await headers(),
    });

    const user = userSession?.user;
    const formData = await request.formData();
    const deliveryFee = formData.get('deliveryFee')
    const title = formData.get('title')
    const productId = formData.get('productId')

    
    const session = await stripe.checkout.sessions.create({
      customer_email: user?.email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: Number(deliveryFee) * 100,
            product_data: {
                name: title,
            }
          },
          quantity: 1,
        },
      ],
      metadata: {
        deliveryFee: Number(deliveryFee),
        userId: user.id,
        userEmail: user.email,
        title,
        productId,
      },
      mode: "payment",
      success_url: `${origin}/payment?session_id={CHECKOUT_SESSION_ID}`,
    });
    return NextResponse.redirect(session.url, 303);
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 },
    );
  }
}
