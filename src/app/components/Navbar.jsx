"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import {
  Bars,
  Xmark,
  ChevronDown,
  User,
  BookOpen,
  House,
} from "@gravity-ui/icons";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);

  // fake auth (replace later)
  const user = true;
  const role = "admin";

  const linkClass = (path) =>
    pathname === path
      ? "text-blue-500 font-semibold"
      : "text-gray-700 hover:text-blue-500";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          BiblioDrop
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">

          <Link href="/" className={linkClass("/")}>
            <span className="flex items-center gap-1">
              <House width={18} /> Home
            </span>
          </Link>

          <Link href="/books" className={linkClass("/books")}>
            <span className="flex items-center gap-1">
              <BookOpen width={18} /> Browse Books
            </span>
          </Link>

          {/* Dashboard Dropdown */}
          {user && (
            <div className="relative">
              <button
                onClick={() => setDashboardOpen(!dashboardOpen)}
                className="flex items-center gap-1 text-gray-700 hover:text-blue-500"
              >
                <User width={18} />
                Dashboard
                <ChevronDown width={16} />
              </button>

              {dashboardOpen && (
                <div className="absolute top-10 left-0 bg-white shadow-lg rounded-md w-48 p-2">
                  <Link
                    href="/dashboard/profile"
                    className="block px-3 py-2 hover:bg-gray-100 rounded"
                  >
                    My Profile
                  </Link>

                  <Link
                    href="/dashboard/books"
                    className="block px-3 py-2 hover:bg-gray-100 rounded"
                  >
                    My Books
                  </Link>

                  {role === "admin" && (
                    <Link
                      href="/dashboard/admin"
                      className="block px-3 py-2 hover:bg-gray-100 rounded"
                    >
                      Admin Panel
                    </Link>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Auth */}
          {user ? (
            <button className="bg-red-500 text-white px-4 py-2 rounded">
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? <Xmark width={24} /> : <Bars width={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">

          <Link href="/" className="block py-2">
            Home
          </Link>

          <Link href="/books" className="block py-2">
            Browse Books
          </Link>

          {/* Dashboard */}
          {user && (
            <div>
              <button
                onClick={() => setDashboardOpen(!dashboardOpen)}
                className="flex justify-between w-full py-2"
              >
                Dashboard <ChevronDown width={16} />
              </button>

              {dashboardOpen && (
                <div className="ml-4">
                  <Link href="/dashboard/profile" className="block py-1">
                    My Profile
                  </Link>
                  <Link href="/dashboard/books" className="block py-1">
                    My Books
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Auth */}
          {user ? (
            <button className="mt-3 w-full bg-red-500 text-white py-2 rounded">
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="block mt-3 bg-blue-500 text-white py-2 rounded text-center"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;