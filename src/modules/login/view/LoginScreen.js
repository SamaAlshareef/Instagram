import {
  ActivityIndicator,
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

import InputField from "./components/InputField";
import Ionicons from "react-native-vector-icons/Ionicons";
import LargeButton from "./components/LargeButton";
import { connect } from "react-redux";
import { loginRequest } from "../state/action/loginActions";
import { primaryColor } from "../../../core/Colors";

const initialLoginForm = {
  username: "",
  password: "",
};

const LoginScreen = ({ navigation, loginRequest, error, loading }) => {
  const [loginForm, setLoginForm] = useState(initialLoginForm);

  const updateLoginForm = (name, value) => {
    console.log("Hello sama from ", name, " ", value);
    let newLoginForm = { ...loginForm };
    newLoginForm[name] = value;
    setLoginForm(newLoginForm);
  };

  const loginPressed = (loginForm) => {
    console.log("Login ", loginForm);
    loginRequest(loginForm);
    navigation.navigate("home");
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={{ flex: 0.2 }}>
        <Ionicons name={"logo-instagram"} size={100} color={'tomato'} />
      </View>

      <View style={styles.filedContainer}>
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
        {
          error?
          <Text style={{ color:'red'}}>Incorrect Credentials</Text>
          : null
        }
        <LargeButton
          title={"Login"}
          disabled={false}
          backgroundColor={'tomato'}
          borderColor={'tomato'}
          onPress={() => loginPressed(loginForm)}
        />
        {loading ? (
          <View style={styles.loaderStyle}>
            <ActivityIndicator size="large" color={primaryColor} />
          </View>
        ) : null}
      </View>
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
  filedContainer: {
    flex: 0.5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default connect(
  ({ loginReducer }) => {
    return {
      error: loginReducer.error,
      loading: loginReducer.loading,
    };
  },
  (dispatch) => {
    return {
      loginRequest: (data) => {
        dispatch(loginRequest(data));
      },
    };
  }
)(LoginScreen);
