import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, registGuru} from '../actions';
import { Container, Header, Left,Body,Right,Title} from 'native-base';
import {Icon} from 'react-native-elements'
import RegistInputGuru from './RegistInputGuru';
class RegisterGuru extends Component {

    componentDidUpdate() {
        if(this.props.user) {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'MainMenu' })],
            });
            this.props.navigation.dispatch(resetAction);
        }
    }

    onEmailChange = (text) => {
        this.props.emailChanged(text);
    }

    onPasswordChange = (text) => {
        this.props.passwordChanged(text);
    }

    onButtonPress = () => {
        const {username, lokasinf, nomornf,guru,status, email, password,image } = this.props;
        this.props.registGuru({ username, lokasinf, nomornf,guru,status,image, email, password });
        // this.props.profileCreate(username, lokasinf, nomornf,email,image);
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
                Daftar
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
            <View>
            <Text style={styles.titleTextStyle}>Daftar sebagai guru</Text>
            <Card>
               <RegistInputGuru/> 
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
                <View>
                    <Text>Jika sudah memiliki akun login disini</Text>
                </View>
            </CardSection>
            <CardSection>
                <Button onPress={()=>this.props.navigation.navigate('Login')}>Login</Button>
            </CardSection>
        </Card>
        </View>
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
    }
};

const mapStateToProps = (state) => {
    const { username, lokasinf, nomornf,guru} = state.profileForm;
    const image = 'default.png';
    const status = 'guru';
    const { email, password, error, loading, user,checkedAuth } = state.auth;
    return { username, lokasinf, nomornf,guru,status,email, password, error, loading, user,checkedAuth ,image};
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, registGuru })(RegisterGuru);