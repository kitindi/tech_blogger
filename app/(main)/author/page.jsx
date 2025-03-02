import Image from "next/image";
import React from "react";
import { assets } from "@/assets/assets";

const page = () => {
  return (
    <div className="w-full bg-white pb-20 px-4 md:px-0">
      <div className="w-full max-w-5xl mx-auto pt-36">
        <h2 className="text-2xl md:text-4xl font-bold text-[#0f4189] pb-5">
          About <span className="text-[#ff793f]">Tech Weekly</span>
        </h2>
        <p className="text-[#666a7b] max-w-3xl py-4 text-16 md:text-[17px]">
          Meet the dedicated professionals who provide in-depth and high-quality coverage of the business side of the tech industry, keeping you informed on
          market trends, industry changes, and corporate strategies.
        </p>
        <div className="grid grid-cols-12 gap-5 py-10">
          <div className="col-span-12 md:col-span-4 py-4 flex items-start gap-8">
            <Image src={assets.authors[0]} width={120} height={120} alt="author" />

            <div className="">
              <h3 className="text-[#0f4189] font-bold">Abdulaziz Sadi</h3>
              <p className="text-[#666a7b] text-sm pt-2 ">Editor in Chief & General Manager</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 py-4 flex items-start gap-8">
            <Image src={assets.authors[0]} width={120} height={120} alt="author" />

            <div className="">
              <h3 className="text-[#0f4189] font-bold">Othman Juma</h3>
              <p className="text-[#666a7b] text-sm pt-2 ">Dirctor of Programming</p>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 py-4 flex items-start gap-8">
            <Image src={assets.authors[0]} width={120} height={120} alt="author" />

            <div className="">
              <h3 className="text-[#0f4189] font-bold">Abdulaziz Sadi</h3>
              <p className="text-[#666a7b] text-sm pt-2 ">Editor & CTO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
