import React, { Component } from 'react';
import firebase from '@firebase/app';
import '@firebase/auth'
import Main from './Main';
import {alreadyLogin,notLoginYet} from '../actions'
import {connect} from 'react-redux'
class AppInit extends Component {
  componentDidMount() {
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCx6VmvjUg91wYMkaU9-IXYvTmo1UKuBBU",
    authDomain: "nfchat-ecf36.firebaseapp.com",
    databaseURL: "https://nfchat-ecf36.firebaseio.com",
    projectId: "nfchat-ecf36",
    storageBucket: "nfchat-ecf36.appspot.com",
    messagingSenderId: "714050982360"
  };
  if(firebase.apps.length===0){
    firebase.initializeApp(config);
  }
  
  firebase.auth().onAuthStateChanged((user)=>{
      if(user){
          this.props.alreadyLogin(user)
      }else{
          this.props.notLoginYet();
      }
  })
  }

  render() {
    return (
          <Main />
    );
  }
}
export default connect(null, {alreadyLogin,notLoginYet}) (AppInit);