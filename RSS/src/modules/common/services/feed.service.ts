import { RssData } from '@common/models/rss-data';
import * as rssParser from 'react-native-rss-parser';

export async function getFeed(sourceUrl: string): Promise<RssData[]> {
    const text = await fetch(sourceUrl).then(response => response.text());
    const data = await rssParser.parse(text);

    console.log(data.items);

    return data.items.map(item => ({
        url: item.id,
        title: item.title,
        description: item.description,
        publicationDate: new Date(item.published).getTime(),
        imageUrl: item.enclosures?.[0]?.url ?? ''
    }));
}

