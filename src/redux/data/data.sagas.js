import { takeLatest, put } from 'redux-saga/effects';
import { getData } from '../../utils/stat.utils';
import { dataActionTypes } from './data.types';

import { 
    getDataSuccess,
    getDataFailure
 } from './data.actions';

export function* getDataAsync({ payload }){
    try{
        const data = yield getData(payload, 1000);
        yield put(getDataSuccess(data))
    } catch (errorMessage) {
        yield put(getDataFailure(errorMessage))
    }
};
    
export function* getDataStarts(){
    yield takeLatest(
        dataActionTypes.GET_DATA_START,
        getDataAsync
    )
};