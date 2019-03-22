import React, {Component} from 'react'
import  {ScrollView} from 'react-native'
import {Container, Header, Left, Title, Body, Right} from 'native-base'
import _ from 'lodash';
import { connect } from 'react-redux';
import {getPhotoList} from '../actions'
import PhotoDetail from './getPhotoList'
import {Icon} from 'react-native-elements'
class Timeline extends Component{
    componentDidMount() {
        this.props.getPhotoList();
    }
    renderPhoto = () => {
        var listPhoto = this.props.photoList.map((item) => {
            return (
                <PhotoDetail key={item.photo} album={item}/> 
            )
        });
        return listPhoto;
    }
    render(){
        
        return(
            <Container>
                <Header>
                <Left>
                <Icon name='monochrome-photos' color='white' size={25}/>
                </Left>
            <Body >
            <Title>Instagram</Title>
            </Body>
            <Right>
                
            </Right>
                </Header>
            <ScrollView style={{flex:1}}>
                {this.renderPhoto()}
            </ScrollView>
            </Container>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state.photoList);
    const photoList = _.map(state.photoList, (val, uid) => {
        return { ...val, uid };
    });

    console.log(photoList);

    return { photoList };
    //this.props = { ...this.props, ...returndarimapstatetoprops }
};
export default connect(mapStateToProps, { getPhotoList })(Timeline);