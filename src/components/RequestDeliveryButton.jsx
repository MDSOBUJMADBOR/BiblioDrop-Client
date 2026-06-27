"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const RequestDeliveryButton = ({ book }) => {
  const { data: session } =
    authClient.useSession();
     const router = useRouter();


  const handleRequest = async () => {
    alert
 if (!session?.user) {
    alert("Please login first to request delivery.");
      router.push("/signin");
      return;}


    const deliveryInfo = { 
      bookId: book._id,
      title: book.title,
      author: book.author,
      email:book.email,
      category: book.category,
      deliveryFee: book.deliveryFee,
      image: book.image,
      description: book.description,
      createdAt: book.createdAt,

       requesterName: session.user.name,
      requesterEmail: session.user.email,

      status: "pending",
      requestDate: new Date(),
    };

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/delivery-request`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(deliveryInfo),
        }
      );

      const data = await res.json();

      if (data.insertedId) {
        alert("Delivery Request Sent Successfully");
         router.push("/books");
      }
    } catch (error) {
      console.log(error);
    }
  };
// bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition
  return (
    <button
      onClick={handleRequest}
      className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition cursor-pointer "
    >
      Request Delivery
    </button>
  );
};

export default RequestDeliveryButton;