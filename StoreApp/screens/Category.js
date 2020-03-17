import React from 'react';
import { StyleSheet, Text, View, Image, Button, onPress } from 'react-native';
import Iphone11 from '../assets/iphone_11.jpg'

export default class Categories extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>
          Iphone11
          </Text>
        <Image source={Iphone11} style={styles.categoryItem} />
        <Button
          title="Go to Details... again"
          onPress={() => navigation.popToTop('Categories')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  categoryItem: {
    width: 400,
    height: 400,
  }
})