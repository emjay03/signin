import React from "react";

function Signin() {
  return (
    <div className="max-w-[1140px] flex h-screen m-auto ">
      <div className="w-[500px] h-[500px] m-auto shadow-lg ">
        <div className="w-[400px] m-auto">
          <div className=" pt-9 pb-5">
            <h1 className=" font-sans font-bold text-3xl pb-2">Sign in</h1>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptate repelletetur.
            </p>
          </div>
          <div class="">
            <div className="py-2">
              <label   
                className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                className="outline-none w-full p-3 rounded-2xl text-base border-gray-300 border placeholder-gray-400"
                placeholder="Email"
                required=""
              />
            </div>
            <div className="py-2">
              <label
                for="first_name"
                className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300"
              >
                Password
              </label>
              <input
                type="password"
                id="first_name"
                className="outline-none w-full p-3 rounded-2xl text-base border-gray-300 border placeholder-gray-400"
                placeholder="***********"
                required=""
              />
            </div>
            <div class="flex items-start py-1">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 border accent-violet-900"
                  required=""
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="remember" className="text-gray-400">
                  Remember me
                </label>
              </div>
            </div>

            <div className="py-4">
              <button
                type="submit"
                className="w-full rounded-2xl p-3  bg-violet-900 text-white font-sans "
                required=""
              >
                Sign in
              </button>
            </div>
            <p className="font-sans text-sm  ">
              Not registered yet?<span className="text-violet-900 px-2" required=""><a href="">Create an Account</a></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
