import React, { useEffect, useState } from 'react';
import FeedDropDown from '../components/feed-drop-down';
import { StyleSheet, View } from 'react-native';
import FeedList from '../components/feed-list';
import { useNavigation } from '@react-navigation/native';
import { RssData } from '@common/models/rss-data';
import SearchBar from '../components/search-bar';

const FeedScreen = () => {
    const [url, setUrl] = useState('');
    const [filter, setFilter] = useState('');

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => <SearchBar onFilterChanged={setFilter}/>
        })
    }, [navigation]);

    const onItemPress = (item: RssData) => {
        navigation.navigate('FeedItem', {item});
    };

    return (
        <View style={styles.container}>
            <FeedDropDown onUrlChanged={setUrl}/>
            <FeedList filter={filter} sourceUrl={url} onItemPress={onItemPress}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingHorizontal: 15,
        paddingBottom: 50
    }
})

export default FeedScreen;
