import React, {Component} from 'react'
import  {Text, View} from 'react-native'
import {Container, Header, Left, Title, Body,Right} from 'native-base'
import { connect } from 'react-redux';
import {profileCreate,getProfilDetail} from '../actions'
import PhotoForm from './photoForm';
import {Card, CardSection, Button, Spinner} from './common'
import {Icon} from 'react-native-elements'
import { StackActions, NavigationActions } from 'react-navigation';
import _ from 'lodash';
class Post extends Component{
    componentDidUpdate() {
        if(this.props.profileUser) {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'MainMenu' })],
            });
            this.props.navigation.dispatch(resetAction);
        }
    }
    componentDidMount() {
        this.props.getProfilDetail();
    }
    
    render(){
        
            return(
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Loading</Text>
                    <Spinner/>
                </View>
            )
        }
        
    }
const mapStateToProps = (state) => {

    const profileUser = state.profileUser;
    console.log(profileUser);
    return {profileUser};
};
export default connect(mapStateToProps, {profileCreate,getProfilDetail})(Post);