import { FETCH_ALL,FETCH_ALL_DATA,GETP,GET_VAL,GET_VALS} from './actionTypes';

import * as api from './index';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
     
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllPosts=()=>async(dispatch)=>{
  try {
    const { data } = await api.fetchallPosts();
     
    //console.log(data);
    dispatch({ type: FETCH_ALL_DATA , payload: data });
  } catch (error) {
    console.log(error.message);
  }
}
export const getParticularPost=(dat)=>async(dispatch)=>{
  try
  {    
  console.log("hello");     
  console.log(dat);    
  const {data}=await api.getPartData(dat);    
  console.log(data);
  dispatch({ type: GETP, payload: data });
  //history.push('/');
  //console.log("hello")
  //dispatch({ type: "getd", payload: data });
  }
  catch(err)
  {
      console.log(err.message);
  } 
}
export const getParticularpres=(dat)=>async(dispatch)=>{
  try
  {    
  console.log("hello");     
  console.log(dat);    
  const {data}=await api.getParticularpresc(dat);    
  //console.log(data);
  dispatch({ type: GET_VAL, payload: data });
  //history.push('/');
  //console.log("hello")
  //dispatch({ type: "getd", payload: data });
  }
  catch(err)
  {
      console.log(err.message);
  } 
}
export const DateSelection=(dat)=>async(dispatch)=>{
  try
  {    
  console.log("hello");     
  console.log(dat);    
  const {data}=await api.getParticularDate(dat);    
  //console.log(data);
  dispatch({ type: GET_VALS, payload: data });
  //history.push('/');
  //console.log("hello")
  //dispatch({ type: "getd", payload: data });
  }
  catch(err)
  {
      console.log(err.message);
  } 
  
}