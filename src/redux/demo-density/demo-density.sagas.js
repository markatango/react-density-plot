import { takeLatest, put } from 'redux-saga/effects';
import { getData, getKDE, extractYFromData } from '../../utils/stat.utils';
import { densityOptions } from './demo-density.utils';
import { demoDensityActionTypes } from './demo-density.types';

import { 
    getDataSuccess,
    getDataFailure,
    getOptionsSuccess,
    getOptionsFailure
 } from './demo-density.actions';

export function* getDataAsync(){

    try{
        const data = yield getData('normal', 1000);
        yield put(getDataSuccess(data))
    } catch (errorMessage) {
        yield put(getDataFailure(errorMessage))
    }
};

export function* getOptionsAsync(){
    const options = densityOptions;

    try{
        options.data[0].dataPoints = yield  getKDE(extractYFromData(getData('normal', 1000)));
        yield put(getOptionsSuccess(options))
    } catch (errorMessage) {
        yield put(getOptionsFailure(errorMessage))
    }
}
    
export function* getDensityStart(){
    yield takeLatest(
        demoDensityActionTypes.DENSITY_DATA_START,
        getDataAsync
    )
};

export function* getDensityOptionsStart(){
    yield takeLatest(
        demoDensityActionTypes.DENSITY_OPTIONS_START,
        getOptionsAsync
    )
}

