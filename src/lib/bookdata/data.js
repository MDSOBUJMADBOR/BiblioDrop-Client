


export const BookCardSingle = async (id) => {
const res = await fetch( `${process.env.NEXT_PUBLIC_API_URL}/bookpost/published/${id}`)
const data = await res.json()
return data;
}


export const FeaturedData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookpost/published/six`)
    const data = await res.json()
    return data;
} 



export const getProduct = async (page) => {
      if (!page) {
    page = 1;
  }
 
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookpost/published?page=${page}`)
    const data = await res.json();
    return data;
}