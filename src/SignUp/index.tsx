// Name: Joshua Clyford Dadung
// Exercise 8 (SignUp)

import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';

const SignUp = () => {
  return (
    <View style={styles.pageContainer}>
      <Header title="Sign Up" />
      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.photoContainer}>
          <Image source={require('../assets/pic.png')} />
        </TouchableOpacity>
        <Gap height={85} />
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your Email Address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button label="Continue" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 0,
    flex: 1,
    paddingHorizontal: 24,
  },
  photoContainer: {
    width: 110,
    height: 100,
    borderRadius: 1,
    marginLeft: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
});