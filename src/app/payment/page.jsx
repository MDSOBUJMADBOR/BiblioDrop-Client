import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id) {
    throw new Error("Please provide a valid session_id");
  }

  const {
    status,
    customer_details: { email: customerEmail },
    payment_intent,
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  if (status === "open") {
    redirect("/");
  }

  if (status === "complete") {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-10">
        <div className="bg-white max-w-xl w-full rounded-3xl shadow-xl p-10 text-center">

          <div className="flex justify-center">
            <div className="bg-green-100 p-5 rounded-full">
              <CheckCircle2 className="w-20 h-20 text-green-600" />
            </div>
          </div>

          <h1 className="text-4xl font-bold mt-6 text-gray-900">
            Payment Successful
          </h1>

          <p className="text-gray-600 mt-3">
            Thank you for your purchase. Your payment has been received
            successfully.
          </p>

          <div className="mt-8 bg-gray-50 rounded-2xl p-6 space-y-4 text-left">

            <div className="flex justify-between">
              <span className="text-gray-500">Payment Status</span>
              <span className="font-semibold text-green-600 capitalize">
                {status}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Customer Email</span>
              <span className="font-medium">{customerEmail}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Payment ID</span>
              <span className="font-medium">
                {payment_intent?.id}
              </span>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">

            <Link
              href="/"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
            >
              Back Home
            </Link>

            <Link
              href="/dashboard/user/deliveryhistory"
              className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 rounded-xl font-semibold transition"
            >
              My Orders
            </Link>

          </div>

          <p className="text-sm text-gray-500 mt-8">
            A confirmation email has been sent to
            <br />
            <span className="font-semibold text-gray-700">
              {customerEmail}
            </span>
          </p>
        </div>
      </div>
    );
  }
}