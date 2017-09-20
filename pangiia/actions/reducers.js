import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { RETRIEVE_EVENTS_REQUEST, EVENT_RETRIEVAL_SUCCESS, EVENT_RETRIEVAL_FAILED } from './'

const eventCollection = (state = {}, action) => {

    switch (action.type) {
        case RETRIEVE_EVENTS_REQUEST:
            return {
                isLoading: true,
                failedToLoad: false,
                events: []
            };

        case EVENT_RETRIEVAL_SUCCESS:
            return {
                isLoading: false,
                failedToLoad: false,
                events: action.events.data.events
            };

        case EVENT_RETRIEVAL_FAILED:
            return {
                isLoading: false,
                failedToLoad: true,
                events: []
            };

        default:
            return state;
    }
};

const rootReducer = combineReducers({
    routing,
    eventCollection
});

export default rootReducer;