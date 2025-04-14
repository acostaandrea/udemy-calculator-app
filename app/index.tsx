import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global-styles.styles";
import ThemeText from "@/components/ThemeText";
import CalculatorButton from "@/components/CalculatorButton";
import { Colors } from "@/constants/Colors";


const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <ThemeText variant="h1">50 x 50</ThemeText>
        <ThemeText variant="h2">2500</ThemeText>
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton color={Colors.lightGray} label="C" blackText onPress={()=> console.log('C')}/>
        <CalculatorButton color={Colors.lightGray} label="+/-" blackText onPress={()=> console.log('C')}/>
        <CalculatorButton color={Colors.lightGray} label="del" blackText onPress={()=> console.log('C')}/>
        <CalculatorButton color={Colors.orange} label="÷" onPress={()=> console.log('÷')}/>
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="7" onPress={()=> console.log('C')}/>
        <CalculatorButton label="8"  onPress={()=> console.log('C')}/>
        <CalculatorButton label="9" onPress={()=> console.log('C')}/>
        <CalculatorButton color={Colors.orange} label="x" onPress={()=> console.log('C')}/>
      </View>     
      <View style={globalStyles.row}>
        <CalculatorButton label="4" onPress={()=> console.log('C')}/>
        <CalculatorButton label="5"  onPress={()=> console.log('C')}/>
        <CalculatorButton label="6" onPress={()=> console.log('C')}/>
        <CalculatorButton color={Colors.orange} label="-" onPress={()=> console.log('C')}/>
      </View>     
      <View style={globalStyles.row}>
        <CalculatorButton label="1" onPress={()=> console.log('C')}/>
        <CalculatorButton label="2"  onPress={()=> console.log('C')}/>
        <CalculatorButton label="3" onPress={()=> console.log('C')}/>
        <CalculatorButton color={Colors.orange} label="+" onPress={()=> console.log('C')}/>
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton doubleSize label="0" onPress={()=> console.log('C')}/>
        <CalculatorButton label="."  onPress={()=> console.log('C')}/>        
        <CalculatorButton color={Colors.orange} label="=" onPress={()=> console.log('C')}/>
      </View>
     
    </View>
  );
};

export default CalculatorApp;
