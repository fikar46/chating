import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Container, Header, Left,Body,Right,Title} from 'native-base';
import {Icon} from 'react-native-elements'
class LoginForm extends Component {

  

    onEmailChange = (text) => {
        this.props.emailChanged(text);
    }

    onPasswordChange = (text) => {
        this.props.passwordChanged(text);
    }

    onButtonPress = () => {
        const { email, password } = this.props;
        
        this.props.loginUser({ email, password });
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }

        return (
            <Button onPress={this.onButtonPress}>
               Masuk
            </Button>
        );
    }
    renderFormLogin =()=>{
        if(this.props.checkedAuth===false){
            return(
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>NFChat</Text>
                    <Spinner/>
                </View>
            )
        }
        return(
            <Container>
            <Header >
                <Left>
                <Icon name='monochrome-photos' color='white' size={25}/>
                </Left>
            <Body >
            <Title>NFChat</Title>
            </Body>
            <Right>
            </Right>
        </Header>
            <View style={styles.login}>
            <Text style={styles.titleTextStyle}>Login Disini</Text>
            <Card>
                       
            <CardSection>
                <Input
                    label="Email"
                    placeholder="email@email.com"
                    onChangeText={this.onEmailChange}
                    value={this.props.email}
                />
            </CardSection>
            <CardSection>
                <Input
                    secureTextEntry
                    label="Password"
                    placeholder="password"
                    onChangeText={this.onPasswordChange}
                    value={this.props.password}
                />
            </CardSection>
            {this.renderError()}
            <CardSection>
                {this.renderButton()}
            </CardSection>
            <CardSection>
                <Button onPress={()=>this.props.navigation.navigate('Register')}>Daftar</Button>
            </CardSection>
        </Card>
        
        </View>
        <Text style={styles.guru} onPress={()=>this.props.navigation.navigate('RegisterGuru')}>anda guru? daftar disini</Text>
        </Container>
        )
    }
    render() {
        return this.renderFormLogin()
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },titleTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'black'
    }, guru:{
        alignSelf:'center',
        
    },login:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        marginTop:50
    }
};

const mapStateToProps = (state) => {
    const { email, password, error, loading, user,checkedAuth } = state.auth;

    return { email, password, error, loading, user,checkedAuth  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);