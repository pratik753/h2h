import React from "react";
import { useState } from "react";
import FileBase from "react-file-base64";
import axios from "axios";
import { productAdd } from "../api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DealerAddProduct({ Clicked, setClicked }) {
  const [postData, setPostData] = useState({
    title: "",
    descriptio: "",
    price: "",
    image_name: "",
    per: "",
  });
  async function f1(e) {
    e.preventDefault();
    console.log(postData);
    const res = await productAdd(postData);
    notify("Product add Successfull");
    try {
    } catch (error) {
      notify("Something want wrong,Please try again");
    }
  }
  const notify = (data) => toast(data);
  return (
    <div>
      {/* <!-- drawer init and show --> */}
      <ToastContainer />
      <div className="text-center flex mb-2">
        <button
          className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
          type="button"
          onClick={() => setClicked(!Clicked)}
        >
          Back
        </button>
      </div>
      {/* 
<!-- drawer component --> */}
      <div
        id="drawer-form"
        className="fixed z-40 h-screen p-4 overflow-y-auto bg-white w-80 dark:bg-gray-800 transition-transform left-0 top-0 -translate-x-full"
        tabindex="-1"
        aria-labelledby="drawer-form-label"
        aria-hidden="true"
      />
      <h5
        id="drawer-label"
        className="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
      >
        <svg
          className="w-5 h-5 mr-2"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          ></path>
        </svg>
        New Product
      </h5>
      <button
        type="button"
        data-drawer-dismiss="drawer-form"
        aria-controls="drawer-form"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      <form action="#" className="mb-6">
        <div className="relative mb-6 grid  ">
          <fieldset className="w-full space-y-1 dark:text-gray-100">
            <label htmlFor="files" className="block text-sm font-medium">
              Add images
            </label>
            <div className="flex">
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setPostData({ ...postData, image_name: base64 })
                }
                className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
              />
            </div>
          </fieldset>
        </div>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
          >
            Company
          </label>
          <input
            type="text"
            className=" mb-2 border-gray-300  font-medium text-gray-900  text-sm rounded-lg  focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
            placeholder="Add company "
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 "
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
            placeholder="anscare gel"
            required=""
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Description
          </label>
          <textarea
            id="description"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
            placeholder="Write product description..."
            onChange={(e) =>
              setPostData({ ...postData, descriptio: e.target.value })
            }
          ></textarea>
        </div>

        <div className="mb-4">
          <div className="relative">
            <input
              type="search"
              id="guests"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
              placeholder="Add Product Feature"
              required=""
            />
            <button
              type="button"
              className="absolute inline-flex items-center px-3 py-1 text-sm font-medium text-white bg-indigo-700 rounded-lg right-2 bottom-2 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
            >
              Add
            </button>
          </div>
        </div>
        <div className="mb-4">
          <fieldset className="w-full space-y-1 dark:text-gray-100">
            <label htmlFor="price" className="block text-sm font-medium">
              Product price
            </label>

            <div className="flex">
              <input
                type="text"
                name="price"
                id="price"
                placeholder="99 999,99"
                className="flex flex-1  text-right border sm:text-sm rounded-l-md focus:ring-inset border-gray-300 dark:text-gray-100 dark:bg-gray-800 focus:ring-violet-400"
                onChange={(e) =>
                  setPostData({ ...postData, price: e.target.value })
                }
              />

              <span className="flex items-center px-3 pointer-events-none sm:text-sm text-white rounded-r-md bg-indigo-700">
                ₹
              </span>
            </div>
            <label htmlFor="price" className="block text-sm font-medium">
              Reimbrecent Percentage
            </label>

            <div className="flex">
              <input
                type="text"
                name="price"
                id="price"
                placeholder="10"
                className="flex flex-1  text-right border sm:text-sm rounded-l-md focus:ring-inset border-gray-300 dark:text-gray-100 dark:bg-gray-800 focus:ring-violet-400"
                onChange={(e) =>
                  setPostData({ ...postData, per: e.target.value })
                }
              />
              <span className="flex items-center px-3 pointer-events-none sm:text-sm text-white rounded-r-md bg-indigo-700">
                %
              </span>
            </div>
          </fieldset>
        </div>
        <button
          type="submit"
          className="text-white justify-center flex items-center bg-indigo-700 hover:bg-indigo-800 w-full focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
          onClick={f1}
        >
          {" "}
          Create product
        </button>
      </form>
    </div>
  );
}

export default DealerAddProduct;
