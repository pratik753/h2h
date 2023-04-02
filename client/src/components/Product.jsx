import storeItems from "../data/item.json";
import Buttonsm from './Buttonsm'
import Buttonrm from "./Buttonrm";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { NavLink } from "react-router-dom";
import { useEffect,useState} from "react";
import { shallowEqual, useDispatch,useSelector } from "react-redux";
import { getAllPosts,getPosts } from "./post";
import { addToCart,incrementQuantity,decrementQuantity,addprice } from "./CartReducer";
import { CircularProgress, private_createTypography } from '@mui/material';
import { useNavigate } from "react-router-dom";
var flag=1;
export default function Product() {
 
  
  //console.log(arr)
  //console.log(flag);
  //console.log(arr);
  const navigate=useNavigate();
  const {
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeFromCart
  } = useShoppingCart();
  const [value,setValue]=useState([]);
  var [sum,setSum]=useState([]);
  var arr;
  const dispatch=useDispatch();
  useEffect(async()=>{
    localStorage.setItem("flag","0");
    dispatch(getAllPosts())
    },[dispatch])
    const [posts,cart] = useSelector((state) => [state.posts,state.cartReducer],shallowEqual); 
    
    //cart=useSelector((state)=>state.auth)
    
   if(posts!==undefined){
    //console.log("welocome val",posts);
    arr = posts.filter(element => {
    return element !== null;
  });
}
  if(localStorage.getItem("flag")==="0")
  {
  
  console.log(arr);
  let p=[];
  let q=0;
  for(let i=0;i<arr.length;i++)
  {
   for(const key in arr[i])
   {
    arr[i][key].quantity=0;
   
    p[q++]=arr[i][key];
   }
  }
  //console.log(" weloc ",p);
  setValue(p);
  localStorage.removeItem("flag");
  }
   
   
 let quantity=0;
  console.log("cart ",flag);
  
  

  //console.log(posts)
  const [test,setTest]=useState(0)
  const checkHandler=()=>{
    setTest(test+1)
  }
  function f1(expense)
  {
    
    var {id,title,image_name,descriptio,price,quantity}=expense;
    dispatch(addToCart({
      id, title, image_name, price,descriptio,quantity
    }))
    localStorage.setItem("flag","1")
  }
  function f2(id)
  {
    console.log("hi ",id);
    dispatch(incrementQuantity(id));
    localStorage.setItem("flag","2")
  }
  function f3(id)
  {
    
    dispatch(decrementQuantity(id));
    localStorage.setItem("flag","3")
  }
  //console.log(cart);
  if(localStorage.getItem("flag")==="1")
  {

  var pp=0;
  for(const key in cart)
  {
      console.log(cart[key]);
      let n=cart[key].length;
      for(let m=0;m<n;m++)
      {
        pp=pp+((parseInt(cart[key][m].price))*(parseInt(cart[key][m].quantity)));
        console.log(cart[key][m].price+"  "+cart[key][m].quantity+"  "+pp);
        //sum=sum+((parseInt(cart[key][m].price))*(parseInt(cart[key][m].quantity)));
        for(let z=0;z<value.length;z++)
        {
           if(value[z].id===cart[key][m].id)
           {
              value[z]=cart[key][m];
              
           }
        }
      }
  }
  //dispatch(addprice(pp))
  console.log(value);
  setValue(value);
  //localStorage.setItem("price",sum);

  console.log("sum is ",sum);
  localStorage.removeItem("flag");
  }
  if(localStorage.getItem("flag")==="2")
  {
 

  for(const key in cart)
  {
      console.log(cart[key]);
      let n=cart[key].length;
      var pp=0;
      for(let m=0;m<n;m++)
      {
        console.log(cart[key][m]);
        pp=pp+((parseInt(cart[key][m].price))*(parseInt(cart[key][m].quantity)));
        for(let z=0;z<value.length;z++)
        {
           if(value[z].id===cart[key][m].id)
           {
              value[z]=cart[key][m];
           }
        }
      }
  }

  console.log(value);
  //dispatch(addprice(pp))
  setValue(value);
  localStorage.removeItem("flag");
  }
  if(localStorage.getItem("flag")==="3")
  {
  console.log("hi cart add item ",value,cart.length);

  for(const key in cart)
  {
      console.log(cart[key]);
      let n=cart[key].length;
      for(let m=0;m<n;m++)
      {
        console.log(cart[key][m]);
        for(let z=0;z<value.length;z++)
        {
           if(value[z].id===cart[key][m].id)
           {
              value[z]=cart[key][m];
           }
        }
      }
  }

  console.log(value);
  setValue(value);
  localStorage.removeItem("flag");
  }
  function f4(id)
  {
    console.log("hi f4")
   // navigate(`/ProductPage/${id}`)
   window.location.href = `/ProductPage/${id}`
  }
  return (
    value.length==0 ? <CircularProgress /> :(
      
      value.map((expense)=>
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
        <div className="mt-2 w-full" >
        <button
              type="button"
              className="text-gray-200 bg-gradient-to-r from-indigo-500 w-full via-indigo-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 tracking-wide "
              onClick={()=>f4(expense.id)}
            >
              <span className="text-xl inline-block"></span>
              DESCRIPTION
            </button>
          {expense.quantity === 0 ? (
            <button
              type="button"
              className="text-gray-200 bg-gradient-to-r from-indigo-500 w-full via-indigo-600 to-indigo-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:focus:ring-indigo-800 shadow-lg shadow-indigo-500/50 dark:shadow-lg dark:shadow-indigo-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 tracking-wide "
              onClick={()=>f1(expense)}
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
                  onClick={()=>f2(expense.id)}
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
                  onClick={()=>f3(expense.id)}
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
}
