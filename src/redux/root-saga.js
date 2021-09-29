import { all , call } from 'redux-saga/effects';
import { getDataStarts } from './data/data.sagas';

export default function* rootSaga() {
    yield console.log('root-saga running')
    yield all([
       call(getDataStarts)
    ])
}