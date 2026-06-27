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
<div className="max-w-7xl mx-auto px-4 py-8">

  {/* Heading */}
  <div className="text-center mb-10">
    <h1 className="text-4xl font-bold text-gray-800">
      Explore Books
    </h1>
    <p className="text-gray-500 mt-2">
      Discover your next favorite book
    </p>
  </div>

  {/* Books Grid */}
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
    {productdata?.map((book) => (
      <div
        key={book._id}
        className="transition duration-300 hover:-translate-y-2 hover:shadow-xl rounded-2xl"
      >
        <BookCard book={book} />
      </div>
    ))}
  </div>

  {/* Pagination */}
  <div className="flex justify-center mt-14">
    <div className="bg-white border shadow-lg rounded-2xl px-4 py-3">

      <Pagination size="md">
        <Pagination.Content className="flex items-center gap-2">

          {/* Previous */}
          <Pagination.Item>
            <Link href={`/books?page=${page - 1}`}>
              <Pagination.Previous
                isDisabled={page === 1}
                className="rounded-xl px-4 py-2 border hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <div className="flex items-center gap-2">
                  <Pagination.PreviousIcon />
                  Prev
                </div>
              </Pagination.Previous>
            </Link>
          </Pagination.Item>

          {/* Pages */}
          {pages.map((p) => (
            <Pagination.Item key={p}>
              <Link href={`/books?page=${p}`}>
                <Pagination.Link
                  isActive={p === page}
                  className={`
                  w-10 h-10 rounded-xl
                  flex items-center justify-center
                  font-semibold transition-all duration-300
                  ${
                    p === page
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-110"
                      : "bg-gray-100 hover:bg-blue-100 text-gray-700"
                  }
                `}
                >
                  {p}
                </Pagination.Link>
              </Link>
            </Pagination.Item>
          ))}

          {/* Next */}
          <Pagination.Item>
            
              <Pagination.Next
                isDisabled={page === totalPage}
                className="rounded-xl px-4 py-2 border hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <Link href={`/books?page=${page + 1}`}>
                <div className="flex items-center gap-2">
                  Next
                  <Pagination.NextIcon />
                </div>
                 </Link>
              </Pagination.Next>
           
          </Pagination.Item>

        </Pagination.Content>
      </Pagination>

    </div>
  </div>

</div>
  );
};

export default Books;   