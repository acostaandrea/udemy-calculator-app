import { View, Text } from "react-native";
import React from "react";
import { globalStyles } from "@/styles/global-styles.styles";
import ThemeText from "@/components/ThemeText";
import CalculatorButton from "@/components/CalculatorButton";
import { Colors } from "@/constants/Colors";
import { UseCalculator } from "@/hooks/UseCalculator";


const CalculatorApp = () => {

  const {formula,prevNumber, buildNumber, clean, toggleSign, deleteLast, divideOperation, substractOperation, addOperation, multiplyOperation, calculateSubResult, calculateResult} = UseCalculator();
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <ThemeText variant="h1">{formula}</ThemeText>
        {
          formula === prevNumber ? (
            <ThemeText variant="h2"> </ThemeText>
          ) : (
            <ThemeText variant="h2">{prevNumber}</ThemeText>
          )
        }
        
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton color={Colors.lightGray} label="C" blackText onPress={clean}/>
        <CalculatorButton color={Colors.lightGray} label="+/-" blackText onPress={toggleSign}/>
        <CalculatorButton color={Colors.lightGray} label="del" blackText onPress={deleteLast}/>
        <CalculatorButton color={Colors.orange} label="÷" onPress={divideOperation}/>
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="7" onPress={()=> buildNumber('7')}/>
        <CalculatorButton label="8"  onPress={()=> buildNumber('8')}/>
        <CalculatorButton label="9" onPress={()=> buildNumber('9')}/>
        <CalculatorButton color={Colors.orange} label="x" onPress={multiplyOperation}/>
      </View>     
      <View style={globalStyles.row}>
        <CalculatorButton label="4" onPress={()=> buildNumber('4')}/>
        <CalculatorButton label="5"  onPress={()=> buildNumber('5')}/>
        <CalculatorButton label="6" onPress={()=> buildNumber('6')}/>
        <CalculatorButton color={Colors.orange} label="-" onPress={substractOperation}/>
      </View>     
      <View style={globalStyles.row}>
        <CalculatorButton label="1" onPress={()=> buildNumber('1')}/>
        <CalculatorButton label="2"  onPress={()=> buildNumber('2')}/>
        <CalculatorButton label="3" onPress={()=> buildNumber('3')}/>
        <CalculatorButton color={Colors.orange} label="+" onPress={addOperation}/>
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton doubleSize label="0" onPress={()=> buildNumber('0')}/>
        <CalculatorButton label="."  onPress={()=> buildNumber('.')}/>        
        <CalculatorButton color={Colors.orange} label="=" onPress={calculateResult}/>
      </View>
     
    </View>
  );
};

export default CalculatorApp;
