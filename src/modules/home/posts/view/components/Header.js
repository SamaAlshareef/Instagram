import * as React from 'react';

import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native';

const width = Dimensions.get('window').width;

const Header = ({name, email, age}) => {
  return (
    <View style={styles.container}>
      <View style={{paddingTop:20}}>
        <Image
          style={styles.profilePic}
          source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYSu5D8riIS7aVn2UbNqxOS1k2MdaUO0mhIw&usqp=CAU'}}/>
       
       <View style={{paddingTop:10}}>
          <Text style={{fontWeight:'bold', fontSize:18}}>{name} </Text>
          <Text>{email} </Text>
          <Text>{`${age} years old`} </Text>
        </View> 
      </View>
      <View
        // style={{
        //   borderBottomColor: 'white',
        //   borderBottomWidth: 1,
        //   width
        // }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'flex-start',
    alignSelf:'flex-start',
  },
  profilePic : {
    width:100,
    height:100
  }
})
export default Header;