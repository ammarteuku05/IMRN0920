import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import YoutuUi from './Tugas/Tugas12/App';
import LoginScreen from './Tugas/Tugas13/LoginScreen';
import RegisterScreen from './Tugas/Tugas13/RegisterScreen';
import AboutScreen from './Tugas/Tugas13/AboutScreen';
import TugasNavigation from './Tugas/TugasNavigation/index;'
import Login from './Quiz3/Login';
import Register from './Quiz3/Register';
import Home from './Quiz3/HomeScreen';

import Note from './Tugas/Tugas14/App';
import SkillScreen from './Tugas/Tugas14/SkillScreen';


export default function App() {
  return (
    <View>
       {/* <YoutuUi/> 
 <AboutScreen/>
<LoginScreen/>
<RegisterScreen/> 
      <SkillScreen />
      <Note />
      <TugasNavigation/> */}
      <Login/>
      <Register/>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


