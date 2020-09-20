import * as React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
} from "react-native";
import MainBackGround from "../assets/background.jpg";
import styles from '../values/style'

 const CategoryScreen = () => {

    return (
      
        <ImageBackground source={MainBackGround} style={styles.imageStyle}>
          <View>
            <Text style={styles.textWhile}> AddScreen </Text>
          </View>
        </ImageBackground>
     
    )}

export default CategoryScreen;