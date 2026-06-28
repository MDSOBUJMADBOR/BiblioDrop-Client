"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const RequestDeliveryButton = ({ book }) => {
  console.log(book._id,'book');
  const { data: session } =
    authClient.useSession();
     const router = useRouter();


const handleSubmit = async (e) => {
  e.preventDefault(); // Form submit বন্ধ

  if (!session?.user) {
    toast("Please login first to request delivery.");
    router.push("/signin");
    return;
  }
  // Login থাকলে form submit হবে
  e.target.submit();
};



  const handleRequest = async () => {   

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
        toast("Delivery Request Sent Payment");
         router.push("/books");
      }
    } catch (error) {
      console.log(error);
    }
  };
// bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition
  return (
   <form action={"/api/payment"} method="POST" onSubmit={handleSubmit}>

<input  type="hidden"  name="deliveryFee" value={book.deliveryFee} />
<input  type="hidden" name="title" value={book.title} />
<input  type="hidden" name="bookid" value={book._id} />



     <button type="submit"
      onClick={handleRequest}
      className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition cursor-pointer "
    >
      Request Delivery
    </button>
   </form>
  );
};

export default RequestDeliveryButton;