import { demoDensityActionTypes } from './demo-density.types';

export const getDataSuccess = (data) => ({
    type: demoDensityActionTypes.GET_DATA_SUCCESS,
    payload: data
});

export const getDataFailure = (errorMessage) => ({
    type: demoDensityActionTypes.GET_DATA_FAILURE,
    payload: errorMessage
});

export const getDataStart = () => ({
    type: demoDensityActionTypes.GET_DATA_START
});

export const getOptionsSuccess = (data) => ({
    type: demoDensityActionTypes.GET_OPTIONS_SUCCESS,
    payload: data
});

export const getOptionsFailure = (errorMessage) => ({
    type: demoDensityActionTypes.GET_OPTIONS_FAILURE,
    payload: errorMessage
});

export const getOptionsStart = () => ({
    type: demoDensityActionTypes.GET_OPTIONS_START
});