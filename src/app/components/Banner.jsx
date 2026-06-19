
import Image from "next/image";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2  gap-10  items-center justify-between  bg-gradient-to-l from-black via-black/80 to-[#0b0f2a]  ">


    <div className="flex-1 space-y-4 ml-3 mt-5 md:mt-0 py-10">
      <p className=" text-white bg-blue-900 inline p-1 px-2 rounded-[40px] "> 🚀 Your Local Library, Delivered</p> 
<h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">Discover Books. 
    <br />
    <span className="text-blue-400">Delivered to You.</span>
</h1>
<p className="mt-4 text-gray-300 max-w-lg"> Connect with local libraries & independent book owners. <br /> Request your
            favorite books and get them <br /> delivered to your doorstep.</p>
            <br />
<Link href="/books"><button className="bg-blue-600 p-2 rounded-md mr-4 text-white cursor-pointer">Browse Books </button></Link>
<button className="p-2 rounded-md bg-transparent border text-white cursor-pointer">Here it Works</button>
    </div>
    <div className="flex-1">
  <Image
            src="/book.jpg"
            alt="book"
            width={700}
            height={700}            
            className="object-contain"
          /> 

  {/* <Image
    src="/book.jpg"
    alt="Pets"
    fill
    className="object-contain"
  /> */}

    </div>


</div>
    </div>
  );
}