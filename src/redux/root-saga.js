import { all , call } from 'redux-saga/effects';
import { getDataStart } from './demo-display/demo-display.sagas';
import { getOptionsStart } from './demo-graph/demo-graph.sagas';
import { getDensityOptionsStart } from './demo-density/demo-density.sagas';

export default function* rootSaga() {
    yield all([
       call(getDataStart),
       call(getOptionsStart),
       call(getDensityOptionsStart)
    ])
}