import { Button } from "@heroui/react";
import Image from "next/image";

export default function HeroBanner() {
  return (
    <div className="max-w-7xl mx-auto">
<div className="flex items-center">
    <div>
      <p>Your Local Library, Delivered</p>  
<h1>Discover Books . 
    <br />
    <span>Delivered to You.</span>
</h1>
<p>  Connect with local libraries & independent book owners. Request your
            favorite books and get them delivered to your doorstep.</p>
<Button>Browse Books</Button>
<Button>Here it Works</Button>
    </div>
    <div>
 <Image
            src="/chare.png"
            alt="Pets"
            width={500}
            height={500}
            className="object-contain rounded-lg"
          />

    </div>
</div>
    </div>
  );
}