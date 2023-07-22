import React, { FC } from 'react';
import { View } from 'react-native';
import FeedScreen from '../feed/screens/feed.screen';
import FeedItemScreen from '../feed-item/screens/feed-item.screen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
    return (
        <View style={{height: '100%', width: '100%'}}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="News" component={FeedScreen}/>
                    <Stack.Screen name="FeedItem" component={FeedItemScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
};
 
export default Navigation;
