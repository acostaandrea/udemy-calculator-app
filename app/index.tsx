import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global-styles.styles";
import ThemeText from "@/components/ThemeText";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <ThemeText variant="h1">50 x 50</ThemeText>
        <ThemeText variant="h2">2500</ThemeText>
      </View>
      <View>
        
      </View>
    </View>
  );
};

export default CalculatorApp;
