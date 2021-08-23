import { demoDisplayActionTypes } from './demo-display.types';

export const getDataSuccess = (data) => ({
    type: demoDisplayActionTypes.GET_DATA_SUCCESS,
    payload: data
});

export const getDataFailure = (errorMessage) => ({
    type: demoDisplayActionTypes.GET_DATA_FAILURE,
    payload: errorMessage
});

export const getDataStart = () => ({
    type: demoDisplayActionTypes.GET_DATA_START
});
