import {StyleSheet, Text, View} from 'react-native';

const NewsCard = ({data}) => {
    let title =
        data.title.length > 60
            ? data.title.substring(0, 60) + '...'
            : data.title;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>
                {data.description.substring(0, 75) + '...'}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#000',
    },
});

export default NewsCard;
