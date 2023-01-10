import React from 'react';

import {
    Button,
    Dimensions,
    Image,
    StyleSheet,
    Text,
    Linking,
    ScrollView,
} from 'react-native';

import moment from 'moment/moment';
require('moment/locale/id');

const DetailScreen = ({route, navigation}) => {
    const {title, link, isoDate, description, image, id} = route.params.item;
    let date = moment(isoDate).locale('id');
    // const date = `${date.format('MMMM Do YYYY, h:mm:ss a')} (${date.fromNow()})`;
    console.log(image);
    return (
        <ScrollView style={styles.container}>
            <Image source={{uri: image.small}} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{`${date.format(
                'MMMM Do YYYY, h:mm:ss a',
            )} (${date.fromNow()})`}</Text>
            <Text style={styles.text}>
                {description.replace(/(\r\n|\n|\r)/gm, '')}
            </Text>
            <Button
                title="Buka di Browser"
                onPress={() => Linking.openURL(link)}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 20,
    },
    title: {
        fontSize: 24,
        color: '#000',
        fontWeight: 'bold',
    },
    date: {
        color: '#000',
        marginBottom: 10,
    },
    image: {
        width: Dimensions.get('window').width - 20,
        height: 300,
    },
    text: {
        textAlign: 'justify',
        color: '#000',
        fontSize: 18,
        marginBottom: 20,
    },
});

export default DetailScreen;
