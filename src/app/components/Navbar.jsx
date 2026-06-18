"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  Menu,
  X,
  User,
  Book,
  BarChart,
  LogOut,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { Button } from "@heroui/react";

const toggleMenu = () => {
  setOpen(prev => !prev); 
};

const navItems = [
 {
path: "/",
text: "Home"
 },
 {
path: "/books",
text: "Browse Books"
 },
 {
path: "/profile",
text: "Profile"
 },
 {
path: "/profile",
text: "Books"
 },
 {
path: "/profile",
text: "Analytics"
 },

]

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-gradient-to-r from-[#0b1d3a] to-[#0f2a5c] text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          Book<span className="text-yellow-400">Nest</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex gap-6 items-center">
          <Link href="/" className={isActive("/") ? "text-yellow-400" : ""}>Home</Link>
          <Link href="/books" className={isActive("/books") ? "text-yellow-400" : ""}>Browse Books</Link>

          {/* Dropdown */}
          <div className="relative">
            <button onClick={() => setDropdown(!dropdown)}>
             <div className="flex"> Dashboard {!dropdown ? <ChevronRight /> :  <ChevronDown />}</div>
            </button>

            {dropdown && (
              <div className="absolute top-10 bg-white text-black rounded shadow p-2 w-44">
                <Link href="/dashboard/profile" className="flex gap-2 p-2 hover:bg-gray-100">
                  <User size={16} /> Profile
                </Link>
                <Link href="/dashboard/books" className="flex gap-2 p-2 hover:bg-gray-100">
                  <Book size={16} /> Books
                </Link>
                <Link href="/dashboard/analytics" className="flex gap-2 p-2 hover:bg-gray-100">
                  <BarChart size={16} /> Analytics
                </Link>
              </div>
            )}
          </div>

          <Button className="bg-yellow-400 text-black px-4 py-1 rounded flex items-center gap-2">
            <Link href={'/signin'}><div className="flex gap-4"><LogOut size={16} /> Login</div></Link>
          </Button>
        </div>

        {/* Mobile Button */}   

 <div onClick={() => setOpen(!open)} className="dropdown dropdown-center sm:hidden ">
  
  <div onClick={toggleMenu} className="sm:hidden cursor-pointer">
  {open ? <X className="text-white" /> : <Menu className="text-white" />}
</div>        
      </div>

      {/* Mobile Menu */}  


<ul
  className={` sm:hidden absolute top-12 left-0 w-full bg-[#31537c] shadow-md flex flex-col items-center gap-2 py-4 px-5 transition-all duration-300 ${
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
{/* {!user && <li className="w-full px-4">
    <Link
      href="/login"
      className="block w-full py-2 text-center rounded-lg transition-all duration-300 ease-in-out hover:bg-[#3cd86b] text-white"
    >
      <Button className="text-lg " variant="light">Login</Button>
    </Link>
  </li>}
{user && <li className="flex gap-3">
              <Avatar size="sm">
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback> 
              </Avatar>

              <Button onClick={handleSignOut} size="sm" variant="danger">LoginOut</Button>
            </li>
} */}
<li>login</li>
  </ul>

  
</div>


    </nav>
  );
}