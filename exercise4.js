import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Flexbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.boxContainer}>
          <View style={styles.blackBox}></View>
          <View style={styles.yellowBox}></View>
          <View style={styles.blackBox}></View>
        </View>
      </View>

      <View style={styles.centerContainer}>
        <Image 
          source={require('./assets/logounklab.png')} 
          style={styles.logo}
        />
      </View>

      <View style={styles.footer}>
        <View style={styles.blackBox}></View>
        <View style={styles.yellowBox}></View>
        <View style={styles.blackBox}></View>
      </View>
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'flex-start', 
  },
  boxContainer: {
    flexDirection: 'row',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'blue',
    padding: 10,
  },
  blackBox: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
    margin: 5,
  },
  yellowBox: {
    width: 50,
    height: 50,
    backgroundColor: 'yellow',
    margin: 5,
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 340,
    height: 100,
    resizeMode: 'contain',
  },
});
