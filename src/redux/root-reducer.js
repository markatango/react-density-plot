// combines all code for all reducers
import dataReducer from './data/data.reducer';

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

// use localStorage (persists even when page is closed) as my storage
import storage from 'redux-persist/lib/storage';

// or use sessionStorage (persists unless page is closed)
//import sessionStorage from 'redux-persist/lib/somewhere else

// persist the cart; it's the reducer that changes state frequently due to user action. user is persisted by firebase.
/* const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['demo-graph', 'demo-density', 'demo-display']
} */

const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
}

const rootReducer = combineReducers({
    data: dataReducer
})

export default persistReducer( persistConfig, rootReducer );