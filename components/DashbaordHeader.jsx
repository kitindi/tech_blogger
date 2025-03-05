import React from "react";

const DashbaordHeader = () => {
  return (
    <div className="sticky top-0 left-0 z-10 grid grid-cols-12 gap-8  rounded-sm mb-5 bg-white">
      <div className="col-span-9 px-4">
        <div className="flex justify-between items-center p-4 bg-white">
          {/* card */}
          <div className="flex items-center gap-4">
            <div className="bg-blue-50 px-5 py-3 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#3b82f6" viewBox="0 0 256 256">
                <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"></path>
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-600">3000</p>
              <p className="text-xs text-gray-500">Followers</p>
            </div>
          </div>
          {/* card */}
          <div className="flex items-center gap-4">
            <div className="bg-blue-50 px-5 py-3 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#3b82f6" viewBox="0 0 256 256">
                <path d="M88,96a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,96Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Zm32,16H96a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM224,48V156.69A15.86,15.86,0,0,1,219.31,168L168,219.31A15.86,15.86,0,0,1,156.69,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H152V160a8,8,0,0,1,8-8h48V48H48Zm120-40v28.7L196.69,168Z"></path>
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-600">30</p>
              <p className="text-xs text-gray-500">Posts</p>
            </div>
          </div>
          {/* card */}
          <div className="flex items-center gap-4">
            <div className="bg-blue-50 px-5 py-3 rounded-md ">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#dc2c2c" viewBox="0 0 256 256">
                <path d="M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,228.66,16,172,16,102A62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z"></path>
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-600">3000</p>
              <p className="text-xs text-gray-500">Likes</p>
            </div>
          </div>
          {/* card */}
          <div className="flex items-center gap-4">
            <div className="bg-blue-50 px-5 py-3 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#3b82f6" viewBox="0 0 256 256">
                <path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"></path>
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-600">3000</p>
              <p className="text-xs text-gray-500">Views</p>
            </div>
          </div>
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
  );
};

export default DashbaordHeader;
