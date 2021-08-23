import { demoDensityActionTypes } from './demo-density.types';

export const getOptionsSuccess = (data) => ({
    type: demoDensityActionTypes.DENSITY_OPTIONS_SUCCESS,
    payload: data
});

export const getOptionsFailure = (errorMessage) => ({
    type: demoDensityActionTypes.DENSITY_OPTIONS_FAILURE,
    payload: errorMessage
});

export const getOptionsStart = () => ({
    type: demoDensityActionTypes.DENSITY_OPTIONS_START
});