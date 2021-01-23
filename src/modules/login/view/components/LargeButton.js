import { Button } from 'react-native-elements';
import { Dimensions } from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;

const LargeButton = ({ title, backgroundColor, borderColor, disabled = false, loading = false, onPress }) => {
  return (
    <Button
      title={title}
      onPress={onPress}
      disabled={disabled}
      buttonStyle={{
        backgroundColor: backgroundColor,
        borderRadius: 5,
        height: 51,
        width: windowWidth - 32,
        borderWidth: disabled ? 0 : 2,
        borderColor: borderColor,

      }}
      loading={loading}
    />
  )
}

export default LargeButton;