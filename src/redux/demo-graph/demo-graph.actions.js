import { demoGraphActionTypes } from './demo-graph.types';

export const getOptionsSuccess = (data) => ({
    type: demoGraphActionTypes.GET_OPTIONS_SUCCESS,
    payload: data
});

export const getOptionsFailure = (errorMessage) => ({
    type: demoGraphActionTypes.GET_OPTIONS_FAILURE,
    payload: errorMessage
});

export const getOptionsStart = () => ({
    type: demoGraphActionTypes.GET_OPTIONS_START
});