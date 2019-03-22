import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { profileUpdate } from '../actions';
import { CardSection,Input } from './common';

class RegistInputGuru extends Component {
    onUsernameChange = (text) => {
        this.props.profileUpdate('username', text);
    }

    onLokasiNFChange = (text) => {
        this.props.profileUpdate('lokasinf', text);
    }
    onNomorNFChange = (text) => {
        this.props.profileUpdate('nomornf', text);
    }
    onGuruNFChange = (text) => {
        this.props.profileUpdate('guru', text);
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
                <CardSection>
                    <Input 
                        label="Guru bidang" 
                        placeholder="Mata pelajaran"
                        value={this.props.guru}
                        onChangeText={this.onGuruNFChange} 
                    />
                </CardSection>
            </View>
        );
    }
}


const mapStateToProps = (state) => {
    const { username, lokasinf, nomornf,guru} = state.profileForm;

    return {username,lokasinf,nomornf,guru };
};

export default connect(mapStateToProps, { profileUpdate })(RegistInputGuru);
