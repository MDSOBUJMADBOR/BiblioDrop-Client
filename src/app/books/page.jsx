import BookCard from '@/components/BookCard';
import { getProduct } from '@/lib/bookdata/data';
import { Pagination } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
export const dynamic = 'force-dynamic'

const Books = async ({searchParams}) => {
const resolvedParams = await searchParams; 
  const pag = resolvedParams.page;

// const params = await searchParams;


  const products = await getProduct(Number(pag));


const productdata= products.data;
const page = products.page;
const pages = [];
const totalPage = products.totalPage;

for(let i=1; i<= totalPage; i++) {
  pages.push(i)
}
console.log(pages,'pages');


  return (
<div className='max-w-7xl mx-auto'>
      <div className=' grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3'>
      {
        productdata?.map((book) => <BookCard key={book._id} book={book}></BookCard>)
      }      
    </div>

<div>
 
</div>




<div className="flex justify-center mt-10 mb-8">
  <div className="flex items-center gap-2 flex-wrap">

    <Link
      href={`/books?page=${page - 1}`}
      className={`px-4 py-2 rounded-lg border transition-all duration-200
        ${
          page === 1
            ? "pointer-events-none opacity-40 bg-gray-100"
            : "hover:bg-blue-600 hover:text-white"
        }`}
    >
      ← Previous
    </Link>

    {pages.map((p) => (
      <Link
        key={p}
        href={`/books?page=${p}`}
        className={`w-10 h-10 rounded-lg flex items-center justify-center border font-medium transition-all duration-200
          ${
            p === page
              ? "bg-blue-600 text-white border-blue-600 shadow-lg"
              : "hover:bg-blue-100 hover:border-blue-500"
          }`}
      >
        {p}
      </Link>
    ))}

    
    <Link
      href={`/books?page=${page + 1}`}
      className={`px-4 py-2 rounded-lg border transition-all duration-200
        ${
          page === totalPage
            ? "pointer-events-none opacity-40 bg-gray-100"
            : "hover:bg-blue-600 hover:text-white"
        }`}
    >
      Next →
    </Link>

  </div>
</div>

        
</div>
  );
};

export default Books;