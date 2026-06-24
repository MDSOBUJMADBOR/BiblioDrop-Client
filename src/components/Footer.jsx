import React from 'react';
// Import correct icon names from Gravity UI Icons
import { LogoFacebook,  CircleNumber2, LogoTelegram, LogoLinkedin, BookOpen } from '@gravity-ui/icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { label: 'About Us', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'How It Works', href: '#' },
    ],
    categories: [
      { label: 'Fiction', href: '#' },
      { label: 'Sci-Fi', href: '#' },
      { label: 'Academic', href: '#' },
      { label: 'Self-Help', href: '#' },
      { label: 'Romance', href: '#' },
    ],
    support: [
      { label: 'Help Center', href: '#' },
      { label: 'Shipping Info', href: '#' },
      { label: 'Returns', href: '#' },
      { label: 'FAQ', href: '#' },
    ]
  };

  return (
    <footer className="w-full font-sans">
      {/* 1. Newsletter Section */}
      <div className="bg-[#0c1033] border-b border-slate-800 px-6 py-10 md:py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-white text-xl md:text-2xl font-bold tracking-wide">
              Stay Updated with New Books
            </h2>
            <p className="text-slate-400 text-sm mt-1 max-w-md">
              Subscribe to our newsletter and never miss new arrivals and offers.
            </p>
          </div>
          
          <div className="w-full md:w-auto flex flex-col sm:flex-row items-stretch gap-3 min-w-[320px] md:min-w-[450px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#131947] text-white border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 w-full placeholder-slate-500"
            />
            <button className="bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 text-white font-semibold text-sm px-6 py-3 rounded-xl transition duration-200 shadow-lg shadow-indigo-600/20 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Links & Info Section */}
      <div className="bg-[#04081f] text-slate-300 px-6 pt-16 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 pb-12 border-b border-slate-900">
            
            {/* Brand/Social Column */}
            <div className="lg:col-span-4 flex flex-col gap-5">
              <div className="flex items-center gap-2.5 text-white">
                {/* Gravity UI Book Open Icon */}
                <BookOpen className="w-6 h-6 text-indigo-400" />
                <span className="text-xl font-bold tracking-tight">BiblioDrop</span>
              </div>
              <div className="text-sm font-medium leading-relaxed max-w-sm">
                <p className="text-indigo-400 mb-2">Your Local Library, Delivered.</p>
                <p className="text-slate-400">Connecting user with books and libraries.</p>
              </div>
              
              {/* Social Media Buttons using Gravity Components */}
              <div className="flex items-center gap-3 mt-2">
                {[
                  { icon: <LogoFacebook className="w-4 h-4" />, href: '#' },
                  { icon: <CircleNumber2 className="w-4 h-4" />, href: '#' },
                  { icon: <LogoTelegram className="w-4 h-4" />, href: '#' },
                  { icon: <LogoLinkedin className="w-4 h-4" />, href: '#' }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="w-8 h-8 rounded-lg bg-[#131947] border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 transition duration-200"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white font-semibold text-sm tracking-wide mb-4">Quick Links</h3>
                <ul className="space-y-3 text-xs text-slate-400 font-medium">
                  {footerLinks.quickLinks.map((link, idx) => (
                    <li key={idx}><a href={link.href} className="hover:text-white transition">{link.label}</a></li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold text-sm tracking-wide mb-4">Categories</h3>
                <ul className="space-y-3 text-xs text-slate-400 font-medium">
                  {footerLinks.categories.map((link, idx) => (
                    <li key={idx}><a href={link.href} className="hover:text-white transition">{link.label}</a></li>
                  ))}
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <h3 className="text-white font-semibold text-sm tracking-wide mb-4">Support</h3>
                <ul className="space-y-3 text-xs text-slate-400 font-medium">
                  {footerLinks.support.map((link, idx) => (
                    <li key={idx}><a href={link.href} className="hover:text-white transition">{link.label}</a></li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* 3. Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-slate-500 font-medium">
            <p>© {currentYear} BiblioDrop. All rights reserved.</p>
            
            <div className="flex items-center gap-2">
              <div className="bg-[#635bff] text-white px-3 py-1 rounded font-bold text-[10px] tracking-wide uppercase shadow-sm">
                stripe
              </div>
              <div className="bg-white text-[#1a1f71] px-3 py-1 rounded font-black italic text-xs border border-slate-200 shadow-sm">
                VISA
              </div>
              <div className="bg-[#222] px-2.5 py-1 rounded flex items-center gap-0.5 border border-slate-800 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-[#eb001b] block"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f00] block -ml-1.5 opacity-90"></span>
              </div>
              <div className="bg-white text-[#003087] px-3 py-1 rounded font-extrabold italic text-xs border border-slate-200 shadow-sm flex items-center">
                Pay<span className="text-[#0079c1]">Pal</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}