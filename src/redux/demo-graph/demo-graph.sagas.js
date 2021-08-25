import { takeLatest, put } from 'redux-saga/effects';
import { graphOptions } from './demo-graph.utils';
import { demoGraphActionTypes } from './demo-graph.types';
import { 
    getOptionsSuccess,
    getOptionsFailure
 } from './demo-graph.actions';

export function* getOptionsAsync(){
    const options = graphOptions;

    try{
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