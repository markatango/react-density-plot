import { takeLatest, put } from 'redux-saga/effects';
import { getData } from '../../utils/stat.utils';
import { demoDisplayActionTypes } from './demo-display.types';

import { 
    getDataSuccess,
    getDataFailure
 } from './demo-display.actions';

export function* getDataAsync(){
    try{
        const data = yield getData('uniform', 1000);
        yield put(getDataSuccess(data))
    } catch (errorMessage) {
        yield put(getDataFailure(errorMessage))
    }
};
    
export function* getDataStart(){
    yield takeLatest(
        demoDisplayActionTypes.GET_DATA_START,
        getDataAsync
    )
};