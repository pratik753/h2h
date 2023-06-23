import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    cart: [],
    price: 0,
  },

  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
        state.price = state.price + itemInCart.price;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        state.price = state.price + action.payload.price;
      }
    },
    addDoctordata: (state, action) => {
      state.cart.push({ image_name: action.payload, title: "" });
    },
    addToCartPres: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
        state.price = state.price + itemInCart.price;
      } else {
        state.cart.push({ ...action.payload });
        state.price = state.price + action.payload.price;
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      state.price = state.price + item.price;
    },

    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity--;
      state.price = state.price - item.price;
    },

    removeItem: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = removeItem;
    },
    addprice: (state, action) => {
      state.price = action.payload;
    },
    resetstate: (state = initialState, action) => {
      state.cart = [];
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
  resetstate,
} = cartSlice.actions;
