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
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {authActions} from './../src/store/AllStatus'
import { useSelector, useDispatch } from 'react-redux';
function App() {
  //const [check,checkrouter]=useState(0);
  const dispatch=useDispatch();
  const  token=localStorage.getItem("token");
  const position=localStorage.getItem("position");
  const navigate=useNavigate();
  //req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}`;

  console.log(position);
  console.log(localStorage.getItem("pos"));
  if(localStorage.getItem("pos")==="1")
  {
    //localStorage.setItem("pos","true");
    
     //navigate('/Prescription');
     dispatch(authActions.isLogin(0));
  }
  if(localStorage.getItem("pos")==="2")
  {
    dispatch(authActions.isLogin(1));
  } 

 //  const check=useSelector();
   const check=useSelector((state) => state.auth.loginvalue);
  console.log("bye",check);
  return (
    <ShoppingCartProvider>
      <Navbar />
      <switch>
      <Routes>
        <Route path="/" element={<Home />} />
        {check===0 ?<Route path="/prescription" element={<Prescription/>}
        />: <Route path="/prescription" element={<Home/>}/>}{/* only for doctor and nurse*/}
       
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        {check===1 ? <Route path="/PastPrescription" element={<PastPrescription />} />:

<Route path="/PastPrescription" element={<Home/>}/>
          
          }{/* only for dealer*/}
        {check==0 ? <Route path="/ProductPage/:id" element={<ProductPage />}/>:
        <Route path="/ProductPage" element={<Home/>}/>
        }{/* only for doctor and nurse*/}


       {check==1 ?<Route path="/dealer" element={<DealerPage />} />:
        <Route path="/dealer" element={<Home/>}/>
}
        {/* <Route path="/SignUp" element={<CompanyNameSelect />} /> */}
      </Routes>
      </switch>
      <Footer />
    </ShoppingCartProvider>
  );
}
export default App;
