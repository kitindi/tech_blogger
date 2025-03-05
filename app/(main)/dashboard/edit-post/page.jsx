import DashbaordHeader from "@/components/DashbaordHeader";
import Image from "next/image";
import React from "react";

const EditPost = () => {
  return (
    <section className="px-5">
      {/* top bar */}
      <DashbaordHeader />

      <div className="grid grid-cols-12 gap-8  rounded-sm ">
        <div className="col-span-9  flex flex-col gap-4 ">
          <form action="#" className="p-10 bg-white" method="POST">
            <h2 className=" pb-10 text-xl font-medium text-gray-600">Edit post</h2>
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Post Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none"
                  placeholder="Type product name"
                  required=""
                />
              </div>
              <div>
                <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Category
                </label>
                <select
                  id="category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:outline-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                >
                  <option selected="">AI</option>
                  <option value="Career">Career</option>
                  <option value="Software">Software</option>
                  <option value="Ed Tech">Ed Tech</option>
                  <option value="Startup">Startup</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Tech Events">Tech Events</option>
                  <option value="Mindset">Mindset</option>
                </select>
              </div>
              <div></div>

              <div className="sm:col-span-2">
                <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Content
                </label>
                <textarea
                  id="description"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 focus:outline-none "
                  placeholder="Write product description here"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              <svg className="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path>
              </svg>
              Save changes
            </button>
          </form>
        </div>
        <div className="col-span-3"></div>
      </div>
    </section>
  );
};

export default EditPost;
