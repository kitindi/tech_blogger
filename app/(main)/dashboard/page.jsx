import Image from "next/image";
import React from "react";

const Dashboard = () => {
  return (
    <section className="px-10">
      {/* top bar */}
      <div className="grid grid-cols-12 gap-8  rounded-sm mb-5">
        <div className="col-span-9 bg-white py-3 px-4">
          <form action="" className="flex items-center gap-3">
            <div className="flex-grow">
              <input type="text" className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none" placeholder="Search Article ...." />
            </div>
            <div>
              <button type="submit" className="px-3 py-2 bg-blue-500 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#fff" viewBox="0 0 256 256">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
        <div className="col-span-3 flex justify-between items-center bg-white py-3 px-4">
          <div className="flex border-r border-gray-200 pr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#9ca3af" viewBox="0 0 256 256">
              <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
            </svg>

            <sup className="h-4 w-4 rounded-full bg-blue-600 text-[10px] flex items-center justify-center text-white">1</sup>
          </div>
          <div className="border-r border-gray-200 text-sm text-gray-500"> Hello, Jamal</div>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path>
            </svg>
          </span>
        </div>
      </div>
      {/* statistics */}
      <div className="grid grid-cols-12 gap-8  rounded-sm ">
        <div className="col-span-9 bg-white p-4">
          <div className="flex items-center">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#3b82f6" viewBox="0 0 256 256">
                <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"></path>
              </svg>
            </div>
            <div></div>
          </div>
        </div>
        <div className="col-span-3 flex justify-between items-center bg-white py-3 px-4">
          <div className="flex border-r border-gray-200 pr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#9ca3af" viewBox="0 0 256 256">
              <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
            </svg>

            <sup className="h-4 w-4 rounded-full bg-blue-600 text-[10px] flex items-center justify-center text-white">1</sup>
          </div>
          <div className="border-r border-gray-200 text-sm text-gray-500"> Hello, Jamal</div>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path>
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
