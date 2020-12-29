import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  I18nManager,
  FlatList,
  Modal,
  AsyncStorage,
  StyleSheet,
  TouchableHighlight,
  SectionList,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import ImagePicker from "react-native-image-picker";
import Color from "../values/color";
import MainBackGround from "../assets/background.jpg";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import ProgressCircle from "react-native-progress-circle";
import incomeIcon from "../assets/income.png";
import expenseIcon from '../assets/expense.png';

import DatePicker from "@react-native-community/datetimepicker";
import { Root } from "native-base";
import styles from "../values/style";
import Sizes from "../values/dimens";
import style from "../values/style";

import {getListHistory, } from '../services/StorageServices'

const AVATAR_KEY = "AVATAR"
const NAME_KEY = "NAME"
// import ImagePickerIOS from "@react-native-community/image-picker-ios";
// const Realm = require('realm');
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
      DateSearch: "",
      date: new Date(),
      incomeMoney: 5000000,
      expenseMoney: 1200000,
      show: false,
      avatarSource: '',
      name: '',
      history: [],
      isLoading: false,
      modalVisible: false,
    };
  }

  
   async componentDidMount() {
    AsyncStorage.multiGet([NAME_KEY, AVATAR_KEY]).then((value) => {
      
      this.setState({ 
      name:value[0][1],
      avatarSource: JSON.parse(value[1][1]),
     })
    }
    )

    
    this.fetchHistoryData()
  
  }
  fetchHistoryData = () => {
    this.setState({loading: true})

    getListHistory().then(history => {
        this.setState({
            loading: false,
            history,
        })
    }).catch(error => {
        console.error(error)

        this.setState({loading: false})
    })
  }
  render() {
    monthCurrent = new Date().getMonth() + 1;
    yearCurrent = new Date().getFullYear();
    currentMoney = this.state.incomeMoney - this.state.expenseMoney;
    this.state.date = new Date();
    // datetime picker

    const showPicker = () => {
      this.setState({
        show: true,
      });
    };
    const onChangeDate = (event, selectedDate) => {
      console.log("currentDate " + selectedDate);
      this.setState({
        date: selectedDate,
        show: false,
      });
      console.log("date " + this.state.date);
    };

    onPressButton = () => {
      this.setState({ visibility: true });
    };

    const options = {
      title: "Select Avatar",
      storageOptions: {
        skipBackup: true,
        customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
        path: "images",
      },
    };
    onClickAddImage = async () => {
      
ImagePicker.showImagePicker(options, (response) => {

  let source;
  if (response.didCancel) {
    console.log('User cancelled image picker');
  } else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  } else if (response.customButton) {
    console.log('User tapped custom button: ', response.customButton);
  } else {
    source = { uri: response.uri };

    // You can also display the image using data:
    // const source2 = { uri: 'data:image/jpeg;base64,' + response.data };

    this.setState({
      avatarSource: source.uri,
    });
    console.log('source ' + this.state.avatarSource)
    AsyncStorage.setItem(AVATAR_KEY, JSON.stringify(this.state.avatarSource));
    

  }
});
     
    };
    const plusMoneyPress = () => {
      this.props.navigation.navigate("AddScreen", { index: 0 });
    };
    const MinusMoneyPress = () => {
      this.props.navigation.navigate("AddScreen", { index: 1 });
    };
    return (
      <View style={styles.container}>
        <ImageBackground source={MainBackGround} style={styles.imageStyle}>
          <View style={styles.horizontalStyle}
          >
            <TouchableOpacity
              style={styles.circleImage}
              onPress={onClickAddImage}
            >
              
              <Image
              style={{
                width: Sizes.s160,
                height: Sizes.s160,
                borderRadius: Sizes.s80,
              }}
            source={{uri: this.state.avatarSource}}
             />
            </TouchableOpacity>

            <TextInput
              style={styles.userNameText}
              placeholderTextColor="white"
              maxLength={40}
              multiline={true}
              value={this.state.name}
              placeholder="Input your name"
              onChangeText={(value) => {
                AsyncStorage.setItem(NAME_KEY, value);
                this.setState({ name: value })
              }}
              placeholder={this.state.name}
            />

            <View style={styles.horizontalStyleDateTime}>
              <AntDesign name="calendar" size={24} color="white" />
              <Text style={styles.textWhile}>
                {monthCurrent} / {yearCurrent}
              </Text>
            </View>
          </View>

          {/* Current */}
          <View style={styles.currentUnitBackground}>
            <View style={styles.percentHorizontal1}>
              <View style={styles.progressBarStyle}>
                <ProgressCircle
                  percent={
                    (this.state.expenseMoney * 100) / this.state.incomeMoney
                  }
                  radius={60}
                  borderWidth={Sizes.h20}
                  color={Color.progressBarInColor}
                  shadowColor="#999"
                  width={100}
                  marginLeft={200}
                  bgColor={Color.progressBarOutColor}
                >
                  <Text style={styles.textProgress}>
                    {Math.round(
                      ((this.state.expenseMoney * 100) /
                        this.state.incomeMoney) *
                      100
                    ) / 100}
                    %
                  </Text>
                </ProgressCircle>
              </View>

              <View style={styles.backgroudMoneyCurrent}>
                <Text style={styles.textCurrentStyle}>Current</Text>
                <Text style={styles.textMoney}>{currentMoney} VND</Text>
              </View>
            </View>

            {/* income touch opacity */}
            <View style={styles.percentHorizontal}>
              <TouchableOpacity onPress={plusMoneyPress}>
                <View style={styles.backgroudImcomeOutCome}>
                  <View style={styles.percentHorizontal}>
                    <Text style={styles.textImcome}> Income</Text>
                    <AntDesign
                      marginLeft={30}
                      name="plus"
                      size={15}
                      color={Color.greenTextColor}
                    />
                  </View>
                  <Text style={styles.textMoney2}>
                    {this.state.incomeMoney} VND
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={MinusMoneyPress}>
                <View style={styles.backgroudImcomeOutCome}>
                  <View style={styles.percentHorizontal}>
                    <Text style={styles.textImcome}> Expense</Text>
                    <AntDesign
                      marginLeft={30}
                      name="minus"
                      size={15}
                      color={Color.redTextColor}
                    />
                  </View>
                  <Text style={styles.textMoney2}>
                    {this.state.expenseMoney} VND
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.Line} />
          {/* List History */}
          <View>
            <View style={[styles.horizontalStyle, {alignItems:'center'}]}>
              <Text style={styles.textWhile}>History</Text>

              <TouchableOpacity
                style={[styles.horizontalStyle, {marginLeft:Sizes.s20, alignItems:'center', marginTop:Sizes.s10}]}
                onPress={onPressButton}
              >
                <Ionicons
                  name="search"
                  size={20}
                  color="white"
                  onPress={showPicker}
                />

                <View>
                  {this.state.show && (
                    <DatePicker
                      mode="date" //The enum of date, datetime and time
                      value={this.state.date}
                      is24Hour={true}
                      // dateFormat="YYYY MM DD"
                      dateFormat="year day month"
                      display="default"
                      onChange={onChangeDate}
                    />
                  )}
                </View>
              </TouchableOpacity>
            </View>
          </View>
          
          <SectionList
            style={{marginBottom:Sizes.s100}}
            sections={this.state.history}
            renderSectionHeader={({ section: { dateCreate } }) => (
              <Text style={styles.titleListHistoryStyle}>{dateCreate}</Text>
            )}
            renderItem={({ item }) => (
              <View>
                <View style={styles.horizontalStyle}>

                  {/* income */}
                  <Image source={incomeIcon} style={styles.iconIncomeStyle} />
                  <View>
                    <Text style={styles.categoryListHistoryStyle}>
                      {item.typeIncomeMoney}
                    </Text>
                    <View style={styles.horizontalStyle}>
                      <AntDesign
                        marginLeft={30}
                        name="plus"
                        size={15}
                        style={style.iconIncomeStyle2}
                        color={Color.greenTextColor}
                      />
                      <Text style={styles.incomeListHistoryStyle}>
                        {item.incomeMoney}
                      </Text>
                    </View>
                  </View>
                </View>
                  {/* expense */}
                <View style={styles.horizontalStyle}>
                  <Image source={expenseIcon} style={styles.iconIncomeStyle} />
                  <View>
                    <Text style={styles.categoryListHistoryStyle}>
                      {item.typeExpenseMoney}
                    </Text>
                    <View style={styles.horizontalStyle}>
                      <AntDesign
                        marginLeft={30}
                        name="minus"
                        size={15}
                        style={style.iconIncomeStyle2}
                        color={Color.redTextColor}
                      />
                      <Text style={styles.expenseListHistoryStyle}>
                        {item.expenseMoney}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(id) => id}
          />
        </ImageBackground>
      </View>
    );
  }
}

const styless = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
export default HomeScreen;
