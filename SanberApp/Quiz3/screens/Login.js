import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textWelcome}>Welcome Back</Text>
            <Text style={styles.textSignUp}>Sign in to continue</Text>
            <View style={styles.registerBox}>
                <Text style={styles.textName}>Email</Text>
                <Text style={styles.textName}></Text>
                <View style={styles.line}/>
                <Text style={styles.textName}>Password</Text>
                <Text style={styles.textName}></Text>
                <View style={styles.line1}/>
                <Icon name='visibility' style={styles.eyeIcon}/>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
                <View style={styles.buttonSetting}>
                    <TouchableOpacity style={styles.buttonSignUp} onPress={()=> navigation.navigate('Home')}>
                        <Text style={styles.buttonSignUpText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.Or}>-OR-</Text>
                <View style={styles.footer}>
                    <View style={styles.sosmed}>
                        <Image source={require('../../assets/facebook.png')} style={{width:16, height:16}}/>
                        <Text style={styles.textSosmed}>Facebook</Text>
                    </View>
                    <View style={styles.sosmed1}>
                    <Image source={require('../../assets/google.png')} style={{width:16, height:16}}/>
                        <Text style={styles.textSosmed}>Google</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    textWelcome: {
        fontSize:30,
        color:'#0C0423',
        fontWeight: 'bold',
        position:'absolute',
        top:30,
        left:15
    },
    textSignUp: {
        color:'#4D4D4D',
        position:'absolute',
        fontSize:12,
        top:64,
        left:15
    },
    registerBox: {
        width:366,
        height:536,
        alignSelf:'center',
        marginTop:100,
        borderRadius:11,
        borderWidth:1,
        paddingTop:45,
        paddingLeft:16,
        paddingRight:16,
    },
    textName: {
        fontSize:12,
        marginTop:5,
        color: '#4D4D4D',
        marginBottom:12,
    },
    line: {
        backgroundColor: '#E6EAEE',
        width:318,
        height:1,
        marginBottom:31
    },
    line1: {
        backgroundColor: '#E6EAEE',
        width:318,
        height:1,
        marginBottom:20
    },
    eyeIcon: {
        width:15,
        height:15,
        position: 'absolute',
        top:145,
        right:40
    },
    forgotPassword: {
        fontSize:12,
        alignSelf:'flex-end',
        paddingRight:30
    },
    buttonSetting: {
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    buttonSignUp: {
        backgroundColor: '#F77866',
        width:318,
        height:50,
        borderRadius:6,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        marginTop:45,
    },
    buttonSignUpText: {
        fontSize:14,
        color:'white',
        fontWeight:'bold'
    },
    Or: {
        fontSize:15,
        color:'#4C475A',
        alignSelf:'center',
        marginTop:31,
        marginBottom:31
    },
    footer: {
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    sosmed: {
        width:149,
        height:44,
        borderRadius:6,
        borderWidth:2,
        borderColor: '#E6EAEE',
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    sosmed1: {
        width:149,
        marginLeft:20,
        height:44,
        borderRadius:6,
        borderWidth:2,
        borderColor: '#E6EAEE',
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    textSosmed: {
        fontSize:14,
        fontWeight:'bold',
        color:'#4D4D4D',
        paddingLeft:15.36
    }
})
