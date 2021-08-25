import { takeLatest, put } from 'redux-saga/effects';
import { densityOptions } from './demo-density.utils';
import { demoDensityActionTypes } from './demo-density.types';

import { 
    getOptionsSuccess,
    getOptionsFailure
 } from './demo-density.actions';

export function* getOptionsAsync(){
    const options = densityOptions;

    try{
         yield put(getOptionsSuccess(options))
    } catch (errorMessage) {
        yield put(getOptionsFailure(errorMessage))
    }
}
    
export function* getDensityOptionsStart(){
    yield takeLatest(
        demoDensityActionTypes.DENSITY_OPTIONS_START,
        getOptionsAsync
    )
}

