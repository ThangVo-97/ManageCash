import * as React from "react";
import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Modal,
  Button,
  TouchableHighlight,
  Switch,
  TouchableWithoutFeedback,
  Dimensions,
  Alert,
  TouchableOpacityBase,
  
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo"
import MainBackGround from "../assets/background.jpg";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import nextIcon from "../assets/nextIcon.png";

import str from "../values/str";
import Sizes from "../values/dimens";
import vnLanguage from "../assets/vnLanguage.png";
import engLanguage from "../assets/engLanguage.png";
import { TextInput } from "react-native-gesture-handler";
class CategoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
      isShowModalLanguage: false,
      isShowModalCurrency: false,
      isShowModalRating: false,
      isShowModalReset: false,
      isShowModalFeedback: false,
    };
  }

  toggleSwitch = (value) => {
    this.setState({ isEnabled: value });
  };

  onPressLanguage = () => {
    this.setState({ isShowModalLanguage: true });
  };
  onPressModalLanguage = () => {
    this.setState({ isShowModalLanguage: false });
  };
  onPressCurrency = () => {
    this.setState({ isShowModalCurrency: true });
  };

  onPressRating = () => {
    this.setState({ isShowModalRating: true });
  };
  onPressReset = () => {
    this.setState({ isShowModalReset: true });
  };
  onPressFeedback = () => {
    this.setState({ isShowModalFeedback: true });
  };
  ChoseLanguageVN = () => { 
    this.setState({ isShowModalLanguage: false });
  };
  ChoseLanguageENG = () => {
    this.setState({ isShowModalLanguage: false });
  };
  ChoseCurrencyVN = () => { 
    this.setState({ isShowModalCurrency: false });
  };
  ChoseCurrencyENG = () => {
    this.setState({ isShowModalCurrency: false });
  };
  pressResetYes=()=>{
    this.setState({ isShowModalReset: false });
  }
  pressResetNo=()=>{
    this.setState({ isShowModalReset: false });
  }
  onPressFeedbackSend=()=>{
    this.setState({isShowModalFeedback:false})
  }
  onPressFeedbackCancel=()=>{
    this.setState({isShowModalFeedback:false})
  }
  render() {
  
    return (
      <ImageBackground source={MainBackGround} style={styles.imageStyle}>
        <ScrollView style={styles.container}>
          <Text style={styles.titleSetting}>{str.setting}</Text>
          {/* Language */}
             <Modal
              animationType="slide"
              transparent={true}
              statusBarTranslucent={true}
              visible={this.state.isShowModalLanguage}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
              <TouchableOpacity style={styles.containerModal} onPress={this.ChoseLanguageVN}>
                
              <View style={styles.centeredView}>
                <View style={styles.ContainerLanguage}>
                  <TouchableOpacity
                    style={styles.languageVietnameseContainer}
                    onPress={this.ChoseLanguageVN}
                  >
                    <Image source={vnLanguage} style={styles.vnImageLanguage} />
                    <Text style={styles.languageVietnamese}>Vietnamese</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.languageEnglishContainer}
                    onPress={this.ChoseLanguageENG}
                  >
                    <Image
                      source={engLanguage}
                      style={styles.engImageLanguage}
                    />
                    <Text style={styles.languageEnglish}>English</Text>
                  </TouchableOpacity>
                </View>
                
              </View>
              </TouchableOpacity>
            </Modal>
          <TouchableOpacity onPress={this.onPressLanguage}>
            <View style={styles.containerItem}>
              {/* <Image source={languageIcon} style={styles.iconStyle} /> */}
              
              <Entypo name="language" size={24} 
                      style={styles.iconStyle} color="white"/>
              <View style={styles.containerInsideItem}>
                <Text style={styles.title}>{str.language}</Text>
                <Text style={styles.decription}>{str.decriptionLanguage}</Text>
              </View>
              <Image source={nextIcon} style={{ flex: 0.5 }} />
            </View>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "#D7D7D7",
              opacity: 25,
              height: 0.1,
              width: widthScreen - Sizes.s80,
              alignSelf: "center",
            }}
          />

          {/* Currency */}
          <Modal
              animationType="slide"
              transparent={true}
              statusBarTranslucent={true}
              visible={this.state.isShowModalCurrency}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
              <TouchableOpacity style={styles.containerModal} onPress={this.ChoseCurrencyVN}>
                
              <View style={styles.centeredView}>
                <View style={styles.ContainerCurrency}>
                  <TouchableOpacity
                    style={styles.languageVietnameseContainer}
                    onPress={this.ChoseCurrencyVN}
                  >
                    <Image source={vnLanguage} style={{...styles.vnImageLanguage, marginRight:Sizes.s40}} />
                    <Text style={styles.languageVietnamese}>VND</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.languageEnglishContainer}
                    onPress={this.ChoseCurrencyENG}
                  >
                    <Image
                      source={engLanguage}
                      style={{...styles.engImageLanguage, marginRight:Sizes.s40}}
                    />
                    <Text style={styles.languageEnglish}>$</Text>
                  </TouchableOpacity>
                </View>
                
              </View>
              </TouchableOpacity>
            </Modal>
          <TouchableOpacity onPress={this.onPressCurrency}>
            <View style={styles.containerItem}>
              <MaterialCommunityIcons name="currency-usd" size={30}
              color="white" style={styles.iconStyle}/>
              <View style={styles.containerInsideItem}>
                <Text style={styles.title}>{str.currency}</Text>
                <Text style={styles.decription}>{str.decriptionCurrency}</Text>
              </View>
              <Image source={nextIcon} />
            </View>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "#D7D7D7",
              opacity: 25,
              height: 0.3,
              width: widthScreen - Sizes.s80,
              alignSelf: "center",
            }}
          />

          {/* Notification */}
          <TouchableOpacity onPress={this.toggleSwitch}>
            <View style={styles.containerItem}>
              {/* <Image source={notificationIcon} style={styles.iconStyle} /> */}
              <Ionicons name="notifications" size={24} color="white" style={styles.iconStyle}/>
              <View style={styles.containerInsideItem}>
                <Text style={styles.title}>{str.notification}</Text>
                <Text style={styles.decription}>
                  {str.descriptionNotification}
                </Text>
              </View>
              <View style={{ height: 20, width: 100 }}>
              <Switch
                trackColor={{ false: "#B9B9B9", true: "#007236" }}
                thumbColor={this.state.isEnabled ? "#00FF00" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={this.toggleSwitch}
                value={this.state.isEnabled}
              />
            </View>
            </View>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "#D7D7D7",
              opacity: 25,
              height: 0.3,
              width: widthScreen - Sizes.s80,
              alignSelf: "center",
            }}
          />

          {/* Rating */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.isShowModalRating}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Hello World!</Text>

                <TouchableHighlight
                  style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                  onPress={() => {
                    this.setState({ isShowModalRating: false });
                  }}
                >
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
          <TouchableOpacity onPress={this.onPressRating}>
            <View style={styles.containerItem}>
              {/* <Image source={ratingIcon} style={styles.iconStyle} /> */}
              <FontAwesome name="star" size={24} color="white" style={styles.iconStyle}/>
              <View style={styles.containerInsideItem}>
                <Text style={styles.title}>{str.rating}</Text>
                <Text style={styles.decription}>{str.descriptionRating}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "#D7D7D7",
              opacity: 25,
              height: 0.3,
              width: widthScreen - Sizes.s80,
              alignSelf: "center",
            }}
          />

          {/* Feedback */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.isShowModalFeedback}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
             <TouchableOpacity style={styles.containerModal} 
              onPress={this.pressResetNo}
            >
            <View style={styles.centeredView}>
              <View style={styles.resetContainer}>
          <Text style={{fontSize:Sizes.h44, fontWeight:'400', justifyContent:'center'}}>{str.feedback}</Text>
                
                <TextInput
                multiline={true}
                placeholder={str.feedbackPlaceHolder}
                  style={{backgroundColor:"#FFFFFF", padding:Sizes.h30, borderRadius:Sizes.s60,}}
                />
                <View style={{flexDirection:'row', justifyContent:'center',}}>
                  
                <TouchableOpacity style={styles.feedbackCancel} onPress={this.onPressFeedbackSend}>
                  <Text style={styles.textYesAndNo}>{str.send}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.feedbackCancel} onPress={this.onPressFeedbackCancel}>
                  <Text style={styles.textYesAndNo}>{str.cancel}</Text>
                </TouchableOpacity>
                </View>
              </View>
            </View>
            </TouchableOpacity>
        </Modal>
          <TouchableOpacity onPress={this.onPressFeedback}>
            <View style={styles.containerItem}>
              {/* <Image source={feedbackIcon} style={styles.iconStyle} /> */}
              <MaterialIcons name="feedback" color="white" size={24} style={styles.iconStyle}/>
              <View style={styles.containerInsideItem}>
                <Text style={styles.title}>{str.feedback}</Text>
                <Text style={styles.decription}>{str.descriptionFeedback}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "#D7D7D7",
              opacity: 25,
              height: 0.3,
              width: widthScreen - Sizes.s80,
              alignSelf: "center",
            }}
          />

          {/* Update */}

          <TouchableOpacity
            onPress={() =>
              Alert.alert(
                "Update",
                "Connect admin to updating your application."
              )
            }
          >
            <View style={styles.containerItem}>
              {/* <Image source={updateIcon} style={styles.iconStyle} /> */}
              <MaterialIcons name="update" size={24} color="white" style={styles.iconStyle}/>
              <View style={styles.containerInsideItem}>
                <Text style={styles.title}>{str.update}</Text>
                <Text style={styles.decription}>{str.descriptionUpdate}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "#D7D7D7",
              opacity: 25,
              height: 0.2,
              width: widthScreen - Sizes.s80,
              alignSelf: "center",
            }}
          />

          {/* reset */}

          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.isShowModalReset}
          >
            <TouchableOpacity style={styles.containerModal} 
              onPress={this.pressResetNo}
            >
            <View style={styles.centeredView}>
              <View style={styles.resetContainer}>
                <Text style={styles.resetText}>{str.resetAnwser}</Text>
                
                <View style={{flexDirection:'row', justifyContent:'center',}}>
                <TouchableOpacity style={styles.resetYes} onPress={this.pressResetYes}>
                  <Text style={styles.textYesAndNo}>{str.yes}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.resetNo} onPress={this.pressResetNo}>
                  <Text style={styles.textYesAndNo}>{str.no}</Text>
                </TouchableOpacity>
                </View>
              </View>
            </View>
            </TouchableOpacity>
          </Modal>
          <TouchableOpacity onPress={this.onPressReset}>
            <View style={styles.containerItem}>
              {/* <Image source={resetIcon} style={styles.iconStyle} /> */}
              <MaterialIcons name="settings" color="white" size={24} style={styles.iconStyle} />
              <View style={styles.containerInsideItem}>
                <Text style={styles.title}>{str.reset}</Text>
                <Text style={styles.decription}>{str.descriptionReset}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "#D7D7D7",
              opacity: 25,
              height: 0.2,
              width: widthScreen - Sizes.s80,
              alignSelf: "center",
            }}
          />
        </ScrollView>
      </ImageBackground>
    );
  }
}

const widthScreen = Dimensions.get("screen").width;
const heightScreen = Dimensions.get("screen").height;
const styles = StyleSheet.create({
  titleSetting: {
    fontSize: Sizes.s90,
    color: "#FFF600",
    alignSelf: "center",
    margin: Sizes.s40,
    fontFamily: "Uchen",
  },
  resetContainer:{
    backgroundColor:'#e3f2fd',
    borderRadius:30,
    padding:Sizes.s60
  },
  resetText:{
    fontSize:Sizes.h44,
    color:'black',
    fontWeight:'400',
  },
  resetYes:{
      borderWidth:1,
      borderColor:'rgba(159, 155, 155, 0.56)',
      color:'black',
      padding:Sizes.h20,
      margin: Sizes.s40,
  },
  textYesAndNo:{
    color:'black',
    marginHorizontal:Sizes.s30,
     fontSize:Sizes.s40,
  },
  resetNo:{
    borderWidth:1,
      borderColor:'rgba(159, 155, 155, 0.56)',
      color:'black',
      padding:Sizes.h20,
      margin: Sizes.s40,
},
feedbackCancel:{
  borderWidth:1,
      borderColor:'rgba(159, 155, 155, 0.56)',
      color:'black',
      padding:Sizes.h20,
      margin: Sizes.s20,
},
  container: {
    flex: 1,
  },
  iconStyle: {
    width: Sizes.s50,
    height: Sizes.s50,
    resizeMode: "stretch"
  },
  containerItem: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: Sizes.h40,
    backgroundColor: "transparent",
  },
  containerInsideItem: {
    margin: Sizes.s10,
    marginRight: Sizes.s60,
    flex: 9,
  },
  title: {
    color: "white",
    margin: Sizes.h10,
    fontSize: Sizes.s40,
    fontFamily: "Rosarivo",
  },
  decription: {
    color: "#6BA1C9",
    margin: Sizes.h10,
    fontSize: Sizes.s20,
    fontFamily: "Trirong",
  },
  whiteText: {
    color: "#E3F2FD",
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    resizeMode: "cover",
    width: widthScreen,
    height: heightScreen,
  },
  containerModal:{
    position:'absolute',
    width:'100%',
    height: '100%',
    justifyContent:'center',
    backgroundColor:'rgba(0,0,0, 0.65)'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Sizes.s50,
  },
  ContainerCurrency:{
    backgroundColor: "rgba(7, 45, 73, 0.89)",
    borderRadius: 30,
    padding: Sizes.s30,
    paddingRight: Sizes.s200,
    justifyContent:'flex-start',
    alignItems:'flex-start'
  },
  ContainerLanguage: {
    backgroundColor: "rgba(7, 45, 73, 0.89)",
    borderRadius: 30,
    padding: Sizes.s30,
    justifyContent: "center",
  },
  vnImageLanguage: {
    margin: Sizes.h20,
  },
  engImageLanguage: {
    margin: Sizes.h20,
  },
  languageVietnamese: {
    fontSize: Sizes.s50,
    fontWeight: "400",
    color: "white",
  },
  languageVietnameseContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  languageEnglish: {
    fontSize: Sizes.s50,
    fontWeight: "400",
    color: "white",
  },
  languageEnglishContainer: {
    flexDirection: "row",
    alignItems: "center",
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
export default CategoryScreen;
