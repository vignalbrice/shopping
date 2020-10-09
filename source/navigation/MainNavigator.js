import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { stack, tabs } from './Router';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const StackNavigator = () => {
    return (
        <Stack.Navigator headerMode='none'>
            {stack.map(s =>
                <Stack.Screen component={s.components} key={s.key} />
            )}
        </Stack.Navigator>
    )
}

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            {tabs.map(t =>
                <Tab.Screen component={t.components} key={t.key} />
            )}
        </Tab.Navigator>
    )
}