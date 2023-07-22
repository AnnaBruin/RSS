import React, { FC, Ref, useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, TextInput } from 'react-native';
import { Icon } from '@rneui/themed';

interface ISearchBar {
    onFilterChanged: (filter: string) => void
}

const SearchBar: FC<ISearchBar> = ({onFilterChanged}) => {
    const [opened, setOpen] = useState(false);
    const [showIcon, setShowIcon] = useState(true);

    const [filter, setFilter] = useState('');

    const inputRef = useRef<TextInput>(null);

    const fadeAnimation = useRef(new Animated.Value(0));

    useEffect(() => {
        const to = opened ? 250 : 0;

        Animated.timing(fadeAnimation.current, {
            toValue: to,
            duration: 200,
            useNativeDriver: false
        }).start()

        if (!opened) {
            setTimeout(() => setShowIcon(true), 160);
        }

    }, [opened]);

    const onEndEditing = () => {
        if (filter === '') {
            setOpen(false);
        }
    }

    useEffect(() => {
        onFilterChanged?.(filter);
    }, [filter]);

    return (
        <>
            {
                showIcon
                    ?
                    <Icon name={'search'} onPress={() => {
                        setOpen(true);
                        setShowIcon(false);
                    }
                    }/>
                    :
                    <Animated.View style={{width: fadeAnimation.current}}>
                        <TextInput
                            autoFocus={true}
                            ref={inputRef as Ref<TextInput>}
                            style={styles.input}
                            onEndEditing={onEndEditing}
                            onChangeText={setFilter}>
                        </TextInput>
                    </Animated.View>
            }

        </>
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 15,
        width: '100%',
        backgroundColor: 'rgba(240, 240, 240, 100)'
    }
});

export default SearchBar;
