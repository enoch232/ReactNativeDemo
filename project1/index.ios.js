/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';

// class project1 extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

// AppRegistry.registerComponent('project1', () => project1);

import React, { Component } from 'react';
import {AppRegistry, Text, View} from 'react-native';
import Display from './app/Display';
class project1 extends Component {
  render(){
    return(
      <View>
        <Display text="Hello">
        </Display>
      </View>

    );
  }
}
AppRegistry.registerComponent('project1', ()=> project1);
