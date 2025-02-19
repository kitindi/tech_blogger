import Image from "next/image";
import React from "react";
import { assets } from "@/assets/assets";
import Link from "next/link";

const Latest = () => {
  return (
    <section className="w-full  py-16 px-4 md:px-0">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-[#0f4189]">Latest News</h2>
      </div>
      <div className="w-full max-w-6xl mx-auto">
        <div className="w-full grid grid-cols-12 gap-10 pt-12">
          <div className="col-span-12 md:col-span-8  ">
            {/* post card */}
            <div className="py-4 border-b border-gray-200 flex item-start gap-10">
              <div>
                <Image src={assets[1].grockImage} alt="Grock Image" width={200} height={200} />
              </div>
              <div className=" flex-grow">
                <p className="text-sm font-semibold text-[#ff793f] mb-3">AI</p>

                <Link href="/blog/1" className="text-gray-700 font-medium hover:underline no-underline hover:underline-blue">
                  Nextdoor’s Nirav Tolia thinks he can turn things around with AI; he has a lot riding on it
                </Link>
                <p className="text-gray-400 flex items-center gap-3 pt-2 text-sm">
                  <span>Abdulaziz Sadi</span>
                  <span>February 18, 2025</span>
                </p>
              </div>
            </div>
            {/* post card */}
            <div className="py-4 border-b border-gray-200 flex item-start gap-10">
              <div>
                <Image src={assets[0].headerImage} alt="Grock Image" width={200} height={150} />
              </div>
              <div className=" flex-grow">
                <p className="text-sm font-semibold text-[#ff793f] mb-3">AI</p>

                <Link href="/blog/1" className="text-gray-700 font-medium hover:underline no-underline hover:underline-blue">
                  Nextdoor’s Nirav Tolia thinks he can turn things around with AI; he has a lot riding on it
                </Link>
                <p className="text-gray-400 flex items-center gap-3 pt-2 text-sm">
                  <span>Abdulaziz Sadi</span>
                  <span>February 18, 2025</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Latest;
