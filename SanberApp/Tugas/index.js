import React from 'react'
import { Image, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-vector-icons/MaterialIcons';
const index = () => {
    return (
        <View style={StyleSheet.container}>
            <View style={StyleSheet.navbar}>
                <Image source={require('./Images/logo.png')} style={{ width: 98, height: 22 }} />
                <View style={StyleSheet.rightNav}>
                    <TouchableOpacity>
                        {/* <Icon name= "search" size={25}  style={StyleSheet.navItem}/> */}
                    </TouchableOpacity>
                    <TouchableOpacity>
                        {/* <Icon name= "account-circle" size={25}  style={StyleSheet.navItem}/> */}
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default index

const styles = StyleSheet.create({})
