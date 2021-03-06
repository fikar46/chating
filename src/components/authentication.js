import React,{Component} from 'react';
import {StackNavigator} from 'react-navigation';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { StackActions, NavigationActions } from 'react-navigation';
import RegistForm from './RegistForm';
import registerGuru from './registerGuru';
const RootStack = StackNavigator(
{
    Login: {
        screen: LoginForm
    },
    Register:{
        screen:RegistForm
    },
    RegisterGuru:{
        screen:registerGuru
    }
},
{
    initialRouteName: 'Login',
    headerMode: 'none'
}
);
class Authentication extends Component {
    componentDidUpdate() {
        if(this.props.user) {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'MainMenu' })],
            });
            this.props.navigation.dispatch(resetAction);
        }
    }
    render() {
        return (<RootStack />);
    }}
    const mapStateToProps = (state) => {
        const {  user } = state.auth;
    
        return { user };
    };
    
export default connect(mapStateToProps,null)(Authentication);
