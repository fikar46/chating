import {PROFILE_GETLIST_SUCCESS } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PROFILE_GETLIST_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};