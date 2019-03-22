import firebase from '@firebase/app';
import '@firebase/auth';

import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_FAIL,
    LOGIN_USER_SUCCESS,
    LOGOUT_USER,
    NOT_LOGIN_YET,
    PROFILE_GETLIST_SUCCESS
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            loginUserSuccess(dispatch, user);
            const { currentUser } = firebase.auth();
            console.log(currentUser.uid)
                firebase.database().ref(`/users/${currentUser.uid}`)
                    .on('value', snapshot => {
                        dispatch({ type: PROFILE_GETLIST_SUCCESS, payload: snapshot.val() });
                    });
        })
        .catch((error) => {
            console.log(error);
            loginUserFail(dispatch);
        });
    };
};
export const registUser = ({ username, lokasinf, nomornf,image, email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                loginUserSuccess(dispatch, user);
            })
            .catch(() => loginUserFail(dispatch));
    };
};
export const registGuru = ({ username, lokasinf, nomornf,guru,status,image, email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                loginUserSuccess(dispatch, user);
                const { currentUser } = firebase.auth();
                firebase.database().ref(`/users/${currentUser.uid}`)
                .push({ username, lokasinf, nomornf,guru,status,email,image })
                .then(() => {
                    dispatch({ type: PROFILE_CREATE });
                })
                .catch((error) => {
                    console.log(error);
                });
            })
            .catch(() => loginUserFail(dispatch));
    };
};


const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

export const logoutUser = ()=>{
    return (dispatch)=>{
        firebase.auth().signOut()
        .then(res =>{
            dispatch({type:LOGOUT_USER})
        });
    }
}
export const alreadyLogin =(user)=>{
    return{
        type: LOGIN_USER_SUCCESS,
        payload:user
    }
}
export const notLoginYet =(user)=>{
    return{
        type: NOT_LOGIN_YET
    }
}