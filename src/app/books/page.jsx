import SearchFilter from "@/components/SearchFilter";
import { getProduct } from "@/lib/bookdata/data";
import { Pagination } from "@heroui/react";
import Link from "next/link";

export const dynamic = "force-dynamic";

const Books = async ({ searchParams }) => {
  const resolvedParams = await searchParams;
  const page = Number(resolvedParams.page) || 1;

  const products = await getProduct(page);

  const productdata = products.data;
  const totalPage = products.totalPage;

  const pages = Array.from({ length: totalPage }, (_, i) => i + 1);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Explore Books</h1>
        <p className="text-gray-500 mt-2">
          Discover your next favorite book
        </p>
      </div>

      {/* Search + Filter + Books */}
      <SearchFilter books={productdata} />


      {/* Pagination */}
      {/* <div className="flex justify-center mt-14">
        <div className="bg-white border shadow-lg rounded-2xl px-4 py-3">
          <Pagination >
            <Pagination.Content>

              <Pagination.Item>
                <Link href={`/books?page=${page - 1}`}>
                  <Pagination.Previous isDisabled={page === 1} />
                </Link>
              </Pagination.Item>

              {pages.map((p) => (
                <Pagination.Item key={p}>
                  <Link href={`/books?page=${p}`}>
                    <Pagination.Link isActive={p === page}>
                      {p}
                    </Pagination.Link>
                  </Link>
                </Pagination.Item>
              ))}

              <Pagination.Item>
                <Link href={`/books?page=${page + 1}`}>
                  <Pagination.Next isDisabled={page === totalPage} />
                </Link>
              </Pagination.Item>

            </Pagination.Content>
          </Pagination>
        </div>
      </div> */}



<div className="flex justify-center mt-14">
  <div className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white p-3 shadow-lg">

    {/* Previous */}
    <Link href={`/books?page=${page - 1}`}>
      <button
        disabled={page === 1}
        className={`px-4 py-2 rounded-xl font-medium transition-all duration-300
        ${
          page === 1
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-white border hover:bg-blue-600 hover:text-white hover:shadow-md"
        }`}
      >
        ← Prev
      </button>
    </Link>

    {/* Page Numbers */}
    <div className="flex items-center gap-2">
      {pages.map((p) => (
        <Link key={p} href={`/books?page=${p}`}>
          <button
            className={`w-11 h-11 rounded-xl font-semibold transition-all duration-300
            ${
              p === page
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-110"
                : "bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700"
            }`}
          >
            {p}
          </button>
        </Link>
      ))}
    </div>

    {/* Next */}
    <Link href={`/books?page=${page + 1}`}>
      <button
        disabled={page === totalPage}
        className={`px-4 py-2 rounded-xl font-medium transition-all duration-300
        ${
          page === totalPage
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-white border hover:bg-blue-600 hover:text-white hover:shadow-md"
        }`}
      >
        Next →
      </button>
    </Link>

  </div>
</div>





    </div>
  );
};

export default Books;