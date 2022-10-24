import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./reducers";
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { saveState, tokenIsExpired } from "../api/dataLab/saveStore";


const loggerMiddleware = createLogger();

export default function configureStore(initialState = {}) {

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            thunkMiddleware,
            loggerMiddleware
        )
    );

    store.subscribe(()=>{
        saveState(store.getState())
        if (tokenIsExpired()) window.location.href="/";
      })
    
    return store;
}