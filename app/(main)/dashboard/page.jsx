import Image from "next/image";
import React from "react";

const Dashboard = () => {
  return (
    <section classNameName="px-10">
      {/* top bar */}
      <div classNameName="sticky top-0 left-0 z-10 grid grid-cols-12 gap-8  rounded-sm mb-5 bg-white">
        <div classNameName="col-span-9 py-3 px-4">
          <form action="" classNameName="flex items-center gap-3">
            <div classNameName="flex-grow">
              <input type="text" classNameName="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none" placeholder="Search Article ...." />
            </div>
            <div>
              <button type="submit" classNameName="px-3 py-2 bg-blue-500 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#fff" viewBox="0 0 256 256">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
        <div classNameName="col-span-3 flex justify-between items-center bg-white py-3 px-4">
          <div classNameName="flex border-r border-gray-200 pr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#9ca3af" viewBox="0 0 256 256">
              <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
            </svg>

            <sup classNameName="h-4 w-4 rounded-full bg-blue-600 text-[10px] flex items-center justify-center text-white">1</sup>
          </div>
          <div classNameName="border-r border-gray-200 text-sm text-gray-500"> Hello, Jamal</div>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path>
            </svg>
          </span>
        </div>
      </div>

      <div classNameName="grid grid-cols-12 gap-8  rounded-sm ">
        <div classNameName="col-span-9  flex flex-col gap-4 ">
          {/* statistics */}
          <div classNameName="flex justify-between items-center p-4 bg-white">
            {/* card */}
            <div classNameName="flex items-center gap-4">
              <div classNameName="bg-blue-50 px-5 py-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#3b82f6" viewBox="0 0 256 256">
                  <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"></path>
                </svg>
              </div>
              <div>
                <p classNameName="text-sm font-bold text-gray-600">3000</p>
                <p classNameName="text-xs text-gray-500">Followers</p>
              </div>
            </div>
            {/* card */}
            <div classNameName="flex items-center gap-4">
              <div classNameName="bg-blue-50 px-5 py-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#3b82f6" viewBox="0 0 256 256">
                  <path d="M88,96a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,96Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Zm32,16H96a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM224,48V156.69A15.86,15.86,0,0,1,219.31,168L168,219.31A15.86,15.86,0,0,1,156.69,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H152V160a8,8,0,0,1,8-8h48V48H48Zm120-40v28.7L196.69,168Z"></path>
                </svg>
              </div>
              <div>
                <p classNameName="text-sm font-bold text-gray-600">30</p>
                <p classNameName="text-xs text-gray-500">Posts</p>
              </div>
            </div>
            {/* card */}
            <div classNameName="flex items-center gap-4">
              <div classNameName="bg-blue-50 px-5 py-3 rounded-md ">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#dc2c2c" viewBox="0 0 256 256">
                  <path d="M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,228.66,16,172,16,102A62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z"></path>
                </svg>
              </div>
              <div>
                <p classNameName="text-sm font-bold text-gray-600">3000</p>
                <p classNameName="text-xs text-gray-500">Likes</p>
              </div>
            </div>
            {/* card */}
            <div classNameName="flex items-center gap-4">
              <div classNameName="bg-blue-50 px-5 py-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#3b82f6" viewBox="0 0 256 256">
                  <path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"></path>
                </svg>
              </div>
              <div>
                <p classNameName="text-sm font-bold text-gray-600">3000</p>
                <p classNameName="text-xs text-gray-500">Views</p>
              </div>
            </div>
          </div>
          {/* viewers statistics */}
          <div classNameName="p-4 bg-white">
            <p classNameName="text-gray-600 font-semibold text-sm">Recent Posts</p>
            {/* table */}

            <div classNameName="">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-4">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-sm text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Post title
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Author
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Post Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Category
                      </th>

                      <th scope="col" className="p-4">
                        Author
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Apple MacBook Pro 17"
                      </th>
                      <td className="px-6 py-4">Silver</td>
                      <td className="px-6 py-4">Laptop</td>
                      <td className="px-6 py-4">$2999</td>
                      <td className="px-6 py-4">$2999</td>
                      <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Microsoft Surface Pro
                      </th>
                      <td className="px-6 py-4">White</td>
                      <td className="px-6 py-4">Laptop PC</td>
                      <td className="px-6 py-4">$1999</td>
                      <td className="px-6 py-4">$1999</td>
                      <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Magic Mouse 2
                      </th>
                      <td className="px-6 py-4">Black</td>
                      <td className="px-6 py-4">Accessories</td>
                      <td className="px-6 py-4">$99</td>
                      <td className="px-6 py-4">$99</td>
                      <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Apple Watch
                      </th>
                      <td className="px-6 py-4">Black</td>
                      <td className="px-6 py-4">Watches</td>
                      <td className="px-6 py-4">$199</td>
                      <td className="px-6 py-4">$199</td>
                      <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Apple iMac
                      </th>
                      <td className="px-6 py-4">Silver</td>
                      <td className="px-6 py-4">PC</td>
                      <td className="px-6 py-4">$2999</td>
                      <td className="px-6 py-4">$2999</td>
                      <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Apple AirPods
                      </th>
                      <td className="px-6 py-4">White</td>
                      <td className="px-6 py-4">Accessories</td>
                      <td className="px-6 py-4">$399</td>
                      <td className="px-6 py-4">$399</td>
                      <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        iPad Pro
                      </th>
                      <td className="px-6 py-4">Gold</td>
                      <td className="px-6 py-4">Tablet</td>
                      <td className="px-6 py-4">$699</td>
                      <td className="px-6 py-4">$699</td>
                      <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Magic Keyboard
                      </th>
                      <td className="px-6 py-4">Black</td>
                      <td className="px-6 py-4">Accessories</td>
                      <td className="px-6 py-4">$99</td>
                      <td className="px-6 py-4">$99</td>
                      <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Smart Folio iPad Air
                      </th>
                      <td className="px-6 py-4">Blue</td>
                      <td className="px-6 py-4">Accessories</td>
                      <td className="px-6 py-4">$79</td>
                      <td className="px-6 py-4">$79</td>
                      <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        AirTag
                      </th>
                      <td className="px-6 py-4">Silver</td>
                      <td className="px-6 py-4">Accessories</td>
                      <td className="px-6 py-4">$29</td>
                      <td className="px-6 py-4">$29</td>
                      <td className="px-6 py-4">
                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                          Edit
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 px-2" aria-label="Table navigation">
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
                    Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">1000</span>
                  </span>
                  <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        Previous
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        2
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        aria-current="page"
                        className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                      >
                        3
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        4
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        5
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div classNameName="py-20">H here</div>
          </div>
        </div>
        <div classNameName="col-span-3">
          <div classNameName=" bg-white py-3 px-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
