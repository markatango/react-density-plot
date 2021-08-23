import { getData } from '../..generic-graph.actions';
import { graphActions } from '../generic-graph.types';


const INITIAL_STATE = {
    data: [],
    options: {},
    error: ''
};
  
const demoGraphReducer = (state = INITIAL_STATE, action) => {
switch (action.type) {
    case graphActions.GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload
      };

    case graphActions.GET_OPTIONS_SUCCESS:
    return {
        ...state,
        options: action.payload
    };

    case graphActions.GET_OPTIONS_FAILURE:
    return {
        ...state,
        error: action.payload
    };
      
    default:
     return state;
  }
};

export default demoGraphReducer;