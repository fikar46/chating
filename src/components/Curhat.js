import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import {  } from '../actions';
import { Card,CardSection } from './common';
import {Container, Header, Left, Title, Body, Right,Thumbnail} from 'native-base';
import {Icon} from 'react-native-elements';
class Curhat extends Component {
    state={
        avatar:'https://firebasestorage.googleapis.com/v0/b/nfchat-ecf36.appspot.com/o/avatar%2Fdefault.png?alt=media&token=40d5b750-30ab-42bb-9256-8f5dec882bbc'
    }
 componentDidMount(){
    // this.getAvatar(this.props.profileUser[0].image)
 }
 getAvatar=(image)=>{
    const storage = firebase.storage().ref()
    storage.child(`avatar/${image}`).getDownloadURL()
    .then((url)=>{
        this.setState({avatar:url})
        console.log(url)
    })
    .catch((err)=>{
        console.log(err)
    })
 }
    render() {
        const { headerContentStyle, 
            headerTextStyle,
            thumbnailContainerStyle,
            containerStyle
        } = styles; 
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
            <Card>
                    <CardSection>
                    <View style={thumbnailContainerStyle}>
                               <Thumbnail source={{ uri: this.state.avatar }} />
                    </View>
                        <View style={headerContentStyle}>
                            <Text style={headerTextStyle}>nama</Text>
                            <Text>guru bidang</Text>
                        </View>
                    </CardSection>
                </Card>
            </View>
        </Container>
        );
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
    const { username, lokasinf, nomornf} = state.profileForm;
    
    return {username,lokasinf,nomornf };
};

export default connect(mapStateToProps, {  })(Curhat);
