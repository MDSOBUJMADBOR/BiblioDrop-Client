

// export const getAllBooks = async () => { 
  
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/published`);
//   const data = await res.json(); 
//   return data;
// };



export const BookCardSingle = async (id) => {
const res = await fetch( `http://localhost:8080/bookpost/published/${id}`)
const data = await res.json()
return data;
}