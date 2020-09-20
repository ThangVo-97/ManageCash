
import { StyleSheet, Dimensions } from 'react-native';

import Size from "../values/dimens";
import Color from "../values/color";

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
        marginLeft: Size.s40,
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
        borderRadius: Size.h10,
        padding: Size.h20,
        margin: Size.h20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Color.frameIncomeExpenseColor,
      },
      backgroudMoneyCurrent: {
        margin: Size.h40,
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
        marginRight: Size.h80,
        color: Color.blueTextColor,
        fontSize: Size.fontSizeIncomeExpense,
        marginLeft: Size.h36,
      },
      textMoney2: {
        color: Color.yellowTextColor,
        fontSize: Size.fontSizeMoney2,
        marginLeft: Size.h40,
      },
      percentHorizontal: {
        flexDirection: "row",
      },
      percentHorizontal1: {
        flexDirection: "row",
        // width:  widthScreen - 50,
      },
      progressBarStyle: {
        marginRight: Size.h100,
      },
      currentUnitBackground: {
        backgroundColor: Color.frameCurrentColor,
        borderRadius: Size.h20,
        padding: Size.h20,
        justifyContent: "center",
        alignItems: "center",
        margin: Size.h20,
      },
      textProgress: {
        fontSize: Size.s60,
        color: Color.greenTextColor,
      },
      imageStyle: {
        resizeMode: "cover",
        width: widthScreen,
        height: heightScreen,
      },
      circleImage: {
        width: Size.s160,
        height: Size.s160,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: Size.s80,
        margin: Size.s20,
        backgroundColor: "grey",
      },
      textWhile: {
        fontSize: Size.h40,
        color: "white",
        marginLeft: Size.h20,
    
        marginRight: Size.h40,
      },
      userNameText: {
        fontSize: Size.h40,
        color: "white",
        alignSelf:'center',
        justifyContent:'center',
        marginRight: Size.s160,
      },
      horizontalStyle: {
        flexDirection: "row",
        
      },
      iconIncomeStyle:{
        width:Size.h80,
        height:Size.h80,
        margin: Size.h16,
      },
      iconIncomeStyle2:{
        margin: Size.s10,
      },
      categoryListHistoryStyle:{
        color: Color.blueTextColor,
        fontSize:Size.fontSizeMoney,
        margin: Size.s2,
      },
      incomeListHistoryStyle:{
        color: Color.greenTextColor,
        fontSize:Size.fontSizeMoney2,
        margin: Size.s2,
      },
      expenseListHistoryStyle:{
        color: Color.redTextColor,
        fontSize:Size.fontSizeMoney2,
        margin: Size.s2,
      },
      titleListHistoryStyle:{
        color:Color.yellowTextColor,
        fontSize:Size.fontSizeMoney,
        margin:Size.s5,
      },
      horizontalStyleDateTime: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        height: Size.h80,
        width: Size.s240,
        backgroundColor: Color.frameMonthColor,
        borderRadius: Size.h16,
        marginLeft: Size.h10,
      },
})