import React, { FC } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list/index';
import { RssResources } from '@common/models/rss-resources';

type FeedDropDownProps = {
    onUrlChanged: (url: string) => void,
    style?: ViewStyle
}

const FeedDropDown: FC<FeedDropDownProps> = ({onUrlChanged, style}) => {
    const setSelected = (rssItemIndex: number) => {
        const item = RssResources[rssItemIndex];
        onUrlChanged(item.url);
    }

    return (
        <View style={style}>
            <SelectList
                setSelected={setSelected}
                data={RssResources}
                dropdownItemStyles={styles.dropDownItem}
                boxStyles={styles.boxStyle}
                search={false}
                dropdownStyles={styles.dropDown}
            />
        </View>
    );
}

const styles = StyleSheet.create<{
    dropDownItem: ViewStyle,
    boxStyle: ViewStyle,
    dropDown: ViewStyle
}>({
    dropDownItem: {},
    boxStyle: {
        borderColor: 'white',
        backgroundColor: 'mediumaquamarine',
    },
    dropDown: {
        alignSelf: 'center',
        width: '100%',
        position: 'absolute',
        backgroundColor: 'lightseagreen',
        zIndex: 1000,
        top: -10,
        borderColor: 'transparent'
    }
})

export default FeedDropDown;
