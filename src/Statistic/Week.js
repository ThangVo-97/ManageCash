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
      {x: 'Mo', y: 30},
      {x: 'Tu', y: 200},
      {x: 'We', y: 170},
      {x: 'Th', y: 250},
      {x: 'Fr', y: 10},
      {x: 'Sa', y: 30},
      {x: 'Su', y: 100},
    ]
    , color: '#56DC1E',},

    {seriesName: 'series2', data: [
      {x: 'Mo', y: 30},
      {x: 'Tu', y: 200},
      {x: 'We', y: 170},
      {x: 'Th', y: 250},
      {x: 'Fr', y: 10},
      {x: 'Sa', y: 300},
      {x: 'Su', y: 100},
      ]
      , color: '#B82A21'}
  ]
    return (
      <ImageBackground source={MainBackGround} style={styles.imageStyle}>
       
        <View style={styles.container}> 
            
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
    marginTop:Sizes.s170,
    marginTop: Sizes.s160,
    
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
