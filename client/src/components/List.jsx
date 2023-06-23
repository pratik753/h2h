import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  CircularProgress,
  getListItemSecondaryActionClassesUtilityClass,
} from "@mui/material";
import { getPosts, getParticularpres } from "./post";
import { addToCartPres, resetstate } from "./CartReducer";
import pic from "./image.png";
import Example from "./Example";
import { getPre } from "../api";
var flag = 1;
function List() {
  const [value, setValue] = useState([]);
  const [data, showdata] = useState([]);
  const [datas, setdatas] = useState([]);
  const [id2, setIm] = useState(0);
  const [id3, setImages] = useState(0);
  const [modal, showModal] = useState(false);
  const [image, showImg] = useState(false);
  const [images, showImages] = useState(false);
  const dispatch = useDispatch();
  var posts;
  const [product, setProduct] = React.useState([]);
  useEffect(async () => {
    dispatch(getPosts());
    localStorage.setItem("fpp", "2");
    getAllProduct();
  }, []);
  const getAllProduct = async () => {
    const res = await getPre();
    setProduct(res.data);
  };
  posts = useSelector((state) => state.posts);
  var pres = useSelector((state) => state.cartReducer);

  if (localStorage.getItem("fpp") === "2") {
    console.log("welocome val", posts);
    console.log("hi ", pres);
    const arr = posts.filter((element) => {
      return element !== null;
    });
    console.log(arr);
    setValue(arr);
    flag = 1;
    localStorage.removeItem("fpp");
  }
  async function f1(e) {
    let email = e.target.attributes[0].nodeValue;
    e.preventDefault();
    const val = await getPre();

    console.log(val);
    showModal(true);
    localStorage.setItem("fppt", "1");
    console.log(val.data);
    dispatch(addToCartPres(val.data));
  }
  if (localStorage.getItem("fppt") === "1") {
    console.log("hi from", pres);
    var z = [];
    for (const key in pres) {
      console.log(pres[key]);
      let n = pres[key].length;
      var pp = 0;

      var i = 0;
      for (let m = 0; m < n; m++) {
        console.log(pres[key][m][0]);

        for (const val in pres[key][m]) {
          console.log(pres[key][m][val]);
          z[i++] = pres[key][m][val];
          console.log(z);
        }
      }
    }
    console.log(z);
    showdata(z);
    dispatch(resetstate());
    localStorage.removeItem("fppt");
  }
  function f10(e) {
    console.log(e.target.attributes[0].nodeValue);
    setIm(e.target.attributes[0].nodeValue);

    showImg(true);
  }
  function f12(e) {
    console.log(e.target.attributes[0].nodeValue);
    let x = e.target.attributes[0].nodeValue;
    setImages(e.target.attributes[0].nodeValue);
    var aar = [];
    let m = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].id1 == x) {
        for (let k = 0; k < data[i].item.length; k++) {
          if (data[i].item[k].length > 1) {
            aar[m++] = data[i].item[k];
          }
        }
      }
    }
    setdatas(aar);
    showImages(true);
  }
  function f11(e) {
    showImg(false);
  }
  function f13(e) {
    showImages(false);
  }
  // console.log("hi ",product)
  return !product ? (
    <CircularProgress />
  ) : modal == false ? (
    <div>
      <div className="p-5 w-full sticky overflow-x-auto text-center text-white bg-indigo-600 rounded-t-lg text-xl font-bold">
        <p>List of all the Doctors Using your Products</p>
      </div>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Position
              </th>
              <th scope="col" className="py-3 px-6">
                Show Prescription
              </th>
            </tr>
          </thead>
          <tbody>
            {product.map((expense) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src="http://begmetobuyit.com/application/css/images/noImage.jpg"
                    alt="Jese image"
                  />
                  <div className="pl-3">
                    <div className="text-base font-semibold">
                      {expense.name}
                    </div>
                    <div className="font-normal text-gray-500">
                      {expense.email}
                    </div>
                  </div>
                </th>
                <td className="py-4 px-6">{expense.position}</td>
                <td className="py-4 px-6">
                  <button
                    lable={expense.email}
                    onClick={f1}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    type="button"
                    data-drawer-target="drawer-form"
                    data-drawer-show="drawer-form"
                    aria-controls="drawer-form"
                  >
                    SHOW
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : !data.length ? (
    <h1>NO PRODUCT TO SHOW</h1>
  ) : (
    <div>
      <div className=" inset-0 z-10 overflow-y-auto ">
        <div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>

        {image === true && (
          <div className="flex items-center min-h-screen px-12 py-12">
            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <tbody>
                  {data.map((expense) => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td>
                        {expense.id1 == id2 &&
                          expense.img.map((exp) => (
                            <div className="h-50 w-100 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src={exp}
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                          ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="items-center gap-2 mt-3 sm:flex">
                <button
                  className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                  onClick={() => f11()}
                >
                  DELETE
                </button>
                <button
                  className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                  onClick={() => f11()}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        {images === true && (
          <div className="flex items-center min-h-screen px-12 py-12">
            <div className="relative w-full max-w-2xl p-4 mx-auto bg-white rounded-md shadow-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="col" className="py-3 px-6">
                      TITLE
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Date
                    </th>

                    <th scope="col" className="py-3 px-6">
                      REIMBERSEMENT
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {datas.map((expense) => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="py-4 px-6">{expense.split(" ")[0]}</td>
                      {expense.length > 1 && (
                        <td className="py-4 px-6">{expense.length}</td>
                      )}
                      <td className="py-4 px-6">{expense.split(" ")[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="items-center gap-2 mt-3 sm:flex">
                <button
                  className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                  onClick={() => f13()}
                >
                  DELETE
                </button>
                <button
                  className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                  onClick={() => f13()}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
        {image == false && images == false && (
          <div className="flex items-center min-h-screen px-12 py-12">
            <div className="relative w-full max-w-2xl p-4 mx-auto bg-white rounded-md shadow-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="col" className="py-3 px-6">
                      Image
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Date
                    </th>
                    <th scope="col" className="py-3 px-6">
                      ID
                    </th>
                    <th scope="col" className="py-3 px-6">
                      REIMBERSEMENT
                    </th>
                    <th scope="col" className="py-3 px-6">
                      DETAILS
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {data.map((expense) => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="py-4 px-6">
                        <button
                          lable={expense.id1}
                          onClick={f10}
                          type="button"
                          className="text-gray-200 bg-gradient-to-r h-10 from-blue-500 w-full via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2 tracking-wide "
                        >
                          IMAGE
                        </button>
                      </td>

                      <td className="py-4 px-6">{expense.dat.substring(10)}</td>
                      <td className="py-4 px-6">
                        {Math.floor(Math.random() * 100000 + 1)}
                      </td>
                      <td className="py-4 px-6">{expense.reimbersement}</td>
                      <td className="py-4 px-6">
                        <button
                          lable={expense.id1}
                          onClick={f12}
                          type="button"
                          className="text-gray-200 bg-gradient-to-r h-10 from-blue-500 w-full via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2 tracking-wide "
                        >
                          DETAILS
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="items-center gap-2 mt-3 sm:flex">
                <button
                  className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                  onClick={() => showModal(false)}
                >
                  DELETE
                </button>
                <button
                  className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                  onClick={() => showModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default List;
