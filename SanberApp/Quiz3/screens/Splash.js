import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Splash = ({ navigation }) => {

    setTimeout(() => {
        navigation.replace('Register');
    }, 3000
    );
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ width: 305, height: 305, backgroundColor: '#211F65', opacity: 0.1, borderRadius: 1000 }} />
            <Image source={require('../../assets/sanber.png')} style={{ width: 223, height: 133, borderWidth: 2, position: 'absolute', top: 290 }} />
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({})
