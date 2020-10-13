import React, { Component } from 'react'
import { Text, View } from 'react-native';
import Index from './Tugas/Tugas12';
import Youtube from './Tugas/Tugas12/App'

export default class App extends Component {
  render() {
    return (
      <View style={{ paddingTop: 20 }}>
        <Youtube />
        {<Index />}

      </View>
    )
  }
}

