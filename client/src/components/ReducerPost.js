import { FETCH_ALL,FETCH_ALL_DATA,GETP,GETE, GET_VAL,GET_VALS} from './actionTypes';

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
      case FETCH_ALL_DATA:
        return action.payload;  
      case GETP:
         return action.payload;  
      case GETE:
         return action.payload;   
      case GET_VAL:
         return action.payload;   
         case GET_VALS:
          return action.payload;    
    default:
      return posts;
  }
};