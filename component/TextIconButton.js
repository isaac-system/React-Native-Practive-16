import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { COLORS, FONTS } from "../constants";
const TextIconButton = ({
  containerStyle,
  label,
  labelStyle,
  icon,
  iconPosition,
  iconStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        ...containerStyle,
      }}
      onPress={onPress}
    >
      {iconPosition == "LEFT" && (
        <Image
          source={icon}
          style={{
            width: 20,
            height: 20,
            marginLeft: 5,
            tintColor: COLORS.black,
            ...iconStyle,
          }}
        />
      )}
      <Text
        style={{
          ...FONTS.body3,
          ...labelStyle,
        }}
      >
        {label}
      </Text>
      {iconPosition == null && (
        <Image
          source={icon}
          style={{
            width: 20,
            height: 20,
            marginLeft: 5,
            tintColor: COLORS.black,
            ...iconStyle,
          }}
        />
      )}
    </TouchableOpacity>
  );
};

export default TextIconButton;
