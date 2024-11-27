import React from "react";
import { Text } from "react-native";


const CustomText = (props) => {
  const { children, numberOfLines,onPress,style } = props;
  return (
    <Text
      onPress={onPress}
      style={style}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

export default CustomText;
