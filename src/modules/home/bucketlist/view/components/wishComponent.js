import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import React from "react";

const Wish = ({ wish }) => {
  return (
    <View style={styles.container}>
      <Text>{wish}</Text>
      <Ionicons name={"trash"} color={"red"} size={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    flexDirection:'row',
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  textStyle:{
    fontWeight:'bold',
    fontSize:40
  }
});
export default Wish;
