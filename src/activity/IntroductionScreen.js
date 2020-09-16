import * as React from "react";
import Swiper from "react-native-swiper";
import { View, Image, Dimensions, StyleSheet, Text, StatusBar, Button, Alert } from "react-native";

import WelComeGif from "../assets/welcome.gif";
import Reason from "../assets/reason.gif";
import Target from "../assets/target.gif";
import { TouchableOpacity } from "react-native-gesture-handler";
import Color from '../config/color';

export default class IntroductionScreen extends React.Component {
  componentDidMount(){
    StatusBar.setHidden(true, 'none');
  }
  
  render() {
    const { navigation } = this.props;

    return (
      
      <Swiper
        style={styles.swapper}
        showsButtons
        loop={false}
        
        showsButtons={false}
        activeDotColor="black"
        pagingEnabled={true}
      >
        
        {/* Target screen */}
        <View testID="Target" style={styles.containerTarget}>
          
          <Image style={styles.gifTarget} source={Target} />
          <Text style={styles.appName}>Manage Cash</Text>
          <Text style={styles.contentTarget}>
            Choose your style, own your life
          </Text>
        </View>

        {/* Reason screen */}
        <View testID="Reason" style={styles.containerReason}>
          <Image style={styles.gifReason} source={Reason} />
          <Text style={styles.contentReason}>
            Plan your expenses and
            {"\n"} save money to make your dream come true
          </Text>
        </View>

        {/* welcome Screen */}
        <View testID="Welcome" style={styles.containerWelome}>
          <Image style={styles.gifWelcome} source={WelComeGif} />

          <Text style={styles.contentWelcome}>
            Enjoy life and be free in your financial
          </Text>
          <View  style={styles.continueContainer}>
            <TouchableOpacity 
            style={styles.continueButton}
            
            onPress={() => navigation.navigate("Home")}
            
            >
              <Text style={styles.continueText}>continue</Text>
              </TouchableOpacity>
          </View>
        </View>
      </Swiper>
    );
  }
}
const widthScreen = Dimensions.get("screen").width;
const styles = StyleSheet.create({
  swapper: {},

  continueText:{
      fontWeight:'bold',
      
      fontSize:20,
      fontStyle:'italic',
      color: 'orange',

  },
  // welcome screen
  continueButton:{
    marginLeft: 10,
    backgroundColor: Color.continueButtonColor,
    borderRadius:10,
    height:55,
    width:150,
    alignItems:'center',
    justifyContent:'center',

  },
  continueContainer:{
    marginLeft:200,
    fontSize: 20,
    flex:1,
    marginTop:80,
    backgroundColor:Color.continueContainerColor,
  },
  containerWelome: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.continueContainerColor,
  },
  gifWelcome: {
    marginTop: 60,
    width: widthScreen,
    height: 300,
  },
 
  contentWelcome: {
    flex: 1,
    textAlign: 'center',
    marginTop: 60,
    color: Color.contentWelcomeColor,
    fontSize: 25,
  },

  // target screen
 
  gifTarget: {
    marginTop: 60,
    width: widthScreen,
    height: 300,
  },
 
  contentTarget: {
    flex: 1,
    marginTop: 60,
    margin: 20,
    color: Color.contentTargetColor,
    alignItems: "center",
    fontSize: 25,
    marginTop: 40,
    textAlign: "center",
  },
   appName: {
    color: Color.appNameColor,
    fontWeight: "bold",
    marginTop: 30,
    fontSize: 30,
  },
  containerTarget: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.containerTargetColor,
  },

  
  // reason screen
  gifReason: {
    marginTop: 60,
    width: widthScreen,
    height: 300,
  },
  contentReason: {
    flex: 1,
    marginTop: 60,
    margin: 20,
    color: Color.contentReasonColor,
    alignItems: "center",
    fontSize: 25,
    textAlign: "center",
  },
  containerReason: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.containerReasonColor,
  },

});
