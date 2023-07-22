import React, { FC } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RssData } from '@common/models/rss-data';

type FeedItemProps = {
    item: RssData,
    onPress?: (data: RssData) => void
}

const FeedItem: FC<FeedItemProps> = ({item, onPress}) => {
    const formatDigits = (num: number) => {
        return num < 10 ? '0' + num : num;
    }

    const formatDate = (ms: number) => {
        const date = new Date(ms);
        const min = formatDigits(date.getMinutes());
        const hours = date.getHours();
        const day = formatDigits(date.getDate());
        const month = formatDigits(date.getMonth()+1);
        const year = date.getFullYear();
        return `${hours}:${min}  ${day}/${month}/${year}`
    }

    return (
        <TouchableOpacity onPress={() => onPress?.(item)}>
            <View style={styles.container}>
                <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                <View style={styles.descriptionContainer}>
                    {item.imageUrl !== '' &&
                        <Image
                            style={styles.itemImage}
                            source={{uri: item.imageUrl}}
                            resizeMode="stretch"/>
                    }
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
                        <Text style={styles.description} numberOfLines={4}>{item.description}</Text>
                        <Text style={styles.pubDate}>{formatDate(item.publicationDate)}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        padding: 2,
        backgroundColor: '#ccffcc',
        marginVertical: 3
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingHorizontal: 5
    },
    descriptionContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },
    itemImage: {
        width: 150,
        height: 110,
        marginRight: 15,
        borderRadius: 5

    },
    description: {
        flex: 1,
        fontSize: 16,
        flexShrink: 1
    },
    pubDate: {
        textAlign: 'right',
        color: '#4f5d75'
    }
});

export default FeedItem;
