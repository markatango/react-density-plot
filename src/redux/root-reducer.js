// combines all code for all reducers
import demoGraphReducer from './demo-graph/demo-graph.reducer';
import demoDensityReducer from './demo-density/demo-density.reducer';
import demoDisplayReducer from './demo-display/demo-display.reducer';

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

// use localStorage (persists even when page is closed) as my storage
import storage from 'redux-persist/lib/storage';

// or use sessionStorage (persists unless page is closed)
//import sessionStorage from 'redux-persist/lib/somewhere else

// persist the cart; it's the reducer that changes state frequently due to user action. user is persisted by firebase.
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['demo-graph', 'demo-density', 'demo-display']
}

const rootReducer = combineReducers({
    demograph: demoGraphReducer,
    demodensity: demoDensityReducer,
    demodata: demoDisplayReducer
})

export default persistReducer( persistConfig, rootReducer );