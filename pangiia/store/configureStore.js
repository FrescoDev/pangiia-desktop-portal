import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../actions/reducers';
import { applyMiddleware, createStore, compose } from 'redux';
import asyncAwait from 'redux-async-await';
import DevTools from '../utils/DevTools';

export const history = createHistory();
const middleware = routerMiddleware(history);

export const configureStore = (process.env.NODE_ENV === 'production') ? (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(middleware, asyncAwait)
    );
} : (initialState) => {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(middleware, asyncAwait),
            DevTools.instrument()
        )
    );
}