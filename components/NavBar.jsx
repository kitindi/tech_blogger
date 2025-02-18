import Link from "next/link";
import React from "react";
Headers;
const NavBar = () => {
  return (
    <div className="w-full fixed left-0 right-0 top-5 z-10 bg-transparent px-4 md:px-0">
      <nav className="w-full max-w-6xl mx-auto flex justify-between items-center px-4 py-3 border rounded-lg border-slate-200 bg-white">
        <div className="flex items-center space-x-5 md:gap-16">
          <div className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
              <path d="M4 5L20 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M4 12L20 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M4 19L20 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <p className="text-[#ff793f] text-lg font-bold">Tech Weekly</p>
          <ul className="hidden md:flex space-x-12 items-center font-semibold text-[#0f4189]">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">All posts</Link>
            </li>
            <li>
              <Link href="/">Topics</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-2 ">
          <div className="hidden md:block">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
              <path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <button className="hidden md:block border border-slate-300 hover:bg-gray-100 bg-white hover:border-gray-100 text-[#0f4189] px-8 py-1.5 rounded-sm">
            Log In
          </button>
          <button className="bg-[#0f4189] text-white px-8 py-1.5 rounded-sm">Subscribe</button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
