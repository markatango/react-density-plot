import { takeLatest, put } from 'redux-saga/effects';
import { getData } from '../../utils/stat.utils';
import { graphOptions } from './demo-density.utils';
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
    const options = graphOptions;

    try{
        options.data[0].dataPoints = yield  getData('normal', 1000);
        yield put(getOptionsSuccess(options))
    } catch (errorMessage) {
        yield put(getOptionsFailure(errorMessage))
    }
}
    
export function* getDataStart(){
    yield takeLatest(
        demoDensityActionTypes.GET_DATA_START,
        getDataAsync
    )
};

export function* getOptionsStart(){
    yield takeLatest(
        demoDensityActionTypes.GET_OPTIONS_START,
        getOptionsAsync
    )
}