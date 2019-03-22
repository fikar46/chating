import {
    PROFILE_CREATE,
    PROFILE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
    username: '',
    lokasinf: '',
    nomornf:'',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PROFILE_CREATE:
            return INITIAL_STATE;
        case PROFILE_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        default:
            return state;
    }
};
