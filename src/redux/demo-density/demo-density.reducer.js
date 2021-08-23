import { demoDensityActionTypes } from './demo-density.types';

const INITIAL_STATE = {
    data: [],
    options: {},
    error: ''
};
  
const demoDensityReducer = (state = INITIAL_STATE, action) => {
switch (action.type) {
    case demoDensityActionTypes.GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: ''
      };

    case demoDensityActionTypes.GET_DATA_FAILURE:
    return {
        ...state,
        error: action.payload
    };

    case demoDensityActionTypes.GET_OPTIONS_SUCCESS:
    return {
        ...state,
        options: action.payload,
        error: ''
    };

    case demoDensityActionTypes.GET_OPTIONS_FAILURE:
    return {
        ...state,
        error: action.payload
    };
      
    default:
     return state;
  }
};

export default demoDensityReducer;