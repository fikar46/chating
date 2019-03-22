import React, { Component } from 'react';
import { View, Text, Image,ScrollView } from 'react-native';
import {Card, CardSection} from './common'
import { Thumbnail,Button } from 'native-base';
import {photoUpdate} from '../actions'
import _ from 'lodash';
import { connect } from 'react-redux';

class PhotoDetail extends Component{
    onRowPress = () => {
        _.each(this.props.album, (value, prop) => {
            this.props.photoUpdate(prop, value);
        });
        // for (const prop in this.props.employee) {
        //     this.props.employeeUpdate(prop, this.props.employee[prop]);
        // }
        // this.props.Navigation.navigate('photoDetail'); nanti harus di kelarin
    }
    render(){
        const { photo, caption ,email,uid} = this.props.album;
        const { headerContentStyle, 
                headerTextStyle,
                thumbnailStyle,
                thumbnailContainerStyle,
                imageStyle } = styles;
        return(
            <Card>
                <CardSection>
                <View style={thumbnailContainerStyle}>
                               <Thumbnail source={{ uri: 'https://'+photo }} />
                    </View>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{email}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Image style={imageStyle} source={{uri: 'https://'+photo}}>
                    </Image>
                </CardSection>
                <CardSection>
                <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{email}</Text>
                        <Text>{caption}</Text>
                    </View>
            </CardSection>
            <CardSection>
                <View style={{flex:1,height:null}}>
                <ScrollView>
                <Button transparent onPress={this.onRowPress}>
                <Text style={{color: 'blue'}}>View All Comment</Text>
                </Button>
                <Text>Comment</Text>
                <Text>Comment</Text>
                </ScrollView>
                </View>
            </CardSection>
            </Card>
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
    }
}
export default connect(null, { photoUpdate })(PhotoDetail);