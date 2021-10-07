import { dataActionTypes } from './data.types';

export const getDataSuccess = (data) => ({
    type: dataActionTypes.GET_DATA_SUCCESS,
    payload: data
});

export const getDataFailure = (errorMessage) => ({
    type: dataActionTypes.GET_DATA_FAILURE,
    payload: errorMessage
});

export const getDataStart = (datatype) => ({
    type: dataActionTypes.GET_DATA_START,
    payload: datatype
});