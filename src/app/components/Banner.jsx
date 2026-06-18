import { Button } from "@heroui/react";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2  gap-10  items-center justify-between  bg-gradient-to-r from-[#0b0f2a] via-[#0b0f2acc] ">


    <div className="flex-1 border border-red-500 space-y-4 ml-3 mt-5 md:mt-0">
      <p className="text-white">Your Local Library, Delivered</p>  
<h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">Discover Books. 
    <br />
    <span className="text-blue-400">Delivered to You.</span>
</h1>
<p className="mt-4 text-gray-300 max-w-lg"> Connect with local libraries & independent book owners. <br /> Request your
            favorite books and get them <br /> delivered to your doorstep.</p>
            <br />
<Button className="rounded-md mr-4">Browse Books</Button>
<Button className="rounded-md ">Here it Works</Button>
    </div>
    <div className="flex-1 border border-green-500">
 <Image
            src="/chare.png"
            alt="Pets"
            width={700}
            height={500}
            
            className="object-contain"
          />

    </div>


</div>
    </div>
  );
}