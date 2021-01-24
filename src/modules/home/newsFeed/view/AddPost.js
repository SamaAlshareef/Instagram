import { FlatList, Text, View } from 'react-native';
import React,{useEffect} from 'react';

import Post from './components/Post';
import {connect} from 'react-redux';
import {getPosts} from '../state/action/postsAction';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'First Item',
    uri:'https://icatcare.org/app/uploads/2018/06/Layer-1704-1920x840.jpg'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Second Item',
    uri:'https://miro.medium.com/max/640/1*BMwTY_NuBhZaLpNAg4XEgA.jpeg'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Third Item',
    uri:'https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697'
  },
];

const AddPost = ({getPosts}) => {
  useEffect(() => {
    getPosts();
  }, [])
  const renderItem = ({ item }) => (
    <Post accountName = {item.name} uri = {item.uri} />
  );

  return (  
    <Text>HELLOOOOO</Text>

  );
}

export default connect(postsReducer =>{
  return{
    posts: postsReducer.posts
  }
}, (dispatch) => {
  return {
    getPosts: () => {
      dispatch(getPosts());
    },
  };
})(AddPost);