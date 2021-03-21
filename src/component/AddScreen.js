import * as React from "react";
import { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ImageBackground } from "react-native";
import MainBackGround from "../assets/background.jpg";
import Ionicons from "react-native-vector-icons/Ionicons";
import AddPlusMoney from "./AddPlusMoney";
import Color from "../values/color";
import AddMinusMoney from "./AddMinusMoney";
import Accumulate from "./AddAccumulateMoney";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Size from "../values/dimens";
import Animated from 'react-native-reanimated'
import Sizes from "../values/dimens";
const Tab = createMaterialTopTabNavigator();

const screenSize = Dimensions.get('window')
const AddScreen = ({ navigation, route }) => {

  // const [colorFrame, setColorFrame] = useState('red')
  let name, colorFrame = 'blue';
  const { index } = route.params;
  // console.log('index minus ' + index)

  if (JSON.stringify(index) === '0') {
    name = "INCOME";
    colorFrame = '#217317';
  } else if (JSON.stringify(index) === '1') {
    name = "EXPENSE";
    colorFrame = '#9F031C'
  }
  return (

    <ImageBackground source={MainBackGround} style={styles.imageStyle}>
      <View style={styles.horizontalStyle2}>
        <Ionicons
          name="chevron-back"
          size={40}
          style={{margin:Sizes.h10}}
          onPress={() => navigation.navigate('Home')}
          color="white"
        />
        <View style={styles.containerheaderAddText}>
          <Text style={styles.headerAddText}>Add</Text>
        </View>

      </View>

      <Tab.Navigator
        tabBarOptions={{
          style: { backgroundColor: Color.frameTabColor, borderRadius: 50, },
          labelStyle: { color: 'white' },
          indicatorStyle: {
            position: "absolute",
            left: 0,
            bottom: 0,
            backgroundColor: colorFrame,
            borderRadius: Size.h100,
            right: Size.h100,
            height: Size.h100,
          },
        }}
        screenOptions={{
          style: { backgroundColor: 'white' },
        }}
        initialRouteName={name}
      >
        <Tab.Screen name="INCOME" component={AddPlusMoney} />
        <Tab.Screen name="EXPENSE" component={AddMinusMoney} />
      </Tab.Navigator>
    </ImageBackground>
  );

}

const styles = StyleSheet.create({
  
  headerAddText: {
    color: 'yellow',
    
    fontFamily: 'Uchen',
    fontSize: Size.s60,
   

  },
  containerheaderAddText:{
    flex: 5,
    justifyContent:'center',
    alignItems:'center',
  },
  horizontalStyle2: {
    flexDirection: "row",
    width: screenSize.width,
    alignItems: 'center',
    justifyContent:'center',
    
    marginBottom: Size.s80,
  },
  imageStyle: {
    resizeMode: "cover",
    width: screenSize.width,
    height: screenSize.height,
  },
})
export default AddScreen;
