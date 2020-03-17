import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Categories from './screens/Categories';
import Category from './screens/Category';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Categories">
                <Stack.Screen name="Categories" component={Categories}/>
                <Stack.Screen name="Category" component={Category}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default AppNavigator;