import { RssData } from '@common/models/rss-data';

export type RootStackParamList = {
    Feed: undefined,
    FeedItem: { item: RssData }
};
