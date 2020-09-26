import * as React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
} from "react-native";
import MainBackGround from "../assets/background.jpg";
import styles from '../values/style'
import Ionicons from 'react-native-vector-icons/Ionicons'
import style from "../values/style";
import AddPlusMoney from './AddPlusMoney'
import Color from '../values/color'
import AddMinusMoney from './AddMinusMoney'
import Accumulate from './AddAccumulateMoney'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Size from '../values/dimens'
const Tab = createMaterialTopTabNavigator();

 const AddScreen = () => {

    return (
      
        <ImageBackground source={MainBackGround} style={styles.imageStyle}>
          <View style={styles.horizontalStyle2}>
            <Ionicons name="chevron-back" size={26} color='white' style={{flex:1}}/>
            <Text style={styles.headerAddText}>Add</Text>
          </View>

          <Tab.Navigator 
          tabBarOptions={{
            style:{backgroundColor:Color.frameTabColor, borderRadius: 50,},
            labelStyle:{color:'white'},
            indicatorStyle:{ 
            position: "absolute",
            left: 0,
            bottom: 0,
            backgroundColor:Color.frameTabColorIncome,
            borderRadius:Size.h100,
            right: Size.h100,
            height: Size.h100,
          },
           
          }}
          screenOptions={{
            style:{backgroundColor:'white'},
            
          }}
          >
            <Tab.Screen name="INCOME" component={AddPlusMoney} />
            <Tab.Screen name="EXPENSE" component={AddMinusMoney} />
            <Tab.Screen name="ACCUMULATE" component={Accumulate} />
            
          </Tab.Navigator>
        </ImageBackground>
     
    )}

export default AddScreen;