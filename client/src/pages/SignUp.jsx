
import './signup.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

import { useState,useEffect } from 'react';
const initialState = {
   username:'',
   email:'',
   password:'',
   position:'',
   dealer:''
}
import axios from 'axios';
import {useNavigate }from 'react-router-dom'
 function SignUp() {
//useffect lagayenge dealer ke data ko show ke lye

//useselect lagayenge wo data ko ek alag variable me store ke lye

//map lagake dealer ke data ko show krenge react ke code me

//signup pe click krega toh backend me data bhejenge aur database me store (yeah)

//login krunga toh jo token ayega use localhost me store krenge (yeah)

// aur router pe restriction lagayenge (yeah)


//
//const history = useHistory();
//const history=useHistory();
let navigate = useNavigate();
const [error,setError]=useState(0);
const [value,setValue]=useState(0);
const [formData, setFormData] = useState(initialState);
const [dealer,setDealer]=useState([]);
useEffect(async() => {
  console.log("hi from signuo");
 
    const response = await axios.get(
      "http://localhost:8800/api/products/alldealer"
    );
    //console.log(response.data.data[0]);
   for(let i=0;i<response.data.data.length;i++)
   {
     console.log(response.data.data[i].username+","+response.data.data[i].email)
     const amt=response.data.data[i].username+","+response.data.data[i].email;
     setDealer(dealer=>[...dealer,amt])
   }
}, []);
 async function handlesubmit(e)
  {
    console.log(e);
    e.preventDefault();
    console.log("hello");
    
    console.log("handlesubmit ",state);

    var dealer=[];

    
    for (const key in state) {

      
      if(state[key]===true)
      {

        console.log(`submit  ${key}: ${state[key]}`);
         dealer.push(key);
      }
  }


    const username=document.getElementById("floating_first_name").value;
   const email=document.getElementById("floating_email").value;
   //floating_password
   //floating_repeat_password
   //floating_phone
   //underline_selected
   const password=document.getElementById("floating_password").value;
   const reppassword=document.getElementById("floating_repeat_password").value;
   const phone=document.getElementById("floating_phone").value;
   const underline_selected=document.getElementById("underline_selected").value;
   
   //1) no field should be emapty
   var flag=0;
    console.log("username",username);
    var expanded = false;

    function showCheckboxes() {
      console.log("hwllo");
      var checkboxes = document.getElementById("checkboxes");
      if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
      } else {
        checkboxes.style.display = "none";
        expanded = false;
      }
    }
     var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
   if(username===""||email===""||password===""||reppassword===""||phone===""||underline_selected==="")
   {
      console.log("hi error");
      flag=1;
      setError(1);
   }
   //2) password and repeat password should be same
   if(password!==reppassword)
   {
    console.log("hello error");
    flag=1;
    setError(1);
   }
   
   if(password.length<=5)
   {
    console.log("hello error 3");
    flag=1;
    setError(1);
   }
   console.log(email);
   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(!email.match(mailformat))
   {
    console.log("hello error 4");
    flag=1;
    setError(1);
   }
   console.log(flag);
   if(flag==0)
   {
    setError(0);
   }

   // console.log("hi",username);
   formData.username=username;
   formData.dealer=dealer;
    //console.log(formdata);
    if(flag==0)
    {
      try
      {
      console.log("form is",formData);  
      const response = await axios.post(
        "http://localhost:8800/api/auth/register",
        formData
      );
      //navigate("/login");  
      //history.push('/login');
      window.location.href = `/login`
      }
      catch(err)
      {
        console.log(err);
        if(err!=undefined)
        {
          console.log("hi");
        }
        setError(2);
      }
        
         // axios.post('localhost:8800/auth/register',formData);     
    }  
    //error check
    // current password should be equal to original password
    //no field should be emapty
    //in all this case
  }
  async  function  changeStatus(e)
  {
     
        setValue(1);
  }
  const handleChange = (e) => {
   // console.log("hi",e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const [state, setState] = React.useState({

  });

  const handleChanges = (event) => {
    console.log(event.target.name+" "+event.target.checked);
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  console.log("hi",state);
  const { gilad, jason, antoine } = state;
  const errors = [gilad, jason, antoine].filter((v) => v).length !== 2;

  console.log("hi ",dealer);
  const myComponent = {
    /*width: '200px',
    height: '120px',
    overflowY: 'scroll'*/
    overflowY: 'scroll',
    width:'200px',
    float: 'left',
    height:'120px',
    position:'relative'
};
 
  return (
    <div className="md:flex p-5 h-full mb-10">
      <div className="md:flex hidden md:w-1/3 h-3/5  ">
        <div>
          <img
            src="https://images.pexels.com/photos/9829615/pexels-photo-9829615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="rounded-lg bg-cover h-fit "
          />
        </div>
      </div>
      <form className=" px-5 md:w-2/3 p-5 ">
        <div className=" pb-10  font-sans text-3xl font-medium text-gray-800">
          <p className="flex justify-start">
            <span className=" box-decoration-slice underline decoration-indigo-500 text-indigo-500">
              Heal
            </span>
            <span className="text-orange-400 underline decoration-indigo-500">
              2
            </span>
            <span className="pr-2 box-decoration-slice underline decoration-indigo-500 text-green-500">
              Health
            </span>
            <span className="pr-2  text-orange-400">Wellness</span>
          </p>
        </div>


        <div className="relative z-0 mb-6 w-full group">
          <input
            type="email"
            name="email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-indigo-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
            placeholder=" "
            required=""
            onChange={handleChange}
          />
          <label
            for="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="password"
            name="password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-indigo-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
            placeholder=" "
            required
            onChange={handleChange}
          />
          <label
            for="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            type="password"
            name="repeat_password"
            id="floating_repeat_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-indigo-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
            placeholder=" "
            required="true"
            onChange={handleChange}
          />
          <label
            for="floating_repeat_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirm password
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              name="username"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-indigo-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
              placeholder=" "
              required=""
              onChange={handleChange}
            />
            <label
              for="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
         
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="floating_phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-indigo-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
              placeholder=" "
              required=""
             
            />
            <label
              for="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number (123-456-7890)
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
             <select
           name="position"   
          id="underline_selected"
          class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-indigo-300 appearance-none mb-8 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          onChange={handleChange}
          
        >
          <option selected >Choose a position</option>
          <option value="Doctor">Doctor</option>
          <option value="Nurse">Nurse</option>
          <option value="Dealer">Dealer </option>
        </select>
          </div>
        </div >
        
         {value==0&&<Box sx={{ display: 'flex' }}>
         <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
           <FormLabel component="legend">Name of Dealer(ONLY FOR DOCTOR/NURSR)</FormLabel>
           <div style={myComponent}>
           <FormGroup>
           {dealer.length>0?dealer.map((expense)=>
             <FormControlLabel
               control={
                 <Checkbox checked={state.gilad} onChange={handleChanges} name={expense.split(",")[1]} />
               }
               label={expense.split(",")[0]}
               
             />
             ):<p className="para">No Dealer...</p>}
           </FormGroup>
           </div>
          
         </FormControl>
       
          
              
       </Box>}
     
 
    {value==0&&
    <button
    type="submit"
    className="text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
    onClick={changeStatus}
 >
    Select
  </button>
      
    }
        <label for="underline_select" class="sr-only">
          Underline select
        </label>
        <select
          id="underline_select"
          class="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-indigo-300 appearance-none mb-8 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
         
       >
          <option selected>Choose a Department</option>
          <option value="US">Cardiology</option>
          <option value="CA">Orthopedics</option>
          <option value="FR">Gastroenterology </option>
          <option value="DE">Oncology</option>
          <option value="DE">ENT</option>
          <option value="DE">Vascular</option>
          <option value="DE">Pediatric</option>
          <option value="DE">Dermatology </option>
          <option value="DE">OBGYN</option>
          <option value="DE">Plastic Surgery </option>
          <option value="DE">Trauma & Emergency</option>
          <option value="DE">Diabetology</option>
          <option value="DE">Surgical Oncology</option>
          <option value="DE">General Surgery</option>
        </select>
        <button
          type="submit"
          className="text-white bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
          onClick={handlesubmit}
       >
          Sign-Up
        </button>
        { error===1&&
           <h1 color="red">ERROR....</h1>
        }
          { error===2&&
           <h1 color="red">USER ALREADY EXISTS...</h1>
        }
      </form>
    </div>
  );
      }

export default SignUp;