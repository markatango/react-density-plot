import { takeLatest, put } from 'redux-saga/effects';
import { graphOptions } from './demo-graph.utils';
import { demoGraphActionTypes } from './demo-graph.types';
import { getData } from '../../utils/stat.utils';
import { 
    getOptionsSuccess,
    getOptionsFailure
 } from './demo-graph.actions';

export function* getOptionsAsync(){
    const options = graphOptions;

    try{
        options.data[0].dataPoints = yield  getData('normal', 1000);
        yield put(getOptionsSuccess(options))
    } catch (errorMessage) {
        yield put(getOptionsFailure(errorMessage))
    }
}
    
export function* getOptionsStart(){
    yield takeLatest(
        demoGraphActionTypes.GET_OPTIONS_START,
        getOptionsAsync
    )
}