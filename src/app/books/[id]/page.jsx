
import Image from "next/image";
import { Heart } from "lucide-react";
import { BookCardSingle } from "@/lib/bookdata/data";
import RequestDeliveryButton from "@/components/RequestDeliveryButton";
import Link from "next/link";
// import { headers } from 'next/headers';

import { LogoFacebook,  CircleNumber2, LogoTelegram, LogoLinkedin, BookOpen, ArrowLeft } from '@gravity-ui/icons';
import { Button } from "@heroui/react";
// import { auth } from "@/lib/auth";
const BooksDetailsPage = async ({ params }) => {
  const { id } = await params;
//  const {token} = await auth.api.getToken({
//     headers: await headers()
//   })


  const book = await BookCardSingle(id);

  const {
    title,
    author,
    category,
    deliveryFee,
    image,
    description,
    createdAt,
    status,
    userName,
    userImage,
    role
  } = book;
console.log(userName);
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <Link href="/books"> <Button className="" variant="tertiary"> <ArrowLeft /> Back to All Books</Button></Link>
      <div className="bg-white rounded-2xl shadow-lg border  p-6">
        
        <div className="grid md:grid-cols-3 gap-8">

          {/* Image */}
          <div>
            <Image
              src={image}
              alt={title}
              width={400}
              height={500}
              className="w-full h-[420px] object-cover rounded-xl border"
            />
          </div>

          {/* Details */}
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold text-slate-800">
              {title}
            </h1>

            <p className="mt-2 text-slate-600">
              by{" "}
              <span className="font-semibold text-blue-600">
                {author}
              </span>
            </p>

            <div className="mt-4">
              <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
               Available
              </span>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-500">
                Delivery Fee
              </p>
              <h2 className="text-2xl font-bold">
                ৳{deliveryFee}
              </h2>
            </div>

            <p className="mt-6 text-gray-600 leading-relaxed">
              {description}
            </p>

            <div className="mt-8  space-y-2 text-sm">
              <p>
                <span className="font-semibold">
                  Category:
                </span>{" "}
                {category}
              </p>

              <p>
                <span className="font-semibold ">
                  Date Added:
                </span>{" "}
                {new Date(createdAt).toLocaleDateString()}
              </p>
            </div>

            <div className=" flex flex-col sm:flex-row gap-4">
              <RequestDeliveryButton  book={book} />

              <button className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-indigo-50">
                <Heart size={18} />
                Add to Wishlist
              </button>
            </div>
          </div>
            <div className="">
                 <div className="space-y-5">
      {/* Librarian Card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Librarian
        </h3>

        <div className="flex items-center gap-3">
          <Image
            src={userImage}
            alt="Librarian"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />

          <div>
            <h4 className="font-semibold text-gray-800">
              {userName}
            </h4>

            <p className="text-sm text-gray-500">
              300 Deliveries
            </p>
          </div>
        </div>
<br />
        <button className="w-full  border border-indigo-300 text-indigo-600 font-medium py-2.5 rounded-xl hover:bg-indigo-50 transition">
          View Profile
        </button>
      </div>
<br />
      {/* Book Status */}
      <div className=" bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Book Status
        </h3>

        <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>

          <span className="text-green-700 text-sm font-medium">
            Available
          </span>
        </div>
      </div>
<br />
      {/* Share Card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Share this book
        </h3>

        <div className="flex items-center gap-5">
          <button className="text-blue-600 hover:scale-110 transition">
        
           <LogoFacebook />
          </button>

          <button className="text-gray-700 hover:scale-110 transition font-bold">
            X
          </button>

          <button className="text-blue-700 hover:scale-110 transition">
           
            <LogoTelegram />
          </button>

          <button className="text-gray-500 hover:scale-110 transition">
            
            <LogoLinkedin />
          </button>
        </div>
      </div>
    </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BooksDetailsPage;