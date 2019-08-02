import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';

import { PROFILE_UPDATE, PROFILE_CREATE, PROFILE_GETLIST_SUCCESS ,GURU_GETLIST_SUCCESS} from './types';

export const profileUpdate = (prop, value) => {
    return {
        type: PROFILE_UPDATE,
        payload: { prop, value }
    };
};

export const profileCreate = (username, lokasinf, nomornf,email,image) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}`)
        .push({ username, lokasinf, nomornf,email,image })
        .then(() => {
            dispatch({ type: PROFILE_CREATE });
        });
    };
};

export const getProfilDetail = () => {
    const { currentUser } = firebase.auth();
    console.log(currentUser.uid)
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}`)
            .once('value', (snapshot) => {
                console.log(snapshot.val())
                dispatch({ type: PROFILE_GETLIST_SUCCESS, payload: snapshot.val() });
            });
    };
};
export const getGurulist = () => {
    return (dispatch) => {
        firebase.database().ref(`/guru`)
            .on('value', snapshot => {
                dispatch({ type: GURU_GETLIST_SUCCESS, payload: snapshot.val() });
            });
    };
};
