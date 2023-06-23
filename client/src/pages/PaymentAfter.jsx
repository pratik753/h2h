// import classes from "./PaymentAfter.module.css";
import successful from "../assets/succesful.gif";
const PaymentAfter = () => {
  return (
    <>
      <div className={"flex items-center  flex-col my-4"}>
        <div className="formheading">Payment Successful</div>
        {/* <successful /> */}
        <div className="flex items-center justify-center col-lg-8 mx-auto text-center">
          <img src={successful} width="40%" height="40%" />
        </div>
        <div className="col-lg-8 mx-auto py-2 text-center">
          <p>
            <b>Thank You For Payment</b>
          </p>
          <button className="border-2 rounded-lg bg-blue-300 mt-2 text-black px-3 py-1">
            Profile
          </button>
        </div>
      </div>
    </>
  );
};
export default PaymentAfter;
