import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { addPost, getPosts } from "../state/action/postsAction";

import Post from "./components/Post";
import { connect } from "react-redux";

const DATA = [
  {
    name: "Sama Alshareef",
    uri: "https://icatcare.org/app/uploads/2018/06/Layer-1704-1920x840.jpg",
  },
  {
    name: "Sama Alshareef",
    uri: "https://miro.medium.com/max/640/1*BMwTY_NuBhZaLpNAg4XEgA.jpeg",
  },
  {
    name: "Sama Alshareef",
    uri: "https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697",
  },
];

const AddPost = ({ addPost, navigation }) => {
  const [post, addedPost] = useState("");

  const postAdded = () => {
    addPost(post);
    navigation.goBack();
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ backgroundColor: "blue" }}
      onPress={() => {
        addedPost(item);
      }}
    >
      <Post uri={item.uri} profilePic={true} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a post to Add</Text>
      <View style={{ flex: 0.9 }}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={{ flex: 0.1, opacity: post ? 1 : 0.5 }}>
        <Button title={"Add Post"} onPress={() => postAdded()}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    textAlignVertical: "top",
    fontSize: 18,
    fontWeight: "bold",
    flex: 0.1,
  },
  postStyle: {
    width: 250,
    height: 250,
  },
});

export default connect(
  (postsReducer) => {
    return {
      posts: postsReducer.postsReducer,
    };
  },
  (dispatch) => {
    return {
      getPosts: () => {
        dispatch(getPosts());
      },
      addPost: (post) => {
        dispatch(addPost(post));
      },
    };
  }
)(AddPost);
