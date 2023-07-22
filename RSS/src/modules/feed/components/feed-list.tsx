import React, { FC, useEffect, useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { getFeed } from '@common/services/feed.service';
import FeedItem from './feed-item';
import { RssData } from '@common/models/rss-data';

type FeedListProps = {
    sourceUrl: string,
    onItemPress?: (item: RssData) => void,
    filter: string
}

const FeedList: FC<FeedListProps> = ({sourceUrl, onItemPress, filter}) => {
    const [loadItems, setLoadItems] = useState<RssData[]>([]);
    const [items, setItems] = useState<RssData[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const filterItem = (item: RssData) => {
        if (filter == '') {
            return true;
        }

        if (item.title.trim().includes(filter)) {
            return true;
        }

        if (item.description.trim().includes(filter)) {
            return true;
        }

        return false;
    }

    const refresh = () => {
        setIsLoading(true);

        if (sourceUrl !== '') {
            getFeed(sourceUrl)
                .then(data => {
                    setLoadItems(data);
                    setIsLoading(false);
                });
        } else {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        setItems(loadItems.filter(filterItem));
    }, [filter, loadItems]);

    useEffect(refresh, [sourceUrl]);

    return (
        <FlatList
            data={items}
            refreshing={isLoading}
            refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refresh}/>}
            renderItem={({item}) => (
                <FeedItem item={item} onPress={onItemPress}/>
            )}
        />
    )
}

export default FeedList;
