import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/lenis-provider";
import { ToastContainer } from "react-toastify";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono", 
  subsets: ["latin"],
});

export const metadata = {
  title: "BiblioDrop | Your Local Library, Delivered",
  description:
    "Discover books, connect with local libraries and independent book owners, and get your favorite books delivered to your doorstep.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        <main>
          
          
             <LenisProvider>
              {children}
             </LenisProvider>
          </main>
        <Footer></Footer>
         <ToastContainer />
        </body>
    </html>
  );
}
