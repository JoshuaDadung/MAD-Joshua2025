import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
  } from 'react-native';
  import React from 'react';
  import Input from './components/Input';
  import Button from './components/Button';
  import Title from './components/Title';
  
  const Signin = () => {
    return (
      <ScrollView style={styles.container}>
        <Title text="Welcome" />
        <Input label="Username" placeholder="Masukan username anda" />
        <Input label="Password" placeholder="Masukan password anda" />
        <Input label="Alamat" placeholder="Masukan alamat anda" />
        <Input label="No Tlp" placeholder="Masukan nomor tlpn anda" />
        <Button label="Sign In" />
        <Button label="Sign In with Google" color='red'/>
        <Button label="Sign In with Apple" color='black'/>
        <Button label="Sign In with Facebook" color='blue'/>
      </ScrollView>
    );
  };
  
  export default Signin;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: 25,
    },
    title: {
      fontSize: 40,
      color: 'black',
      fontWeight: '700',
      marginBottom: 20,
    },
  });