import React from "react";
import DealerAddProduct from "../components/DealerAddProduct";
import List from "../components/List";
import { useState } from "react";

function DealerPage() {
  const [Clicked, setClicked] = useState(false);

  return (
    <div>
      <div className="p-5 w-full flex justify-between bg-indigo-300">
        <div
          className={`ml-8 mr-2 p-2 flex align-middle ${
            Clicked ? "hidden" : "visible"
          } md:visible font-semibold text-xl align-middle  text-gray-700`}
        >
          {" "}
          <p className="flex align-middle ">Add New Products</p>{" "}
        </div>
        {Clicked ? (
          <div className="">
            <DealerAddProduct Clicked={Clicked} setClicked={setClicked} />
          </div>
        ) : (
          <button
            onClick={() => setClicked(!Clicked)}
            className="text-white justify-self-end inline-block w-56 text-lg px-2.5 py-3 bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg    dark:bg-indigo-600 dark:hover:bg-indigo-700 focus:outline-none dark:focus:ring-indigo-800"
            type="button"
          >
            Add Product
          </button>
        )}
      </div>
      <div className="p-8 ">
        <List />
      </div>
    </div>
  );
}

export default DealerPage;
