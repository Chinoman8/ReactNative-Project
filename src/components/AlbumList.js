import React, {Component} from 'react';
import {View, Text} from 'react-native';

class AlbumList extends Component{
    // Automatically will be executed as soon as component is going to be render to the screen
    componentWillMount(){
        fetch('http://rallycoding.herokuapp.com/api/music_albums')
        .then((response) => response.json())
        .then((responseData) => {
            console.log(responseData);
        });
    }


    render(){
        return(
            <View>
                <Text>Album List!</Text>
            </View>
        );
    }
}

export default AlbumList;