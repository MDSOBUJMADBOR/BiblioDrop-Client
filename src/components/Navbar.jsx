"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Menu,
  X,
  User, 
  Book,
  BarChart,
  LogOut,
  ChevronRight,
  ChevronDown,
  LayoutDashboard,
} from "lucide-react";
import { Button } from "@heroui/react";
import Image from "next/image";
import { authClient, useSession } from "@/lib/auth-client";


const navItems = [
 {
path: "/",
text: "Home"
 },
 {
path: "/books",
text: "Browse Books"
 },
]
// bg-gradient-to-r from-[#0b1d3a] to-[#0f2a5c]
export default function Navbar() {
const { data: session } = useSession(); 
  const role = session?.user?.role;
// console.log(role,'role');

  const userData = authClient.useSession(); 
const user = userData.data?.user;  
// console.log(user,'user');
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);  

   if(pathname.includes('dashboard')){
  return null;
 }
  
  const isActive = (path) => pathname === path;
const handleSignOut = async () => {
await authClient.signOut();

}
  return (

    // <nav className="bg-[#0b1d3a] text-white">
<motion.nav
  initial={{ y: -80, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{
    duration: 0.5,
    ease: "easeOut",
  }}
  className="bg-[#0b1d3a] text-white"
>


      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        {/* <Link href="/" className="text-xl font-bold">
          Book<span className="text-yellow-400">Nest</span>
        </Link> */}
        <motion.div
  whileHover={{
    scale: 1.08,
  }}
>
  <Link href="/" className="text-xl font-bold">
    Book<span className="text-yellow-400">Nest</span>
  </Link>
</motion.div>

        {/* Desktop */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/" className={isActive("/") ? "text-yellow-400" : ""}>Home</Link>
          <Link href="/books" className={isActive("/books") ? "text-yellow-400" : ""}>Browse Books</Link>



{user && (
  <div className="relative">
    <button onClick={() => setDropdown(!dropdown)}>
      <div className="flex items-center gap-2">

        {/* User Image */}
        <Image
          src={user?.image || "/default-user.png"}
          alt="user"
          width={32}
          height={32}
          className="rounded-full object-cover border"
        />

        {/* Dashboard Text */}
        <span>Dashboard</span>

        {/* Icon */}
        {!dropdown ? <ChevronRight /> : <ChevronDown />}
      </div>
    </button>












    {/* {dropdown && (
      <div className="absolute z-50 top-10 text-white bg-[#0d244b] rounded p-1 w-44">
        <Link href="/" className=" gap-2  hover:bg-gray-300 ">
          <div className="">
            <div className="flex items-center gap-2">
               <Image
          src={user?.image || "/default-user.png"}
          alt="user"
          width={20}
          height={20}
          className="rounded-full object-cover border"
        />
              <p>{user?.name}</p>
              </div>   
             <p className="text-[10px]">{user?.email}</p>  
             <p className="text-[10px]">{role}</p>           
          </div>
         
        </Link>
        <Link href={`/dashboard/${role}/overview`} className="flex gap-2 p-1 mt-1 hover:bg-gray-300 hover:text-black">
          <div className="flex items-center gap-2">
           <LayoutDashboard size={16} /> Dashboard
          </div>
        </Link>

        <Link href="/dashboard/books" className="flex gap-2 p-1 mt-1 hover:bg-gray-300 hover:text-black">
          <div className="flex items-center gap-2">
             <User size={16} /> Profile
          </div>
        </Link>

      </div>
    )} */}




<AnimatePresence>
  {dropdown && (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: -10,
        scale: 0.95,
      }}
      transition={{
        duration: 0.25,
      }}
      className="absolute z-50 top-10 bg-[#0d244b] rounded p-1 w-44"
    >
      <Link href="/" className="gap-2 hover:bg-gray-300">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src={user?.image || "/default-user.png"}
              alt="user"
              width={20}
              height={20}
              className="rounded-full object-cover border"
            />
            <p>{user?.name}</p>
          </div>

          <p className="text-[10px]">{user?.email}</p>
          <p className="text-[10px]">{role}</p>
        </div>
      </Link>

      <Link
        href={`/dashboard/${role}/overview`}
        className="flex gap-2 p-1 mt-1 hover:bg-gray-300 hover:text-black"
      >
        <div className="flex items-center gap-2">
          <LayoutDashboard size={16} />
          Dashboard
        </div>
      </Link>

      <Link
        href="/dashboard/books"
        className="flex gap-2 p-1 mt-1 hover:bg-gray-300 hover:text-black"
      >
        <div className="flex items-center gap-2">
          <User size={16} />
          Profile
        </div>
      </Link>
    </motion.div>
  )}
</AnimatePresence>










  </div>
)}


            { user && <div>
                <Link href="/" onClick={handleSignOut} className="flex gap-2 p-1 px-3 bg-red-500 rounded-md ">
                  <div className="flex items-center gap-2"><LogOut size={16} /> LogOut  </div>
                </Link>
            </div>              
            }

         {!user && (<div className="flex flex-row gap-4">
           <Button className="bg-yellow-400 text-black px-4 py-1 rounded flex items-center gap-2">
            <Link href={'/signin'}><div className="flex gap-4"><LogOut size={16} /> Login</div></Link>  
          </Button>
          <Button className="bg-yellow-400 text-black px-4 py-1 rounded flex items-center gap-2">
           <Link href={'/signup'}><div className="flex gap-4"><LogOut size={16} /> Register</div></Link> 
          </Button>
          </div>)}
        

        </div>

        {/* Mobile Button */}   

 <div onClick={() => setOpen(!open)} className="dropdown dropdown-center sm:hidden ">
  
  <div  className="md:hidden cursor-pointer">
  {open ? <X className="text-white" /> : <Menu className="text-white" />}
</div>        
      </div>

      {/* Mobile Menu */}  


<ul
  className={` sm:hidden z-50 absolute top-12 left-0 w-full bg-[#31537c] shadow-md flex flex-col items-center gap-2 py-4 px-5 transition-all duration-300 ${
    open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
  }`}
>
  {navItems.map((item, index) => (
    <li className="w-full  border rounded-md " key={index}>
      <Link
        href={item.path}
        onClick={() => setOpen(false)}
        className="block w-full py-3 text-center rounded-lg transition-all duration-400 ease-in-out text-white "
      >
        {item.text}
      </Link>
    </li>
  ))}

{!user && <div className="flex flex-col w-full gap-2">
  <li className="w-full"><Link onClick={() => setOpen(false)} className="block w-full  border rounded-md text-center py-3 " href={'/signin'}>Login</Link></li>
<li className="w-full"><Link onClick={() => setOpen(false)} className="block w-full  border rounded-md text-center py-3 " href={'/signup'}>Register</Link></li>
</div> }

{user && <div className="flex flex-col w-full gap-2">
  <li className="w-full"><Link onClick={() => setOpen(false)} className="block w-full  border rounded-md text-center py-3 " href={`/dashboard/${role}/overview`}><div className="flex items-center justify-center gap-2"> <LayoutDashboard size={16} /> Dashboard </div></Link></li>
<li className="w-full "><Link onClick={() => setOpen(false)} className="block w-full  border rounded-md text-center py-3 " href={'/profile'}><div className="flex items-center justify-center gap-2">  <User size={16} /> Profile  </div></Link></li>
<li className="w-full bg-red-600 "><Link  onClick={handleSignOut} className="block w-full  border rounded-md text-center py-3 " href={'/'}><div className="flex items-center justify-center gap-2"><LogOut size={16} /> LogOut  </div></Link></li>
</div> }


  </ul>

  
</div> 


    {/* </nav> */}
    </motion.nav>
  );
}