
import { StyleSheet, Dimensions } from 'react-native';

import Size from "../values/dimens";
import Color from "../values/color";
import Sizes from '../values/dimens';

const widthScreen = Dimensions.get("screen").width;
const heightScreen = Dimensions.get("screen").height;
const screenSize = Dimensions.get('window')
export default StyleSheet.create({
    container: {
        backgroundColor: "#000000FF",
      
      },
      Line: {
        height: 1,
        width: widthScreen,
        backgroundColor: "rgba(255, 255, 255, 0.17)",
        marginLeft:Sizes.s20,
        marginRight:Sizes.s20,
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
        
      },
      userNameText: {
        fontSize: Size.h40,
        color: "white",
        // backgroundColor:'red',
        alignSelf:'center',
        justifyContent:'center',
        marginRight: Sizes.s20,
        width:Sizes.s70*5,
      },
      horizontalStyle: {
        flexDirection: "row",
      },
      horizontalStyle3: {
        flexDirection: "row",
        justifyContent:'flex-start',
        alignItems:'center',
      },
      horizontalStyle4: {
        flexDirection: "row",
        justifyContent:'center',
        alignItems:'center',
      },
      headerAddText: {
        color: 'yellow',
        flex: 5,
        fontFamily: 'Uchen',
        fontSize: Size.s60,
        marginBottom: Size.s80,
    
      },
    
      horizontalStyle2: {
        flexDirection: "row",
        width: screenSize.width,
        alignItems: 'center',
      },
      imageStyle: {
        resizeMode: "cover",
        width: screenSize.width,
        height: screenSize.height,
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
        width: Size.s260,
        backgroundColor: Color.frameMonthColor,
        borderRadius: Size.h16,
      },

      //Add screen style
     
      addPlusMoneyBackground:{
        marginTop:Size.h100,
        borderRadius: Size.h30,
        padding:Size.h20,
        backgroundColor:Color.frameAddPlusMoney,
        margin:Size.h40
      },

      AddPlusMoneyTextMoney:{
        fontSize:Size.s70,
        flex: 1,
        color: Color.yellowTextColor,
      },
      AddPlusMoneyInputMoney:{
        flex: 5,
        color:'white',
        fontSize:Size.s80,
        color:Color.yellowTextColor,
        margin:Size.h10,
      },
      addPlusMoneyDateTextMoney:{
        flex: 6,
        fontSize:Size.s50,
        padding:Size.h10,
        margin:Size.h20,
        color:Color.placeholderTextColor
      },
      dateHistoryStyle:{
        color:Color.yellowTextColor,
        marginLeft: Size.h20,
        fontSize: Size.s40,
      },
      addPlusMoneyDescriptionInputMoney:{
        flex: 6,
        color:'white',
        color:Color.placeholderTextColor,
        fontSize:Size.s50,
        margin:Size.h10
      },
      addMinusMoneyCategoryInputMoney:{
        flex: 5,
        color:'white',
        color:Color.placeholderTextColor,
        fontSize:Size.s50,
        margin:Size.h30
      },

      iconDescription:{
        height:Size.s100,
        width:Size.s100,
        flex:1
      },
      iconCategory:{
        height:Size.s100,
        width:Size.s100,
        flex:1
      },
      
      iconCategory2:{
        height:Size.s100,
        width:Size.s100,
        flex:1
      },
      addPlusMoneyOK:{
        backgroundColor:'green',
        borderRadius:20,
        width:Size.s260,
        justifyContent:'center',
        alignItems:'center',
        margin:Size.h10,
        marginRight:Size.s60,
      },
      addPlusMoneyCancel:{
        backgroundColor: Color.redTextColor,
        borderRadius:20,
        width:Size.s260,
        marginLeft:Size.s60,
        margin:Size.h10,
        justifyContent:'center',
        alignItems:'center',
      },
})