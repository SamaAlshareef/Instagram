import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import InputField from "../../../login/view/components/InputField";
import Ionicons from "react-native-vector-icons/Ionicons";
import Wish from "./components/wishComponent";
import { primaryColor } from "../../../../core/Colors";

const width = Dimensions.get("window").width;

const BucketListScreen = ({ navigation }) => {
  const [bucketList, setBucketList] = useState([]);
  const [wish, setWish] = useState();
  const [press, setPress] = useState();

  useEffect(() => {
    let listStored = getMyObject();
    typeof listStored !== "object" ? setBucketList([listStored]) : null;
  }, []);

 

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("bucket_list", jsonValue);
    } catch (e) {
      console.log("ERROR stored data ", e);
    }
  };

  const getMyObject = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("bucket_list");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log("ERROR get object", e);
    }
  };

  const addWish = async (wish) => {
    let storedBucketList = await getMyObject();
    storedBucketList
      ? storeData(storedBucketList.concat(wish))
      : storeData(wish);
    setBucketList([...bucketList, wish]);
    setWish("");
  };

  const deleteItem = async(item)=>{
    let newList = bucketList.filter(function(e) { return e !== item });
    await setBucketList(newList);
    await storeData(bucketList);
  }

  const renderItem = ({ item }) => 
  <TouchableOpacity 
    onPress={() => deleteItem(item) } >
    <Wish wish={item} />
    </TouchableOpacity>

  return (
    <View style={styles.container}>
      
        <View style={{ flexDirection: "row", flex: 0.2, paddingTop: 10 }}>
          <InputField
            onChangeText={(text) => setWish(text.trim())}
            placeholder={"Add a Wish"}
            keyboardType={"default"}
            width={width - 100}
            value={wish}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => addWish(wish)}
          >
            <Ionicons name={"add"} color={"white"} size={50} />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 0.5 }}>
          <FlatList
            data={bucketList}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>

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
    backgroundColor: primaryColor,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 3,
    marginLeft: 5,
  },
  listStyle: {
    fontSize: 30,
    fontWeight: "800",
  },
});
export default BucketListScreen;
