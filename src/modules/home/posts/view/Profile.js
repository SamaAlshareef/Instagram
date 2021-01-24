import * as React from 'react';

import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';

import Header from './components/Header';

const ProfileScreen = ({navigation}) => {
 
  return (
    <View style={styles.container}>
      <Header name={'Sama'} age= {24} email={'samaelshareef@gmail.com'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  profilePic : {
    width:200,
    height:200
  }
})
export default ProfileScreen;