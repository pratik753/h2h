import { configureStore } from '@reduxjs/toolkit';

import AllStatus from './AllStatus';
import posts from "../components/ReducerPost";
import {cartReducer} from '../components/CartReducer'
const store = configureStore({
  reducer: { auth: AllStatus,posts,cartReducer}
});
export default store;