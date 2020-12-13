import React from 'react'
import {
    Text,
    Dimensions,
    ImageBackground,
    StyleSheet,
    View,
} from 'react-native'
import PureChart from 'react-native-pure-chart';
import MainBackGround from "../assets/background.jpg";
import Sizes from '../values/dimens';
export default function Week() {
    var data = [
        {seriesName: 'series1', data: [
            {x: '1', y: 20},
            {x: '2', y: 220},
            {x: '3', y: 120},
            {x: '4', y: 220},
            {x: '5', y: 12},
            {x: '6', y: 32},
            {x: '7', y: 120},
            {x: '8', y: 2},
            {x: '9', y: 220},
            {x: '10', y: 120},
            {x: '11', y: 250},
            {x: '12', y: 20},
        ]
        , color: '#56DC1E',},
    
        {seriesName: 'series2', data: [
            {x: '1', y: 30},
            {x: '2', y: 200},
            {x: '3', y: 170},
            {x: '4', y: 250},
            {x: '5', y: 10},
            {x: '6', y: 30},
            {x: '7', y: 100},
            {x: '8', y: 30},
            {x: '9', y: 200},
            {x: '10', y: 170},
            {x: '11', y: 250},
            {x: '12', y: 10},
          ]
          , color: '#B82A21'}
      ]
    return (
      <ImageBackground source={MainBackGround} style={styles.imageStyle}>
        <View style={styles.container}>  
        <View style={styles.containerDate}>
            <Text style={styles.textDate}>2020</Text> 
              </View> 
            <PureChart 
             data={data} type='bar' 
             backgroundColor='transparent'
             height={Sizes.s740}
             />
             </View>
         </ImageBackground>
    )
}

const widthScreen = Dimensions.get("screen").width;
const heightScreen = Dimensions.get("screen").height;
const styles = StyleSheet.create({
  container: {
    marginTop:Sizes.s80,
    
  },
  whiteText:{
    color: '#E3F2FD',
    justifyContent:'center',
    alignItems:'center'
  }, 
  containerDate:{
    borderRadius:50,
    padding: 10,
    backgroundColor:'#1D4C6F',
    width:Sizes.s170,
    alignItems:'center',
    alignSelf:'flex-end',
    
    
},
textDate:{
    color:'#FFFFFF',
    fontSize:Sizes.h34,
},
  imageStyle: {

    resizeMode: "cover",
    width: widthScreen,
    height: heightScreen,
  },
});
