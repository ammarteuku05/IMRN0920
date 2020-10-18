import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './Splash';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Register from './Register';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="Login"
                    component={Login} />
                    <Stack.Screen
                    name="Register"
                    component={Register}
                    />
                    <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default App

const styles = StyleSheet.create({})
