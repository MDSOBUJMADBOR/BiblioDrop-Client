'use client'
import Link from "next/link";
import {LogoFacebook,LogoGithub} from '@gravity-ui/icons';
import {LogoTelegram} from '@gravity-ui/icons';
import { usePathname } from "next/navigation";

export default function Footer() {
   const pathname = usePathname();
   if(pathname.includes('dashboard')){
    return null;
   }
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">

        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold text-white">BiblioDrop</h2>
          <p className="mt-3 text-sm">
            Your Local Library, Delivered.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/books" className="hover:text-white">Browse Books</Link></li>
            <li><Link href="#" className="hover:text-white">About</Link></li>
            <li><Link href="#" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Policy Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Legal</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-white">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Newsletter</h3>
          <p className="text-sm mb-3">Subscribe for latest books & updates</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-md bg-gray-800 border border-gray-700 focus:outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-md text-white hover:bg-blue-700 hover:cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto border-t border-gray-700 py-4 px-6 flex flex-col md:flex-row justify-between items-center">
        
        <p className="text-sm">
          © {new Date().getFullYear()} BiblioDrop. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-3 md:mt-0">
          <Link href="#"><LogoFacebook className="text-blue-400  h-8 w-8 rounded-full p-0.5" /></Link>
          <Link href="#"><LogoTelegram className="text-blue-400  h-8 w-8 rounded-full p-0.5" /></Link>         
          <Link href="#"><LogoGithub className="text-black bg-white   h-8 w-8 rounded-full p-0.5 " /></Link>    
        </div>
      </div>
    </footer>
  );
}