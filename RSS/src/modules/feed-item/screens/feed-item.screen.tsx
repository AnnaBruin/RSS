import React, { FC, useEffect } from 'react';
import WebView from 'react-native-webview';
import { RssData } from '@common/models/rss-data';
import { useNavigation } from '@react-navigation/native';

export type FeedItemScreenProps = {
    route: {
        params: {
            item: RssData
        }
    }
}

const FeedItemScreen: FC<FeedItemScreenProps> = ({route}) => {
    const navigation = useNavigation();

    const item = route.params.item;

    useEffect(() => {
        navigation.setOptions({
            title: item.title
        });
    }, [navigation]);

    return (
        <WebView source={{uri: item.url}}/>
    );
}

export default FeedItemScreen;
