import { handleActions } from 'redux-actions';

import { loadStarted, loadCompleted, loadFaled } from 'actions/users';

const initialState = {
    loading: false,
    error: null,
    authors: [],
};

export default handleActions({
    [loadStarted]: (state) => {
        return {
            ...state,
            error: null,
            loading: true,
        };
    },
    [loadCompleted]: (state, action) => {
        return {
            ...state,
            authors: action.payload,
            loading: false,
        };
    },
    [loadFaled]: (state, action) => {
        return {
            ...state,
            error: action.payload,
            loading:false,
        };
    },
    }, initialState)