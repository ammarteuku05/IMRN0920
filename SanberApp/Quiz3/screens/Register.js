import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Register = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textWelcome}>Welcome</Text>
            <Text style={styles.textSignUp}>Sign up to continue</Text>
            <View style={styles.registerBox}>
                <Text style={styles.textName}>Name</Text>
                <Text style={styles.textName}></Text>
                <View style={styles.line} />
                <Text style={styles.textName1}>Email</Text>
                <Text style={styles.textName}></Text>
                <View style={styles.line} />
                <Text style={styles.textName1}>Phone Number</Text>
                <Text style={styles.textName}></Text>
                <View style={styles.line} />
                <Text style={styles.textName1}>Password</Text>
                <Text style={styles.textName}></Text>
                <View style={styles.line} />
                <TouchableOpacity style={styles.buttonSignUp} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttonSignUpText}>Sign Up</Text>
                </TouchableOpacity>
                <View style={styles.haveAccount}>
                    <Text style={styles.textAlready}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.textSignIn}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    contaner: {
        flex: 1
    },
    textWelcome: {
        fontSize: 30,
        color: '#0C0423',
        fontWeight: 'bold',
        textShadowColor: '#95a5a6',
        textShadowOffset: { width: -1, height: 3 },
        textShadowRadius: 10,
        position: 'absolute',
        top: 30,
        left: 15
    },
    textSignUp: {
        color: '#4D4D4D',
        position: 'absolute',
        fontSize: 12,
        top: 64,
        left: 15
    },
    registerBox: {
        width: 366,
        height: 536,
        alignSelf: 'center',
        marginTop: 100,
        borderRadius: 11,
        borderWidth: 1,
        paddingTop: 45,
        paddingLeft: 16
    },
    textName: {
        fontSize: 12,
        marginTop: 5,
        color: '#4D4D4D',
        marginBottom: 12,
    },
    line: {
        backgroundColor: '#E6EAEE',
        width: 318,
        height: 1,
        marginBottom: 31
    },
    textName1: {
        color: '#4D4D4D',
        marginBottom: 12,
    },
    buttonSignUp: {
        backgroundColor: '#F77866',
        width: 318,
        height: 50,
        borderRadius: 6,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 12
    },
    buttonSignUpText: {
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold'
    },
    haveAccount: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    textAlready: {
        color: '#4D4D4D',
        fontSize: 12
    },
    textSignIn: {
        fontSize: 12,
        color: '#F77866',
        fontWeight: 'bold'
    }
})
