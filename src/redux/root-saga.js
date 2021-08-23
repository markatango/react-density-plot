import { all , call } from 'redux-saga/effects';
import { getDataStart, getOptionsStart } from './demo-graph/demo-graph.sagas';
import { getDensityStart, getDensityOptionsStart } from './demo-density/demo-density.sagas';

export default function* rootSaga() {
    yield all([
       call(getDataStart),
       call(getOptionsStart),
       call(getDensityStart),
       call(getDensityOptionsStart)
    ])
}