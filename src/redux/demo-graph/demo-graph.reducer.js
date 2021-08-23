
import { demoGraphActionTypes } from './demo-graph.types';

const INITIAL_STATE = {
    data: [],
    options: {},
    error: ''
};
  
const demoGraphReducer = (state = INITIAL_STATE, action) => {
switch (action.type) {
    case demoGraphActionTypes.GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: ''
      };

    case demoGraphActionTypes.GET_DATA_FAILURE:
    return {
        ...state,
        error: action.payload
    };

    case demoGraphActionTypes.GET_OPTIONS_SUCCESS:
    return {
        ...state,
        options: action.payload,
        error: ''
    };

    case demoGraphActionTypes.GET_OPTIONS_FAILURE:
    return {
        ...state,
        error: action.payload
    };
      
    default:
     return state;
  }
};

export default demoGraphReducer;