import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <section className="w-full h-[90vh] bg-[#f2f8ff] px-4 md:px-0">
      <div className="w-full max-w-6xl mx-auto pt-28">
        <div className=" hidden w-full md:flex justify-center items-center p-4 ">
          <ul className="flex space-x-8 items-center font-semibold text-[#0f4189]">
            <li>
              <Link href="/">AI</Link>
            </li>
            <li>
              <Link href="/">Career</Link>
            </li>
            <li>
              <Link href="/">Collaboration</Link>
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
              <Link href="/">Leadership</Link>
            </li>
            <li>
              <Link href="/">Mindset</Link>
            </li>
          </ul>
        </div>
        <div className="w-full bg-white">here</div>
      </div>
    </section>
  );
};

export default Header;
