import { dataTypes } from './data-type.types';

/* GET_TYPE_START : 'GET_TYPE_START',
GET_TYPE_SUCCESS : 'GET_TYPE_START',
GET_tYPE_FAILURE : 'GET_TYPE_START', */

export const getDataTypeStart = (data) => ({
    type: demoDensityActionTypes.GET_TYPE_SUCCESS,
    payload: data
});

export const getDataTypeFailure = (errorMessage) => ({
    type: demoDensityActionTypes.GET_tYPE_FAILURE,
    payload: errorMessage
});

export const getDataTypeStart = () => ({
    type: demoDensityActionTypes.GET_TYPE_START
});