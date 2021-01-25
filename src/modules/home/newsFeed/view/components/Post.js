import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import React from "react";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const Post = ({ accountName, uri, profilePic }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.profilePicContainer}>
          {
            !profilePic? <Image
            source={require("../../../../../../cat.png")}
            style={styles.profilePic}
          />
          :
          null
          }
         
          <Text> {accountName}</Text>
        </View>
        <Image source={{ uri: uri }} style={styles.imageContainer} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  profilePicContainer: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 10,
    paddingBottom: 10,
    paddingTop: 10,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 50 / 2,
  },
  imageContainer: {
    flex: 0.4,
    width: width,
    height: 300,
  },
});
export default Post;
