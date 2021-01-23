import { Dimensions, KeyboardAvoidingView, TextInput } from 'react-native';

import React from 'react';

const windowWidth = Dimensions.get('window').width;

const InputField = ({ placeholder, onChangeText, style, keyboardType, secureTextEntry, value , height, width, multiline, textVerticalAlign}) => {
	return (
		<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
			<TextInput
				placeholder={placeholder}
				onChangeText={onChangeText}
				style={
					{
						width:width? width: windowWidth - 32,
						height: height? height: 52,
						borderWidth: 2,
						fontSize: 16,
						borderColor: "#EFEFEF",
						borderRadius: 5,
						marginLeft: 5,
						textAlign: 'left',
						paddingLeft: 16,
						backgroundColor: 'white',
						textAlignVertical: textVerticalAlign ? textVerticalAlign :'center'
						
					}}
				keyboardType={keyboardType}
				secureTextEntry={secureTextEntry}
				value={value}
				multiline= {multiline}
			/>
		</KeyboardAvoidingView>
	)
}

export default InputField;