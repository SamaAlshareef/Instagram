import { Button, FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

import Header from "./components/Header";
import Post from "../../newsFeed/view/components/Post";
import { connect } from "react-redux";
import { getProfile } from "../state/action/profileActions";
import postsReducer from "../../newsFeed/state/reducer/postsReducer";
import profileReducer from "../state/reducer/profileReducer";

const posts = [
  {
    id: 1,
    place: "Siwa",
    uri:
      "https://www.cairotoptours.com/uploads/pages/slider/170df4c9d689dbeac1366000d02edb3e.jpg",
  },
  {
    id: 2,
    place: "Luxor",
    uri:
      "https://www.traveltoegypt.net/uploads/discover/categories/Luxor%20Attractions_232a7_lg.jpg",
  },
  {
    id: 3,
    place: "Marsa Alam",
    uri:
      "https://www.marsaalamonline.com/images/categories/thumbMd/15896540091aa6f3fdddfc16bfb67a571d1d857837.jpg",
  },
  {
    place: "Cairo",
    uri:
      "https://webneel.com/wallpaper/sites/default/files/images/08-2018/3-nature-wallpaper-mountain.jpg",
    id: 4,
  },
];

const ProfileScreen = ({ navigation, getMyProfile, profile }) => {
  useEffect(() => {
    getMyProfile();
    console.log("PROFILEEE ", profile);
  }, []);

  const renderItem = ({ item }) => (
    <Post accountName={profile.name} uri={item.uri} />
  );
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        {profile.name ? (
          <View style={{ flex: 0.4 }}>
            <Header
              name={profile.name}
              age={profile.age}
              email={profile.email}
            />
          </View>
        ) : (
          <Button
            title={"refresh"}
            style={{
              textAlign: "center",
              textAlignVertical: "center",
              color: "red",
            }}
            onPress={() => getMyProfile()}
          ></Button>
        )}

        <View style={{ flex: 0.6 }}>
          <Text style={styles.title}>My Posts</Text>
          <FlatList
            data={posts}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  profilePic: {
    width: 200,
    height: 200,
  },
  title: {
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
export default connect(
  (profileReducer) => {
    return {
      profile: profileReducer.profileReducer,
    };
  },
  (dispatch) => {
    return {
      getMyProfile: () => {
        dispatch(getProfile());
      },
    };
  }
)(ProfileScreen);
