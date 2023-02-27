import { dataActionTypes } from './data.types';
import { getData } from '../../utils/data.source';

const INITIAL_STATE = {
    data: getData("normal",30),
    dataType: "normal",
    numberPoints: 30,
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

    case dataActionTypes.SET_DATA_TYPE:
      console.log(action.payload)
    return {
        ...state,
        dataType: action.payload,
        error: ''
    };

    case dataActionTypes.SET_NUMBER_POINTS:
      console.log(action.payload)
    return {
        ...state,
        numberPoints: action.payload,
        error: ''
    };
      
    default:
     return state;
  }
};

export default dataReducer;