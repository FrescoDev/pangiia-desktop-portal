import fetch from 'isomorphic-fetch';

export const RETRIEVE_EVENTS_REQUEST = 'RETRIEVE_EVENTS_REQUEST'
export const EVENT_RETRIEVAL_FAILED = 'EVENT_RETRIEVAL_FAILED'
export const EVENT_RETRIEVAL_SUCCESS = 'EVENT_RETRIEVAL_SUCCESS'

export function setLoadingState() {
    return {
        type: RETRIEVE_EVENTS_REQUEST,
        isLoading: true
    }
}

export function handleError() {
    return {
        type: EVENT_RETRIEVAL_FAILED,
        isLoading: false
    }
}

export async function getEvents() {
    const data = await fetch('http://localhost:4567/event-feed').then(res => res.json())
    return {
        type: EVENT_RETRIEVAL_SUCCESS,
        events: data
    }
}