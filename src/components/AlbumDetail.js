import React from 'react';
import { Image, Linking, Text, View } from 'react-native';

import Button from './Button';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ data }) => {

    const { 
        artist, 
        image,
        thumbnail_image, 
        title,
        url
    } = data;

    const { 
        imageStyle,
        textContainerStyle, 
        thumbnailContainerStyle, 
        thumbnailStyle,
        titleTextStyle
    } = styles;

    return (
        <Card>

            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image 
                        source={{ uri: thumbnail_image }} 
                        style={thumbnailStyle} 
                    />
                </View>
                <View style={textContainerStyle}>
                    <Text style={titleTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image 
                    source={{ uri: image }} 
                    style={imageStyle} 
                />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)} text="Buy on Amazon" />
            </CardSection>

        </Card>
    );

};

const styles = {
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    textContainerStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    titleTextStyle: {
        fontSize: 18
    },
    thumbnailContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    }
};

export default AlbumDetail;