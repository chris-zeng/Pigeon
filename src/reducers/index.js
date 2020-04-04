import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //localstorage obj
import authenticationReducer from './authenticationReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authentication']
}

const rootReducer = combineReducers({
    authentication: authenticationReducer,
})

export default persistReducer(persistConfig, rootReducer);