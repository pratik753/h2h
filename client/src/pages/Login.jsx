import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { login } from "../api/index";

const Login = () => {
  const cleardata = () => {
    localStorage.clear("pos");
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email.length === 0 || password.length <= 4) {
      alert("Please enter Valid Email/Password");
      return;
    }
    try {
      // response = await axios.post("http://localhost:8800/api/auth/login",formData);
      let response = await login({ email, password });
      localStorage.setItem("token", response.data.accesToken);
      localStorage.setItem("position", response.data.rows[0].position);
      if (
        response.data.rows[0].position === "Doctor" ||
        response.data.rows[0].position === "Nurse"
      ) {
        localStorage.setItem("pos", "1");
        window.location.href = "/prescription";
      } else {
        localStorage.setItem("pos", "2");
        window.location.href = "/dealer";
      }
    } catch (err) {
      alert("Please Try again");
    }
  };
  return (
    <div className="h-full md:h-screen md:flex py-10 " onLoad={cleardata}>
      <div className="grid grid-flow-col md:flex md:w-1/2 justify-center  items-center bg-white">
        <div>
          <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <a
                className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                href="#"
              >
                <img className=" h-auto w-56 mr-2" src={logo} alt="logo" />
              </a>
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                  </h1>
                  <form className="space-y-4 md:space-y-6" action="#">
                    <div>
                      <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="email"
                      >
                        Your email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                            type="checkbox"
                            aria-describedby="remember"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="remember"
                            className="text-gray-500 dark:text-gray-300"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="text-sm font-medium text-primary-600 hover:underline px-3 dark:text-primary-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="w-full text-white bg-indigo-600 hover:bg-indigo-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      onClick={handlesubmit}
                    >
                      Sign in
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="relative flex w-full h-full overflow-hidden md:flex md:w-1/2  bg-gradient-to-tr md:rounded-l-lg from-blue-800 to-purple-700 i justify-around items-center ">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans my-10">Sign Up</h1>
          <p className="text-white mt-1">Lets get started with Heal2Health</p>
          <div className="grid grid-flow-row md:grid-cols-3 pb-10 gap-8 text-white mt-10 ">
            <div className="relative">
              <input
                id="standard_alt"
                name="shippingOption"
                className="hidden group peer"
                type="radio"
                value="standard_alt"
              />
              <NavLink to="/signUp">
                <label
                  className="block p-2 text-sm font-medium transition-colors border border-gray-100  hover:text-gray-800 rounded-lg shadow-sm cursor-pointer peer-checked:border-indigo-500 peer-checked:bg-white peer-checked:text-black hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-indigo-500"
                  htmlFor="standard_alt"
                >
                  <span> Doctor </span>

                  <span className="block mt-1 text-xs text-gray-400"> Free </span>
                </label>
              </NavLink>

              <svg
                className="absolute w-5 h-5 text-indigo-600 opacity-0 top-8 right-3 peer-checked:opacity-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="relative">
              <input
                className="hidden group peer"
                type="radio"
                name="shippingOption"
                value="next_day_alt"
                id="next_day_alt"
              />
              <NavLink to="/signUp">
                <label
                  className="block p-2 text-sm font-medium transition-colors border  peer-checked:bg-white peer-checked:text-black  hover:text-gray-800 border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-indigo-500 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-indigo-500"
                  htmlFor="next_day_alt"
                >
                  <span> Nurse/Admin </span>

                  <span className="block mt-1 text-xs text-gray-400">
                    {" "}
                    Standard{" "}
                  </span>
                </label>
              </NavLink>

              <svg
                className="absolute w-5 h-5 text-indigo-600 opacity-0 top-8 right-3 peer-checked:opacity-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="relative">
              <input
                className="hidden group peer"
                type="radio"
                name="shippingOption"
                value="day_alt"
                id="day_alt"
              />
              <NavLink to="/signUp">
                <label
                  className="block p-2 text-sm font-medium transition-colors border hover:text-gray-800  peer-checked:bg-white peer-checked:text-black border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-indigo-500 hover:bg-gray-50 peer-checked:ring-1 peer-checked:ring-indigo-500"
                  htmlFor="day_alt"
                >
                  <span> Dealer </span>

                  <span className="block mt-1 text-xs text-gray-400"> Normal </span>
                </label>
              </NavLink>

              <svg
                className="absolute w-5 h-5 text-indigo-600 opacity-0 top-8 right-3 peer-checked:opacity-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="absolute invisible md:visible   bg-green-400  -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute invisible md:visible   bg-green-400 -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute invisible md:visible   bg-green-400 -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute invisible md:visible   bg-green-400 -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
    </div>
  );
};

export default Login;
