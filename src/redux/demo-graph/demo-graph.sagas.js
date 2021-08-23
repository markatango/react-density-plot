import { takeLatest, put } from 'redux-saga/effects';
import { getData } from '../../utils/stat.utils';
import { graphOptions } from './demo-graph.utils';
import { demoGraphActionTypes } from './demo-graph.types';

import { 
    getDataSuccess,
    getDataFailure,
    getOptionsSuccess,
    getOptionsFailure
 } from './demo-graph.actions';

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
        demoGraphActionTypes.GET_DATA_START,
        getDataAsync
    )
};

export function* getOptionsStart(){
    yield takeLatest(
        demoGraphActionTypes.GET_OPTIONS_START,
        getOptionsAsync
    )
}