import { all , call } from 'redux-saga/effects';
import { getDataStart, getOptionsStart } from './demo-graph/demo-graph.sagas';

export default function* rootSaga() {
    yield all([
       call(getDataStart),
       call(getOptionsStart)
    ])
}