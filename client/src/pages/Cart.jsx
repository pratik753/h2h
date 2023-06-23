/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import FileBase from "react-file-base64";
import ShowModal from "./ShowModal";
import { addDoctordata } from "../components/CartReducer";
import axios from "axios";
const products = [
  {
    id: 1,
    name: "ChitoClot Gauze   (5x40 | 8 ply)",
    href: "#",
    color: "added",
    price: "300.00",
    quantity: 1,
    imageSrc:
      "https://www.anscare.com/uploads/images/products/Hemostasis/03-Product_Gauze_750x700(1).jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "ChitoClot Gauze  (10x80 | 8 ply)",
    href: "#",
    color: "added",
    price: "300.00",
    quantity: 1,
    imageSrc:
      "https://www.anscare.com/uploads/images/products/Hemostasis/03-Product_Gauze_750x700(1).jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 2,
    name: "ChitoClot Gauze (10x10)",
    href: "#",
    color: "added",
    price: "700.00",
    quantity: 1,
    imageSrc:
      "https://www.anscare.com/uploads/images/products/Hemostasis/03-Product_Gauze_750x700(1).jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 2,
    name: "LeniScar Silicone Sticks (9.2g)",
    href: "#",
    color: "added",
    price: "32.00",
    quantity: 1,
    imageSrc:
      "https://www.anscare.com/uploads/images/products/scarcare/03_product_stick_g2_750x700.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

export default function Cart() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const [isOpen, setisOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [length, setlength] = useState(0);
  const cart = useSelector((state) => state.cartReducer);
  const price = useSelector((state) => state.cartReducer);
  const [postData, setPostData] = useState({
    title: "",
    descriptio: "",
    price: "",
    image_name: "",
    per: "",
    quantity: "",
  });

  function f1() {
    setOpen(!open);
  }
  function f2() {
    setisOpen(!isOpen);
    localStorage.setItem("fp", "1");
    setlength(cart[0].length);
  }

  if (localStorage.getItem("fp") === "1") {
    let z = [];
    let q = 0;
    for (const key in cart) {
      for (let p = 0; p < cart[key].length; p++) {
        console.log(cart[key][p]);
        z[q++] = cart[key][p];
      }
    }
    setValue(z);
    setlength(z.length);
    localStorage.removeItem("fp");
  }
  const [modal, setModal] = useState(0);
  function f6() {
    setModal(1);
  }
  function f7(base64) {
    dispatch(addDoctordata(base64));
    localStorage.setItem("fp", "3");
  }
  if (localStorage.getItem("fp") === "3") {
    let z = [];
    let q = 0;
    for (const key in cart) {
      for (let p = 0; p < cart[key].length; p++) {
        z[q++] = cart[key][p];
      }
    }
    setValue(z);
    setlength(z.length);
    localStorage.removeItem("fp");
  }

  function f8() {
    let p = value;
    var currentdate = new Date();
    var datetime =
      "Last Sync: " +
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear() +
      " @ " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();
    let m = [];
    for (let i = 0; i < value.length; i++) {
      let pr = "";
      if (p[i].price === undefined) {
        pr = "";
      } else {
        pr = p[i].price;
      }
      let obj2 = {
        ...p[i],
        date_time: datetime,
        price: price.price,
        pricing: pr,
      };
      m.push(obj2);
      console.log(obj2, "data");
    }
    const API = axios.create({ baseURL: "http://localhost:8800" });

    API.interceptors.request.use((req) => {
      if (localStorage.getItem("token")) {
        req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
      }
      return req;
    });
    API.post("/api/products/postdoctor", m);
  }
  return (
    <>
      {!isOpen ? (
        <div className="ml-4 flow-root lg:ml-6 cursor-pointer" onClick={f2}>
          <div className="group -m-2 flex items-center p-2">
            <ShoppingBagIcon
              className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"></span>
            <span className="sr-only">items in cart, view bag</span>
          </div>
        </div>
      ) : (
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setOpen}>
            <Transition.Child
              onClick={() => f1}
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                      <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                        <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                          <div className="flex items-start justify-between">
                            <Dialog.Title className="text-lg font-medium text-gray-900">
                              Shopping cart
                            </Dialog.Title>
                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                className="-m-2 p-2 text-gray-400 cursor-pointer hover:text-gray-500"
                                onClick={() => setisOpen(!isOpen)}
                              >
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </button>
                            </div>
                          </div>

                          <div className="mt-8">
                            <div className="flow-root">
                              <ul
                                role="list"
                                className="-my-6 divide-y divide-gray-200"
                              >
                                {value.map(
                                  (product) =>
                                    product.quantity != 0 &&
                                    product.title !== "" && (
                                      <li
                                        key={product.id}
                                        className="flex py-6"
                                      >
                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                          <img
                                            src={product.image_name}
                                            className="h-full w-full object-cover object-center"
                                          />
                                        </div>

                                        <div className="ml-4 flex flex-1 flex-col">
                                          <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                              <h3>
                                                <a href={product.href}>
                                                  {product.title}
                                                </a>
                                              </h3>
                                              <p className="ml-4">
                                                {product.price}
                                              </p>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-500"></p>
                                          </div>
                                          <div className="flex flex-1 items-end justify-between text-sm">
                                            <p className="text-gray-500">
                                              Qty {product.quantity}
                                            </p>

                                            <div className="flex"></div>
                                          </div>
                                        </div>
                                      </li>
                                    )
                                )}
                                {value.map(
                                  (product) =>
                                    product.quantity != 0 &&
                                    product.title === "" && (
                                      <li
                                        key={product.id}
                                        className="flex py-6"
                                      >
                                        <div className="h-28 w-50 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                          <img
                                            src={product.image_name}
                                            className="h-full w-full object-cover object-center"
                                          />
                                        </div>

                                        <div className="ml-4 flex flex-1 flex-col">
                                          <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                              <h3>
                                                <a href={product.href}>
                                                  {product.title}
                                                </a>
                                              </h3>
                                              <p className="ml-4">
                                                {product.price}
                                              </p>
                                            </div>
                                            <p className="mt-1 text-sm text-gray-500"></p>
                                          </div>
                                          <div className="flex flex-1 items-end justify-between text-sm">
                                            <p className="text-gray-500">
                                              {product.quantity}
                                            </p>

                                            <div className="flex"></div>
                                          </div>
                                        </div>
                                      </li>
                                    )
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>{cart.price}</p>
                          </div>
                          <p className="flex justify-between text-base font-medium text-gray-900">
                            UPLOAD PRESCRIPTION
                          </p>
                          <div className="mt-6">
                            <div className="flex">
                              <FileBase
                                type="file"
                                multiple={false}
                                onDone={({ base64 }) => f7(base64)}
                                lable="Upload"
                                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                              />
                            </div>
                            <br></br>
                            <NavLink to="/payment">
                              <div className="mt-6">
                                <a
                                  // href="#"
                                  className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                  onClick={f8}
                                >
                                  SUBMIT
                                </a>
                              </div>
                            </NavLink>
                          </div>

                          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                              or
                              <button
                                type="button"
                                className="font-medium text-indigo-600 pl-2 hover:text-indigo-500"
                                onClick={() => setisOpen(!isOpen)}
                              >
                                Continue Prescribing
                                <span aria-hidden="true"> &rarr;</span>
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      )}
    </>
  );
}
