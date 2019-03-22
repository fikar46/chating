import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { profileUpdate } from '../actions';
import { CardSection,Input } from './common';

class RegistInput extends Component {
    onUsernameChange = (text) => {
        this.props.profileUpdate('username', text);
    }

    onLokasiNFChange = (text) => {
        this.props.profileUpdate('lokasinf', text);
    }
    onNomorNFChange = (text) => {
        this.props.profileUpdate('nomornf', text);
    }
    
    render() {
        return (
            <View>
                 <CardSection>
                    <Input 
                        label="Username" 
                        placeholder="Username"
                        value={this.props.username}
                        onChangeText={this.onUsernameChange} 
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Lokasi NF" 
                        placeholder="Lokasi NF"
                        value={this.props.lokasinf}
                        onChangeText={this.onLokasiNFChange} 
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        label="Nomor NF" 
                        placeholder="Nomor NF"
                        value={this.props.nomornf}
                        onChangeText={this.onNomorNFChange} 
                    />
                </CardSection>
            </View>
        );
    }
}


const mapStateToProps = (state) => {
    const { username, lokasinf, nomornf} = state.profileForm;

    return {username,lokasinf,nomornf };
};

export default connect(mapStateToProps, { profileUpdate })(RegistInput);
