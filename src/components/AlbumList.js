import React, { Component } from 'react';
import { Text, ScrollView, View } from 'react-native';

import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

    state = {
        albums: [],
        loaded: false
    };

    // afterRender/show
    async componentDidMount() {

        let newState;

        try {

            const response = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');

            newState = {
                albums: response.data,
                loaded: true
            };

        } catch (e) {

            newState = {
                loaded: true
            };

        }

        this.setState(newState);

    }

    render() {

        // If the albums length is 0 and loaded is false - albums are loading
        if (this.state.albums.length == 0 && !this.state.loaded) {

            return (
                <View>
                    <Text>Loading Albums...</Text>
                </View>
            );

        // If the albums length is 0 and loaded is true - there were no albums found
        } else if (this.state.albums.length == 0 && this.state.loaded) {

            return (
                <View>
                    <Text>No Albums Found</Text>
                </View>
            );

        }

        // Otherwise albums were loaded
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );

    }

    renderAlbums() {

        return this.state.albums.map(album => <AlbumDetail data={album} key={album.title} />);

    }

}

export default AlbumList;