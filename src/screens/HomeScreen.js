import React, {useEffect, useState} from 'react';

import {
    FlatList,
    ActivityIndicator,
    View,
    TouchableOpacity,
} from 'react-native';

import NewsCard from '../components/NewsCard';

const HomeScreen = ({navigation}) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const response = await fetch(
                'https://berita-indo-api.vercel.app/v1/voa',
            );
            const json = await response.json();
            json.data.map((news, index) => {
                news.title = news.title.replace(/(\r\n|\n|\r)/gm, '');
                news.id = index;
            });
            setData(json.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <View>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={data}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate('Detail', {item})
                                }>
                                <NewsCard data={item} />
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={item => item.id}
                />
            )}
        </View>
    );
};

export default HomeScreen;
