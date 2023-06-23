import React from "react";
import { orderAll } from "../api";
const Orders = () => {
  const [order, setOrder] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const getOrder = async () => {
    const res = await orderAll();
    setOrder(res.data);
    let totalPriceR = 0;
    for (let index = 0; index < res.data.length; index++) {
      totalPriceR = totalPriceR + 1 * res.data[index].reimbersement;
    }
    setTotalPrice(totalPriceR);
  };
  React.useEffect(() => {
    getOrder();
    return () => {
      console.log("clear");
    };
  }, []);
  return (
    <>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-10 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="md:flex flex-wrap w-full mb-5">
            <div className="flex py-5 flex-auto">
              <div className="text-lg font-semibold tracking-wide bg-indigo-400 h-fit p-2 text-gray-900">
                <span className="h-full bg-yellow-300 text-yellow-300 z-20">
                  |
                </span>{" "}
                Reimbursement: {totalPrice}
              </div>
            </div>
            <div></div>
          </div>
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {/* <Product /> */}
            {order.length > 0 &&
              order.reverse().map((data, index) => {
                return (
                  <div key={index}>
                    <div className="flex mt-2 ">
                      <h3 className=" font-medium text-lg capitalize text-gray-700">
                        {data?.dat}
                      </h3>
                    </div>
                    <div className="w-full aspect-w-1 h-56 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                      <img
                        src={data?.img[0]}
                        className="w-full h-full object-center  object-cover group-hover:opacity-75"
                      />
                    </div>
                    <div className="">
                      <p className="text-lg font-medium  text-gray-800">
                        Bill Reimbursement:
                      </p>
                      <p className=" text-lg font-medium  text-gray-800">
                        ₹{data?.reimbersement}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Orders;
