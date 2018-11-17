import React, {Component} from 'react';
import {ScrollView} from 'react-native';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component{
    state = { albums: [] };

    // Automatically will be executed as soon as component is going to be render to the screen
    componentWillMount(){
        fetch('http://rallycoding.herokuapp.com/api/music_albums')
        .then((response) => response.json())
        .then((data) => this.setState({albums: data}));
    }

    renderAlbums(){
        return this.state.albums.map(album => 
        <AlbumDetail key={album.title} album={album}/>
        );
    }

    render(){
        return(
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;