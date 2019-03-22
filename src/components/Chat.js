import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import {  } from '../actions';
import { Card,CardSection } from './common';
import {Container, Header, Left, Title, Body, Right,Thumbnail} from 'native-base';
import {Icon} from 'react-native-elements';
class Chat extends Component {
    
    render() {
        return (
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
            <View>
                <Text>
                    tempat chat
                </Text>
            </View>
        </Container>
        );
    }
}


const mapStateToProps = (state) => {
    const { username, lokasinf, nomornf} = state.profileForm;

    return {username,lokasinf,nomornf };
};

export default connect(mapStateToProps, {  })(Chat);
