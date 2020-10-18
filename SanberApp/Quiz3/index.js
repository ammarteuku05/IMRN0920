import React from "react";
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Splash from '../screens/Splash';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Register from '../screens/Register';

const RootStack = createStackNavigator();
const RootStackScreen = () => (
    <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="Splash" component={Splash} />
        <RootStack.Screen name="Register" component={Register} />
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Home" component={Home} />
    </RootStack.Navigator>
);

export default class App extends React.Component {
    render() {
        return (
            <NavigationContainer>
                <RootStackScreen />
            </NavigationContainer>
        );
    }
}

