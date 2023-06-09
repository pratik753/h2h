import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "./post";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  addprice,
} from "./CartReducer";
import { CircularProgress } from "@mui/material";
import { productAll } from "../api";
const Product = () => {
  const [products, setProduct] = React.useState([]);
  const dispatch = useDispatch();
  const getAllProduct = async () => {
    const res = await productAll();
    console.log(Array(res.data[0]), "productAll");
    const arr = Object.entries(res.data[0]).map(([key, value]) => value);
    setProduct(arr);
  };
  React.useEffect(() => {
    getAllProduct();
  }, []);

  const ProductPage = (id) => {
    window.location.href = `/ProductPage/${id}`;
  };
  function add(id) {
    console.log("hi ", id);
    dispatch(incrementQuantity(id));
    const idToFind = id;
    let array = products;
    const foundObject = array.find((obj) => obj.id === idToFind);
    const quantity = foundObject.quantity;
    if (foundObject) {
      foundObject.quantity = quantity + 1;
    }
    setProduct(array);
    console.log(array);
  }
  function f3(id) {
    dispatch(decrementQuantity(id));
    const idToFind = id;
    let array = products;
    const foundObject = array.find((obj) => obj.id === idToFind);
    const quantity = foundObject.quantity;
    if (foundObject) {
      foundObject.quantity = quantity - 1;
    }
    setProduct(array);
  }
  function f1(expense) {
    var { id, title, image_name, descriptio, price, quantity } = expense;
    dispatch(
      addToCart({
        id,
        title,
        image_name,
        price,
        descriptio,
        quantity,
      })
    );
    localStorage.setItem("flag", "1");
    const idToFind = id;
    let array = products;
    const foundObject = array.find((obj) => obj.id === idToFind);
    const newQuantity = foundObject.quantity;
    // const newName = "Janet";
    if (foundObject) {
      foundObject.quantity = newQuantity + 1;
    }
    setProduct(array);
  }
  console.log(products, "products");

  return products.length == 0 ? (
    <CircularProgress />
  ) : (
    products.map((expense) => (
      <div>
        <div className="group ">
          <div className="flex mt-2 ">
            <h3 className="flex-1 font-medium text-lg capitalize text-gray-700">
              {expense.title}
            </h3>
          </div>
          <div className="w-full aspect-w-1 h-56 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img
              src={expense.image_name}
              className="w-full h-full object-center  object-cover group-hover:opacity-75"
            />
          </div>
          <div className="flex">
            <p className="flex-1 text-lg font-medium  text-gray-800">
              Bill Reimbursement:
            </p>
            <p className="flex flex-end text-lg font-medium  text-gray-800">
              ₹{expense.price}
            </p>
          </div>
          <div className="mt-2 w-full">
            <button
              type="button"
              className="text-gray-200 bg-gradient-to-r from-indigo-500 w-full via-indigo-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 tracking-wide "
              onClick={() => ProductPage(expense?.id)}
            >
              <span className="text-xl inline-block"></span>
              DESCRIPTION
            </button>
            {expense.quantity === 0 ? (
              <button
                type="button"
                className="text-gray-200 bg-gradient-to-r from-indigo-500 w-full via-indigo-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 tracking-wide "
                onClick={() => f1(expense)}
              >
                <span className="text-xl inline-block">+</span> ADD TO
                PRESCRIPTION
              </button>
            ) : (
              <div className="flex w-full ">
                <div className="flex w-full">
                  {/* <Buttonsm name='+'  /> */}
                  <button
                    type="button"
                    className="text-gray-200 bg-gradient-to-r h-10 from-green-500 w-full via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2 tracking-wide  "
                    //onClick={() => f2()}
                    onClick={() => add(expense.id)}
                  >
                    Add
                  </button>
                  <div className="flex justify-center self-center px-4 mb-2 text-gray-800 font-bold text-lg ">
                    {expense.quantity}
                  </div>
                  {/* <Buttonsm name='-'/> */}
                  <button
                    type="button"
                    className="text-gray-200 bg-gradient-to-r h-10 from-red-500 w-full via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2 tracking-wide "
                    //onClick={() => f3(expense.id)}
                    onClick={() => f3(expense.id)}
                  >
                    Remove
                  </button>
                </div>
                {/* <div className="flex-end">
                <button
                  type="button"
                  className="text-gray-200 bg-gradient-to-r h-10 from-green-400 w-fit to-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 tracking-wide "
                  onClick={() => removeFromCart(id)}
                >
                  UPLOAD
                </button>
              </div> */}
              </div>
            )}
          </div>
        </div>
      </div>
    ))
  );
};
export default Product;
