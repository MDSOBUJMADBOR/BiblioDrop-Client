import BookCard from '@/components/BookCard';
import { getProduct } from '@/lib/bookdata/data';
import { Pagination } from '@heroui/react';
import React from 'react';
export const dynamic = 'force-dynamic'

const Books = async ({searchParams}) => {
const resolvedParams = await searchParams; 
  const page = resolvedParams.page;

// const params = await searchParams;

console.log(page);
  const products = await getProduct(Number(page));
const productdata= products.data;
// console.log(products.data);


  return (
<div className='max-w-7xl mx-auto'>
      <div className=' grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3'>
      {
        productdata?.map((book) => <BookCard key={book._id} book={book}></BookCard>)
      }      
    </div>

<div>
 
</div>

    <Pagination size="sm">         
          <Pagination.Content>
            <Pagination.Item>
              <Pagination.Previous
                isDisabled={page === 1}
                
              >
                <Pagination.PreviousIcon />
                Prev
              </Pagination.Previous>
            </Pagination.Item>
            {pages.map((p) => (
              <Pagination.Item key={p}>
                <Pagination.Link isActive={p === page} >
                  {p}
                </Pagination.Link>
              </Pagination.Item>
            ))}
            <Pagination.Item>
              <Pagination.Next
                isDisabled={page === totalPages}
               
              >
                Next
                <Pagination.NextIcon />
              </Pagination.Next>
            </Pagination.Item>
          </Pagination.Content>
        </Pagination>
        
</div>
  );
};

export default Books;