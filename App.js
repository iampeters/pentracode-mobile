
import React, {Component} from 'react';
// Use prebuilt version of RNVI in dist folder
import Icon from 'react-native-vector-icons/dist/FontAwesome';

// Generate required css
import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: FontAwesome;
}`;

// import { Fonts } from './src/utils/Fonts';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Image,
  Alert
} from 'react-native';

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, Peters</Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'product_sans',

  },

});
