import React, {Component} from 'react'
import {Text,Image,TouchableHighlight,Button} from 'react-native'
import {Container, Header, Left, Title, Body, Right, View,Thumbnail} from 'native-base'
import {Icon} from 'react-native-elements'
import _ from 'lodash';
import { connect } from 'react-redux';
import {getProfilDetail} from '../actions'
import { Card, CardSection} from './common';
import firebase from '@firebase/app';
import '@firebase/storage';

class Home extends Component{
    state={
        avatar:'https://firebasestorage.googleapis.com/v0/b/nfchat-ecf36.appspot.com/o/avatar%2Fdefault.png?alt=media&token=40d5b750-30ab-42bb-9256-8f5dec882bbc'
    }
 
curhat=()=>{
    this.props.screenProps.rootNavigation.navigate('Curhat');
 }
konsul =()=>{
    this.props.screenProps.rootNavigation.navigate('Konsul');
 }
pembahasan=()=>{
    this.props.screenProps.rootNavigation.navigate('Pembahasan');
 }
user=()=>{
    const {
        containerStyle
    } = styles; 
    return(
        <View>
                        <Card>
                    <TouchableHighlight onPress={this.curhat}>
                        <CardSection >
                            <Text style={containerStyle}>Curhat yuk</Text>  
                        </CardSection>
                    </TouchableHighlight>  
                </Card>
                <Card>
                    <TouchableHighlight onPress={this.konsul}>
                        <CardSection >
                            <Text style={containerStyle}>Konsul dengan guru</Text>  
                        </CardSection>
                    </TouchableHighlight>  
                </Card>
                <Card>
                    <TouchableHighlight onPress={this.pembahasan}>
                        <CardSection >
                            <Text style={containerStyle}>Video pembahasan tryout</Text>  
                        </CardSection>
                    </TouchableHighlight>  
                </Card> 
        </View>
    )
}
home=()=>{
    const { 
        containerStyle
    } = styles; 
   
        return this.user()
    
}
    render(){
        const { headerContentStyle, 
            headerTextStyle,
            thumbnailContainerStyle,
            containerStyle
        } = styles;  
        return(
            <Container>
                <Header>
                <Left>
                <Icon name='monochrome-photos' color='white' size={25}/>
                </Left>
            <Body >
            <Title>NFChat</Title>
            </Body>
            <Right>   
            </Right>
                </Header>
                <Card>
                    <CardSection>
                    <View style={thumbnailContainerStyle}>
                               <Thumbnail source={{ uri: this.state.avatar }} />
                    </View>
                        <View style={headerContentStyle}>
                            <Text style={headerTextStyle}>test</Text>
                            <Text>12</Text>
                        </View>
                    </CardSection>
                </Card>
            {this.home()}
            </Container>
        )
    }
}
const styles = { 
    headerContentStyle: {
        justifyContent: 'space-around'
        },
    headerTextStyle: {
        fontSize: 18
        },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: { 
        flex: 1,
        width: null,
        height: 300,
        resizeMode: 'contain'
    },
    containerStyle:{
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:5
    }
}
const mapStateToProps = (state) => {
    const {user} =state.auth;
    console.log(state.profileUser);
    const profileUser = _.map(state.profileUser, (val, uid) => {
        return { ...val, uid };
    });
    console.log(profileUser);
    return {user,profileUser};
};
export default connect(mapStateToProps,{getProfilDetail})(Home);