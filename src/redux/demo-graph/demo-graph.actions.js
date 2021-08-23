import { demoGraphActionTypes } from './demo-graph.types';

export const getDataSuccess = (data) => ({
    type: demoGraphActionTypes.GET_DATA_SUCCESS,
    payload: data
});

export const getDataFailure = (errorMessage) => ({
    type: demoGraphActionTypes.GET_DATA_FAILURE,
    payload: errorMessage
});

export const getDataStart = () => ({
    type: demoGraphActionTypes.GET_DATA_START
});

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