import { Component } from "react";
import * as React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Image,
} from "react-native";

import AddScreen from "../Screens/AddScreen";
import CategoryScreen from "../Screens/CategoryScreen";
import HomeScreen from "../Screens/HomeScreen";
import SettingsScreen from "../Screens/SettingsScreen";
import StatisticScreen from "../Screens/StatisticScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomNavigator from "./index";

const Tab = createBottomTabNavigator();
export default class Home extends Component {
  constructor(props) {
    super();
    this.state = {
      categories: [
        { id: "1", name: "Món Gà" },
        { id: "2", name: "Món Heo" },
        { id: "3", name: "Món Bò" },
        { id: "4", name: "Món Cá" },
        { id: "5", name: "Món Chay" },
        { id: "6", name: "Món Tráng miệng" },
        { id: "7", name: "Món Ngon" },
        { id: "8", name: "Món Hay" },
        { id: "9", name: "Món Lạ" },
      ],
    };
  }
  render() {
    const { categories } = this.state;
    const { navigation } = this.props;
    return (
     // <BottomNavigator/>
      <View style={styles.container}>
        <Tab.Navigator 
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === "Home") {
                iconName = focused ? "ios-home" : "md-home";
              } else if (route.name === "Settings") {
                iconName = focused ? "md-settings" : "ios-settings";
              } else if (route.name === "Statistic") {
                
                iconName = focused ? "chart-bar" : "chart-bar";
               
                return (
                  <MaterialCommunityIcons
                    name={iconName}
                    size={24}
                    color={color}
                  />
                );
              } else if (route.name === "Add") {
                iconName = focused
                  ? "ios-add-circle"
                  : "ios-add-circle-outline";
              } else if (route.name === "Category") {
                iconName = focused ? "ios-list" : "ios-list";
              }
               return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
            style:{
              backgroundColor: '#051c2c',
            }
          }}
          
          backgroundColor='rgba(0,0,0,0.5)'

        >
          <Tab.Screen name="Home" component={HomeScreen}/>
          <Tab.Screen name="Category" component={CategoryScreen} />
          <Tab.Screen name="Add" component={AddScreen} />
          <Tab.Screen name="Statistic" component={StatisticScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: "yellow",
    justifyContent: "center",
  },
});
