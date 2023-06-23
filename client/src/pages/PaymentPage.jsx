import { useEffect, useState } from "react";
import PaymentUI from "../components/PaymentUI";

import { useDispatch, useSelector } from "react-redux";
const PaymentPage = () => {
  const cart = useSelector((state) => state.cartReducer);
  console.log(cart, "cart");
  const [userDetail, setUserDetail] = useState({
    productName: "fgg",
    price: "100",
    id: "212",
    date: "2023/06/19",
    name: "pratik",
    email: "pratik@gmail.com",
    phoneNo: "9876543210",
  });
  useEffect(() => {
    setUserDetail({
      productName: cart.cart[0].title,
      price: (cart.price * 9).toString(),
      name: "pratik",
      email: "pratik@gmail.com",
      phoneNo: "9876543210",
    });
  }, []);
  return (
    <>
      <div className="ml-8 m-4">
        <div className="mt-4 w-fit  border-4">
          {cart.cart.map((data, index) => (
            <div className="rounded-md flex">
              <div className="p-2">Sno.: {index + 1} |</div>
              <div className="p-2">Item Name: {data?.title} |</div>
              <div className="p-2">Item Price: {data?.price} |</div>
              <div className="p-2">Item quantity : {data?.quantity} </div>
            </div>
          ))}
        </div>
        <div className="mt-4 w-fit  ">
          <div className="border-4 rounded-md p-2 mb-2">
            Total Price: {cart.price * 9}
          </div>
          <PaymentUI userDetail={userDetail} setUserDetail={setUserDetail} />
        </div>
      </div>
    </>
  );
};
export default PaymentPage;
