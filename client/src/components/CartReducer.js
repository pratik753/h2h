import { createSlice,current } from '@reduxjs/toolkit';

const cartSlice = createSlice({

  name: 'cart',

  initialState: {

    cart: [],
    price:0

  },

  reducers: {

    addToCart: (state, action) => {


      console.log(action.payload);
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
     
      console.log(itemInCart)
      if (itemInCart) {

        itemInCart.quantity++;
        state.price=state.price+(itemInCart.price);
        console.log("hi addtocart ",itemInCart.price);
        console.log(state.price);
      } else {
      
        state.cart.push({ ...action.payload,quantity:1 });
        state.price=state.price+action.payload.price;
        //state.price=state.price+(itemInCart.price);
        //console.log(state.cart);
      }
     
      //console.log("hi from cartReducer",current(state))   
    },
    addDoctordata:(state,action)=>{
      console.log("hi cartreducres addcardto data ",action.payload);
      state.cart.push({image_name:action.payload,title:""});
    },
    addToCartPres: (state, action) => {


      console.log(action.payload);
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
     
      console.log(itemInCart)
      if (itemInCart) {

        itemInCart.quantity++;
        state.price=state.price+(itemInCart.price);
        console.log("hi addtocart ",itemInCart.price);
        console.log(state.price);
      } else {
      
        state.cart.push({ ...action.payload });
        state.price=state.price+action.payload.price;
        //state.price=state.price+(itemInCart.price);
        //console.log(state.cart);
      }
     
      //console.log("hi from cartReducer",current(state))   
    },
    incrementQuantity: (state, action) => {

      const item = state.cart.find((item) => item.id === action.payload);

      item.quantity++;
      console.log("hi increase item quantity ",item.quantity+"  "+state.price)
      state.price=state.price+(item.price);
     
    },

    decrementQuantity: (state, action) => {
   
        console.log("hi from dec");  
      const item = state.cart.find((item) => item.id === action.payload);

        item.quantity--;
        
        state.price=state.price-(item.price);
       


    },

    removeItem: (state, action) => {

      const removeItem = state.cart.filter((item) => item.id !== action.payload);

      state.cart = removeItem;

    },
    addprice: (state, action) => {
        state.price = action.payload;
  
      },
      resetstate: (state=initialState, action) => {
        state.cart=[];
  
      },
  },

});

export const cartReducer = cartSlice.reducer;

export const {

  addToCart,

  incrementQuantity,

  decrementQuantity,

  removeItem,
  
  addprice,
  addDoctordata,
  addToCartPres,
  resetstate
} = cartSlice.actions;