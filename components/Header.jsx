import Image from "next/image";
import Link from "next/link";
import React from "react";
import { assets } from "@/assets/assets";

const Header = () => {
  return (
    <section className="w-full   px-4 md:px-0">
      <div className="w-full max-w-6xl mx-auto pt-16 md:pt-28">
        <div className=" hidden w-full md:flex justify-center items-center p-4 ">
          <ul className="flex space-x-8 items-center font-semibold text-[#0f4189]">
            <li>
              <Link href="/">AI</Link>
            </li>
            <li>
              <Link href="/">Career</Link>
            </li>

            <li>
              <Link href="/">Software</Link>
            </li>
            <li>
              <Link href="/">Ed Tech</Link>
            </li>
            <li>
              <Link href="/">Startups</Link>
            </li>
            <li>
              <Link href="/">Computer Science</Link>
            </li>
            <li>
              <Link href="/">Popular</Link>
            </li>
            <li>
              <Link href="/">Events</Link>
            </li>
            <li>
              <Link href="/">Leadership</Link>
            </li>
            <li>
              <Link href="/">Podcasts</Link>
            </li>
            <li>
              <Link href="/">Mindset</Link>
            </li>
          </ul>
        </div>
        <div className="w-ful">
          <div className="w-full grid grid-cols-12 md:gap-20 pt-5">
            <div className="w-full col-span-12 md:col-span-7 py-4">
              <div className="relative w-full">
                <h3 className="text-[#ff793f] font-medium text-lg mb-3">AI</h3>
                <Image src={assets[0].headerImage} alt="header image" className="w-full object-cover" />
                <div className="absolute left-0 bottom-0 right-0  py-10 px-5">
                  <Link href="" className="text-4xl font-bold text-white hover:underline no-underline">
                    Nextdoor’s Nirav Tolia thinks he can turn things around with AI; he has a lot riding on it
                  </Link>
                  <p className="flex items-center py-2">
                    <span className="text-xs text-slate-100 mt-2 font-semibold">February 18, 2025</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 py-6 pl-5">
              <h2 className="text-xl font-bold text-[#0f4189]">Latest this February</h2>
              <div className="pt-4">
                {/* post 1 */}
                <div className="mb-2 flex items-start gap-5">
                  <div className="pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="10" height="10" color="#0f4189" fill="#0f4189">
                      <path
                        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                      />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    {" "}
                    <h4 className="text-[#ff793f] font-medium text-lg mb-1">AI</h4>
                    <Link href="" className="text-md font-semibold text-[#0f4189] hover:underline no-underline">
                      Nextdoor’s Nirav Tolia thinks he can turn things around with AI; he has a lot riding on it
                    </Link>
                    <p className="flex items-center py-2">
                      <span className="text-xs text-slate-600 mt-2">February 18, 2025</span>
                    </p>
                  </div>
                </div>
                {/* post 1 */}
                <div className="mb-2 flex items-start gap-5">
                  <div className="pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="10" height="10" color="#0f4189" fill="#0f4189">
                      <path
                        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                      />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    {" "}
                    <h4 className="text-[#ff793f] font-medium text-lg mb-1">AI</h4>
                    <Link href="" className="text-md font-semibold text-[#0f4189] hover:underline no-underline">
                      Nextdoor’s Nirav Tolia thinks he can turn things around with AI; he has a lot riding on it
                    </Link>
                    <p className="flex items-center py-2">
                      <span className="text-xs text-slate-500 mt-2 font-semibold">February 18, 2025</span>
                    </p>
                  </div>
                </div>
                {/* post 1 */}
                <div className="mb-2 flex items-start gap-5">
                  <div className="pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="10" height="10" color="#0f4189" fill="#0f4189">
                      <path
                        d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                      />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    {" "}
                    <h4 className="text-[#ff793f] font-medium text-lg mb-1">AI</h4>
                    <Link href="" className="text-md font-semibold text-[#0f4189] hover:underline no-underline">
                      Nextdoor’s Nirav Tolia thinks he can turn things around with AI; he has a lot riding on it
                    </Link>
                    <p className="flex items-center py-2">
                      <span className="text-xs text-slate-600 mt-2">February 18, 2025</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
