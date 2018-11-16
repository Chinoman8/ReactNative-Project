import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header name="Yeeeeeeeeeeeeeeeeeeeet!"/> 
        <AlbumList/>
      </View>
    );
  }
}

// const App = () => {
//   return (
//     <Header name="Yeeet!"/>
//   );
// };

const styles = StyleSheet.create({
  
});
