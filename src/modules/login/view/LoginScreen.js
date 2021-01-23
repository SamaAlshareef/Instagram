import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { black, mainColor, white } from "../../../core/Colors";

import InputField from "./components/InputField";
import LargeButton from "./components/LargeButton";
import {connect} from 'react-redux'
import {loginRequest} from '../state/action/loginActions';

;

const initialLoginForm = {
  username: '',
  password: ''
};

const LoginScreen = ({ navigation, loginRequest }) => {
 

  const [loginForm, setLoginForm] = useState(initialLoginForm);

  const updateLoginForm = ( name, value ) => {
    console.log("Hello sama from ", name, " ", value);
    let newLoginForm = { ...loginForm };
    newLoginForm[name] = value;
    setLoginForm(newLoginForm);
  };


  const loginPressed = (loginForm) =>{
    loginRequest(loginForm);
    navigation.navigate("home")
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      {/* <CompanyLogo/> */}
      <View style={{ paddingBottom: 20 }}>
        <View style={{ paddingBottom: 20 }}>
          <InputField
            onChangeText={(text) => updateLoginForm("username", text.trim())}
            placeholder={"Username"}
            keyboardType={"default"}
            secureTextEntry={false}
          />
        </View>
        <View style={{ paddingBottom: 10 }}>
          <InputField
            onChangeText={(text) => updateLoginForm("password", text.trim())}
            placeholder={"Password"}
            keyboardType={"default"}
            secureTextEntry={true}
          />
        </View>
      </View>

      {/* {loading ?
       <View style={styles.loaderStyle}>
         <ActivityIndicator size="large" color={mainColor} />
       </View>
       : */}
      <LargeButton
        title={"Login"}
        disabled={false}
        backgroundColor={black}
        borderColor={black}
        //  style={{ writingDirection: isRTL ? "rtl" : "ltr" }}
         onPress={() => loginPressed(loginForm)}
      />

      {/* } */}
      {/* </ScrollView> */}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    height: 152,
    width: 152,
    borderRadius: 152 / 2,
  },
});

export default connect(null,
  dispatch => {
    return {
      loginRequest: data => {
        dispatch(loginRequest(data));
      },
    };
  },
)(LoginScreen);
