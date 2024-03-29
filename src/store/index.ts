import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import newsReducer from 'store/news/reducer';

const rootReducer = combineReducers({
    newsReducer,
})

const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
)

export default store;