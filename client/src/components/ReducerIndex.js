import { combineReducers } from "redux";

import posts from "./ReducerPost";
import pres from './ReducerPres'

export const reducers = combineReducers({ posts,pres });
