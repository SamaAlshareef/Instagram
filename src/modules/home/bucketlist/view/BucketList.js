import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, {useState} from "react";

import InputField from "../../../login/view/components/InputField";
import Ionicons from "react-native-vector-icons/Ionicons";

const width = Dimensions.get("window").width;

const initalBucket = {}


const BucketListScreen = () => {
  const [bucketList, setBucketList] = useState(initalBucket);

  renderItem = ({item}) =>{
    
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={{ flexDirection: "row", flex:0.2 }}>
        <InputField width={width - 100} />
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name={"add"} color={"white"} size={50} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={bucketList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
  },
  addButton: {
    width: 45,
    height: 45,
    borderRadius: 5,
    backgroundColor: "#E94057",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 3,
    marginLeft: 5,
  },
});
export default BucketListScreen;
