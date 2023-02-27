import { dataActionTypes } from './data.types';

export const getDataSuccess = (data) => ({
    type: dataActionTypes.GET_DATA_SUCCESS,
    payload: data
});

export const getDataFailure = (errorMessage) => ({
    type: dataActionTypes.GET_DATA_FAILURE,
    payload: errorMessage
});

export const getDataStart = (datatypeAndLength) => ({
    type: dataActionTypes.GET_DATA_START,
    payload: datatypeAndLength
});

export const setNumberPoints = (dlength) => ({
    type: dataActionTypes.SET_NUMBER_POINTS,
    payload: dlength
});

export const setDataType = (type) => ({
    type: dataActionTypes.SET_DATA_TYPE,
    payload: type
});