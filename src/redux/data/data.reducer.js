import { dataActionTypes } from './data.types';
import { getData } from '../../utils/stat.utils';

const INITIAL_STATE = {
    data: getData("normal",1000),
    type: "normal",
    error: ''
};
  
const dataReducer = (state = INITIAL_STATE, action) => {
switch (action.type) {
    case dataActionTypes.GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: ''
      };

    case dataActionTypes.GET_DATA_FAILURE:
      console.log(action.payload)
    return {
        ...state,
        error: action.payload
    };
      
    default:
     return state;
  }
};

export default dataReducer;