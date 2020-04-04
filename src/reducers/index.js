import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; //localstorage obj
import authenticationReducer from './authenticationReducer';
import setGeoLocationReducer from './setGeoLocationReducer'
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['authentication', 'setGeoLocationReducer']
}

const rootReducer = combineReducers({
    authentication: authenticationReducer,
    geoLocation: setGeoLocationReducer,
})

export default persistReducer(persistConfig, rootReducer);