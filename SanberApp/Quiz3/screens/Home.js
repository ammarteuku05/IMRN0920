import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchSetting}>  
                <View style={styles.searchBar}>
                    <Image source={require('../../assets/logo/search.png')} styles={styles.searchLogo}/>
                    <Text style={styles.textSearchBar}>Search Product</Text>
                    <View style={styles.line}/>
                    <Image source={require('../../assets/logo/camera.png')} style={styles.camera}/>
                </View>
                <Image source={require('../../assets/logo/lonceng.png')} style={styles.lonceng}></Image>
            </View>
            <Image source={require('../../assets/images/homeimage.png')} style={styles.homeImage}/>
            <View style={styles.category}>
                <View style={styles.categoryDetails}>
                    <Image source={require('../../assets/logo/man.png')} style={styles.logoCategory}/>
                    <Text style={styles.logoText}>Man</Text>
                </View>
                <View style={styles.categoryDetails}>
                    <Image source={require('../../assets/logo/woman.png')} style={styles.logoCategory}/>
                    <Text style={styles.logoText}>Woman</Text>
                </View>
                <View style={styles.categoryDetails}>
                    <Image source={require('../../assets/logo/kids.png')} style={styles.logoCategory}/>
                    <Text style={styles.logoText}>Kids</Text>
                </View>
                <View style={styles.categoryDetails}>
                    <Image source={require('../../assets/logo/home.png')} style={styles.logoCategory}/>
                    <Text style={styles.logoText}>Home</Text>
                </View>
                <View style={styles.categoryDetails}>
                    <Image source={require('../../assets/logo/more.png')} style={styles.logoCategory}/>
                    <Text style={styles.logoText}>More</Text>
                </View>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        alignContent:'center',
        marginTop:35
    },
    camera: {
        width:20, 
        height:16, 
        marginLeft:10
    },
    category: {
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    categoryDetails: {
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:14
    },
    homeImage: {
        width:365, 
        height:190, 
        borderRadius:7,
        marginTop:15,
        marginBottom:10
    },
    line:{
        height:16, 
        width:1, 
        backgroundColor:'#E6EAEE', 
        marginLeft:114, 
        marginRight:15
    },
    logoCategory: {
        width:52,
        height:52,
        // backgroundColor:'red'
    },
    logoText: {
        color: '#616D80',
        fontSize:15
    },
    lonceng: {
        width:17,
        height:20, 
        marginLeft:12
    },
    searchBar: {
        width:335,
        height:44,
        borderRadius:11,
        borderWidth:1,
        borderColor:'#727C8E', flexDirection:'row',
        alignItems:'center',
        paddingLeft:15
    },
    searchLogo: {
        width:16, 
        height:16
    },
    searchSetting: {
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    textSearchBar: {
        fontSize:15, 
        color:'#727C8E', 
        marginLeft:20
    }
})
