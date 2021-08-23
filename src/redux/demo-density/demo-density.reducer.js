import { demoDensityActionTypes } from './demo-density.types';
import { densityOptions } from './demo-density.utils';

const INITIAL_STATE = {
    options: densityOptions,
    error: ''
};
  
const demoDensityReducer = (state = INITIAL_STATE, action) => {
switch (action.type) {
 
    case demoDensityActionTypes.DENSITY_OPTIONS_SUCCESS:
    return {
        ...state,
        options: action.payload,
        error: ''
    };

    case demoDensityActionTypes.DENSITY_OPTIONS_FAILURE:
    return {
        ...state,
        error: action.payload
    };
      
    default:
     return state;
  }
};

export default demoDensityReducer;