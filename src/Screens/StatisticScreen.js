import * as React from "react";
import { useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MainBackGround from "../assets/background.jpg";
import Size from "../values/dimens";
import StatisticMonth from '../Statistic/Month'
import StatisticWeek from '../Statistic/Week'
import StatisticYear from '../Statistic/Year'
import str from '../values/str'
import Sizes from "../values/dimens";

const Tab = createMaterialTopTabNavigator();
const CategoryScreen = () => {


  return (

    <ImageBackground source={MainBackGround} style={styles.imageStyle}>
      <Text style={styles.Title}>{str.statistic}</Text>

      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: '#010D19', borderRadius: 50,
            borderColor: 'rgba(250, 255, 0, 0.51)',
            borderWidth: 1,
          },
          labelStyle: { color: 'white', fontSize: Sizes.h34, fontWeight: '500' },

          indicatorStyle: {
            backgroundColor: '#0B4066',
            borderRadius: 50,
            borderColor: '#FFF600',
            height: Size.s100 + 3,
            width:Sizes.h18 * Sizes.h32 - 1,
          },

        }}
        
        initialRouteName={'Week'}
      >
        <Tab.Screen name="Week" component={StatisticWeek} />
        <Tab.Screen name="Month" component={StatisticMonth} />
        <Tab.Screen name="Year" component={StatisticYear} />
      </Tab.Navigator>
    </ImageBackground>

  )
}

const widthScreen = Dimensions.get("screen").width;
const heightScreen = Dimensions.get("screen").height;
const styles = StyleSheet.create({
  Title: {
    color: '#FFF600',
    fontSize: Sizes.s100,
    alignSelf: 'center',
    fontFamily: 'Uchen',
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#000000FF",
    flexDirection: "column",
  },
  whiteText: {
    color: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    resizeMode: "cover",
    width: widthScreen,
    height: heightScreen,
  },


  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});



export default CategoryScreen;