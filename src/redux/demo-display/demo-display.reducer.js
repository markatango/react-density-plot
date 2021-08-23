import { demoDisplayActionTypes } from './demo-display.types';

const INITIAL_STATE = {
    data: [],
    error: ''
};
  
const demoDisplayReducer = (state = INITIAL_STATE, action) => {
switch (action.type) {
    case demoDisplayActionTypes.GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: ''
      };

    case demoDisplayActionTypes.GET_DATA_FAILURE:
    return {
        ...state,
        error: action.payload
    };
      
    default:
     return state;
  }
};

export default demoDisplayReducer;