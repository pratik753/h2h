// import { Button } from "@mui/material";
import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
// import { addProduct } from "../../action/product";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}
const __DEV__ = document.domain === "localhost";
const PaymentUI = ({ userDetail, setUserDetail }) => {
  //   const history = useHistory();
  const [name, setName] = useState("Pratik");
  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data = await fetch(
      // "https://payment-backend.onrender.com/payment/razorpay",    {
      "http://localhost:8800/payment/razorpay",
      {
        method: "POST",
        // body: userDetail,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userDetail }),
      }
    ).then((t) => t.json());

    console.log(data);

    const options = {
      key: __DEV__ ? "rzp_test_KhYTiBkXohzomU" : "PRODUCTION_KEY",
      amount: userDetail.price.toString(), //rs 50
      currency: data.currency,
      order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      name: "Product Order",
      description: "Product Order",
      image:
        "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg",
      handler: function (response) {
        console.log(response.razorpay_payment_id);
        console.log(response.razorpay_order_id);
        console.log(response.razorpay_signature);
        setUserDetail({
          ...userDetail,
          paymentStatus: "successful",
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
        });
        const cc = {
          ...userDetail,
          paymentStatus: "successful",
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
        };
        console.log(cc);
        history.push("/PastPrescription");
      },
      prefill: {
        name: userDetail.name,
        email: userDetail.email,
        phone_number: userDetail.phoneNo,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  return (
    <>
      {/* PaymentPage */}
      <button
        className="border-4 m-auto bg-blue-400 text-black py-1 px-3 rounded-lg to-blue-400"
        onClick={displayRazorpay}
      >
        Pay
      </button>
    </>
  );
};

export default PaymentUI;
