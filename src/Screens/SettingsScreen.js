import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import MainBackGround from "../assets/background.jpg";


 const CategoryScreen = () => {

    return (
      
        <ImageBackground source={MainBackGround} style={styles.imageStyle}>
          <View>
            <Text style={styles.whiteText}> SettingsScreen  </Text>
          </View>
        </ImageBackground>
     
    )}

const widthScreen = Dimensions.get("screen").width;
const heightScreen = Dimensions.get("screen").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#000000FF",
    flexDirection: "column",
  },
  whiteText:{
    color: '#E3F2FD',
    justifyContent:'center',
    alignItems:'center'
  },
  imageStyle: {
    resizeMode: "cover",
    width: widthScreen,
    height: heightScreen,
  },
});



export default CategoryScreen;