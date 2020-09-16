import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";

import * as React from "react";
import { StyleSheet

} from "react-native";


import Home from './src/activity/Home'
import ListFood from './src/component/ListFood'
import Category from './src/activity/Category'
import Introduction from './src/activity/IntroductionScreen'
import Color from './src/config/color'


const Stack = createStackNavigator();
export default  App = () =>(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="ListFood" component={ListFood} />
          <Stack.Screen name="Home" component={Home} 
          options={{
            title: "Manage Cash",
            headerTintColor: Color.headerTitleColor,
            headerStyle:{
              backgroundColor: Color.headerBackgroudColor,
            }
          }}
            
            />

          <Stack.Screen name="Category" component={Category} />
          <Stack.Screen
            name="Introduction"
            component={Introduction}
            options={{ headerShown: false }}
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
