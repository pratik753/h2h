import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";

function Prescription() {
  const price = useSelector((state) => state.cartReducer);

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
                Reimbursement: {price && price?.price}
              </div>
            </div>
            <div></div>
          </div>
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {price && <Product />}
          </div>
        </div>
      </div>
    </>
  );
}
export default Prescription;
