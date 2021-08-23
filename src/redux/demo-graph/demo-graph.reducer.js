
import { demoGraphActionTypes } from './demo-graph.types';
import { graphOptions } from './demo-graph.utils';


const INITIAL_STATE = {
    data: [],
    options: graphOptions,
    error: ''
};
  
const demoGraphReducer = (state = INITIAL_STATE, action) => {
switch (action.type) {

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