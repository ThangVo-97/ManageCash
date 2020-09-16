
import { StyleSheet, Dimensions } from 'react-native';

import Size from "../config/dimens";
import Color from "../config/color";

const widthScreen = Dimensions.get("screen").width;
const heightScreen = Dimensions.get("screen").height;

export default StyleSheet.create({
    container: {
        backgroundColor: "#000000FF",
      },
      Line: {
        height: 0.2,
        width: widthScreen,
        backgroundColor: "white",
      },
      inputType: {
        color: "white",
        width: widthScreen,
        marginLeft: 20,
        fontSize: Size.fontSizeMoney,
      },
      listHistory: {
        width: widthScreen,
        flex: 1,
      },
      sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: "bold",
        backgroundColor: "rgba(247,247,247,1.0)",
      },
      item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
    
      backgroudImcomeOutCome: {
        borderRadius: 5,
        padding: 10,
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Color.frameIncomeExpenseColor,
      },
      backgroudMoneyCurrent: {
        margin: 20,
        alignItems: "center",
        justifyContent: "center",
      },
      textCurrentStyle: {
        color: Color.blueTextColor,
        fontSize: Size.fontSizeCurrent,
      },
      textMoney: {
        color: Color.yellowTextColor,
        fontSize: Size.fontSizeMoney,
      },
      textImcome: {
        marginRight: 40,
        color: Color.blueTextColor,
        fontSize: Size.fontSizeIncomeExpense,
        marginLeft: 18,
      },
      textMoney2: {
        color: Color.yellowTextColor,
        fontSize: Size.fontSizeMoney2,
        marginLeft: 20,
      },
      percentHorizontal: {
        flexDirection: "row",
      },
      percentHorizontal1: {
        flexDirection: "row",
        // width:  widthScreen - 50,
      },
      progressBarStyle: {
        marginRight: 50,
      },
      currentUnitBackground: {
        backgroundColor: Color.frameCurrentColor,
        borderRadius: 10,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
      },
      textProgress: {
        fontSize: 30,
        color: Color.greenTextColor,
      },
      imageStyle: {
        resizeMode: "cover",
        width: widthScreen,
        height: heightScreen,
      },
      circleImage: {
        width: 60,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 40,
        margin: 20,
        backgroundColor: "grey",
      },
      textWhile: {
        fontSize: 20,
        color: "white",
        marginLeft: 10,
    
        marginRight: 20,
      },
      userNameText: {
        fontSize: 20,
        color: "white",
        marginLeft: 10,
        maxWidth: 150,
    
        marginRight: 20,
      },
      horizontalStyle: {
        flexDirection: "row",
        
        alignItems: "center",
      },
      horizontalStyleDateTime: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 22,
        height: 35,
        width: 120,
    
        backgroundColor: Color.frameMonthColor,
        borderRadius: 8,
        marginLeft: 10,
      },
})