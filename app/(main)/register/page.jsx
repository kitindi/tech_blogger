import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <section classNameName="w-full py-40">
      <div classNameName="w-full max-w-6xl mx-auto">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Create Account</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label for="email" className="block text-sm/6 font-medium text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autocomplete="email"
                    required
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 border border-gray-400  placeholder:text-gray-400  focus:outline-none  sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label for="password" className="block text-sm/6 font-medium text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 border border-gray-400  placeholder:text-gray-400  focus:outline-none  sm:text-sm/6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label for="password" className="block text-sm/6 font-medium text-gray-900">
                    Confirm Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    type="password"
                    name="password2"
                    id="password2"
                    required
                    className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 border border-gray-400  placeholder:text-gray-400  focus:outline-none  sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#0f4189] px-3 py-2.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#0f4189]  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f4189]"
                >
                  Create account
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm/6 text-gray-500">
              Already a member?
              <Link href="/login" className="font-semibold text-[#0f4189]  hover:text-[#0f4189]  ml-3">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
