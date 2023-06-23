import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import About from "./pages/About";
import Home from "./pages/Home";
import Prescription from "./pages/Prescription";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import PastPrescription from "./pages/PastPrescription.jsx";

import ProductPage from "./pages/ProductPage.jsx";
import DealerPage from "./pages/DealerPage.jsx";
import { authActions } from "./../src/store/AllStatus";
import { useSelector, useDispatch } from "react-redux";
import { createRoot } from "react-dom/client";

import Orders from "./pages/Orders.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import PaymentAfter from "./pages/PaymentAfter";
function App() {
  const dispatch = useDispatch();

  if (localStorage.getItem("pos") === "1") {
    dispatch(authActions.isLogin(0));
  }
  if (localStorage.getItem("pos") === "2") {
    dispatch(authActions.isLogin(1));
  }
  const check = useSelector((state) => state.auth.loginvalue);
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {check === 0 ? (
          <Route path="/ProductPage" element={<Prescription />} />
        ) : (
          <Route path="/ProductPage" element={<Home />} />
        )}
        {/* only for doctor and nurse*/}
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/PastPrescription" element={<Orders />} />
        {check === 1 ? (
          <Route path="/PastPrescription" element={<Orders />} />
        ) : (
          <Route path="/PastPrescription" element={<Home />} />
        )}
        {/* only for dealer*/}
        {check == 0 ? (
          <Route path="/ProductPage/:id" element={<ProductPage />} />
        ) : (
          <Route path="/ProductPage" element={<Home />} />
        )}
        {/* only for doctor and nurse*/}

        {check == 1 ? (
          <Route path="/dealer" element={<DealerPage />} />
        ) : (
          <Route path="/dealer" element={<Home />} />
        )}
        {/* <Route path="/SignUp" element={<CompanyNameSelect />} /> */}
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/successful" element={<PaymentAfter />} />
      </Routes>
      <Footer />
    </ShoppingCartProvider>
  );
}
export default App;
