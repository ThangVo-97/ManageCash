import * as React from "react";
import {
  View, Text, Image, TextInput,
  SafeAreaView, ScrollView,
  ImageBackground, Modal
} from "react-native";

import DatePicker from "@react-native-community/datetimepicker";
import MainBackGround from "../assets/background.jpg";
import styles from "../values/style";
import Color from "../values/color";
import Size from "../values/dimens";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import description from "../assets/description.png";
import { addIncomeMoney } from "../services/StorageServices"
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


import Category from '../assets/category.png';
import foodIcon from '../assets/food.png';
import drinkIcon from '../assets/drink.png';
import entertaiIcon from '../assets/entertainment.png';
import houseIcon from '../assets/house.png';
import shoppingIcon from '../assets/shopping.png';
import transportIcon from '../assets/transport.png';
import newCategoryIcon from '../assets/category.png';
import healthIcon from '../assets/health.png'
import travelIcon from '../assets/travel.png'
import sportIcon from '../assets/sport.png'
import kidIcon from '../assets/kids.png'
import fitIcon from '../assets/fitness.png'
import partyIcon from '../assets/party.png'
import DropDownPicker from 'react-native-dropdown-picker';
import Sizes from "../values/dimens";
const currentDate = new Date();
const Categories = [
  { key: 1, name: 'Food', icon: foodIcon },
  { key: 3, name: 'Drink', icon: drinkIcon },
  {
    key: 2,
    name: 'Entertaiment',
    icon: entertaiIcon,
  },
  { key: 5, name: 'House', icon: houseIcon },
  { key: 6, name: 'Shopping', icon: shoppingIcon },
  { key: 4, name: 'Transport', icon: transportIcon },
  { key: 7, name: 'Heath', icon: healthIcon },
  { key: 8, name: 'Travel', icon: travelIcon },
]
class AddPlusMoney extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      IsShowDate: false,
      date: new Date(),
      money: '',
      type: "Salary",
      listIncomeMoney: [],
      modalVisible: false,
    };
  }

  handleAddMoney = (money, date, type) => {
    addIncomeMoney(money, date, type, "", "", "")

  }
  
  render() {
    const { date, money, type } = this.state;
    const currentDateTime = currentDate.getDate() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear()
    const choseDateFormat = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

    const onPressOK = () => {
      this.handleAddMoney(money, choseDateFormat, type);
      this.props.navigation.navigate('Home', {
        Money: money, 
        createDate: choseDateFormat, 
        Type: type,
      });
    };
    const onPressCancel = () => {
      this.props.navigation.navigate('Home');
    };
    const showPicker = () => {
      this.setState({
        showDatePicker: true,
      });
    };
    const OnPressShowDate = (event, dateChoose) => {
      this.setState({
        date: dateChoose,
        showDatePicker: false,
        IsShowDate: true,
      });
    };
    return (
      <ImageBackground source={MainBackGround} style={styles.imageStyle}>
        <View style={styles.addPlusMoneyBackground}>
          <View style={styles.horizontalStyle3}>
            <TextInput
              style={styles.AddPlusMoneyInputMoney}
              placeholder="0"
              placeholderTextColor={Color.yellowTextColor}
              keyboardType="numeric"
              onChangeText={value => this.setState({ money: value })}
            />
            <Text style={styles.AddPlusMoneyTextMoney}>$</Text>
          </View>
          <View style={{ height: 1, backgroundColor: "gray" }}></View>
{/* Type */}

          <View style={{height:80, flexDirection: "row",alignItems:'center', marginTop: 10}}>
            <Image source={Category} style={styles.iconCategory} />
            <DropDownPicker
              items={[
                { label: 'Home', value: 'Home', hidden: true},
                { label: 'Salary', value: 'Salary', hidden: true},
                { label: 'Sell', value: 'Sell' },
                { label: 'Other', value: 'Other' },
              ]}
              
              defaultValue={type}
              containerStyle={{ height: 30, width: 250 }}
              style={{ backgroundColor: 'gray' }}
              itemStyle={{
                justifyContent: 'flex-start',
                width: 100
              }}
              dropDownStyle={{ backgroundColor: 'gray' }}
              onChangeItem={(item) => this.setState({
                type: item.value,
              })}
            />
            
          </View>
          
          <View style={{ height: 1, backgroundColor: 'gray' }}></View>
          {/* Date */}
          <TouchableOpacity style={[styles.horizontalStyle3, {height: 80}]} onPress={showPicker}>
            <MaterialCommunityIcons
              name="calendar-month-outline"
              style={{ flex: 1 }}
              onPress={showPicker}
              size={Size.s80}
              color="#e0e0e0"
            />
            {this.state.IsShowDate ? (
              <Text style={styles.addPlusMoneyDateTextMoney}>
                {choseDateFormat}
              </Text>
            ) : (
                <Text style={styles.addPlusMoneyDateTextMoney}>
                  {currentDateTime}
                </Text>
              )}
            <View>
              {this.state.showDatePicker && (
                <DatePicker
                  mode="date" //The enum of date, datetime and time
                  value={this.state.date}
                  dateFormat="DD MM YYYY"
                  display="default"
                  onChange={OnPressShowDate}
                />
              )}
            </View>
          </TouchableOpacity>

          <View style={{ height: 1, backgroundColor: 'gray' , marginBottom: 20}}></View>

          
        </View>
        {/* Button */}
        <View style={styles.horizontalStyle4}>
          <TouchableOpacity style={styles.addPlusMoneyOK} onPress={onPressOK}>
            <Text style={{ color: "black", fontSize: Size.s80 }}>OK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addPlusMoneyCancel}
            onPress={onPressCancel}>
            <Text style={{ color: "black",fontSize:Sizes.s70,padding: Sizes.h10, paddingLeft: Sizes.h10, paddingRight: Sizes.h10 }}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default AddPlusMoney;
