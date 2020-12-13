import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";

import * as React from "react";
import { StyleSheet,
  View,
  Text

} from "react-native";

import Home from './src/activity/Home';
import Color from "./src/values/color";

const Stack = createStackNavigator();
export default  App = () =>(
  
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} 
          options={{
            title: "Manage Cash",
            headerTintColor: Color.headerTitleColor,
            headerStyle:{
              backgroundColor: Color.headerBackgroudColor,
            },
            headerShown: false
          }}
            />
        </Stack.Navigator>
      </NavigationContainer>
)
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});

