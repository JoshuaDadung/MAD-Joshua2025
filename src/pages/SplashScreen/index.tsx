import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const SplashScreen = () => {
  return (
    <>
    <View style={styles.container}>
        <Text>SplashScreen</Text>
    </View>
    </>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#02CF8E',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})