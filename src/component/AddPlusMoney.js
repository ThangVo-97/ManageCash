import * as React from "react";
import { View, Text, Image, TextInput, ImageBackground } from "react-native";

import DatePicker from "@react-native-community/datetimepicker";
import MainBackGround from "../assets/background.jpg";
import styles from "../values/style";
import Color from "../values/color";
import Size from "../values/dimens";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import description from "../assets/description.png";
import {getIncomeMoney, addIncomeMoney, addHistory} from "../services/StorageServices"
import { TouchableOpacity } from "react-native-gesture-handler";
import { Form } from "native-base";
class AddPlusMoney extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      IsShowDate: false,
      date: new Date(),
      money: '',
      type: '',
      listIncomeMoney: [],
    };
  }

  handleAddMoney=(money, date, type)=>{
    addIncomeMoney("12/29/2020", "100000", "Classic");
    addHistory("12/29/2020", "100000", "Classic", "200000", "Classic");
            // .then(listIncomeMoney => {
            //     this.setState({
            //       listIncomeMoney,
            //     })
            // })
  }
  render() {
    const {date, money, type} = this.state;
    const onPressOK = () => {
      this.handleAddMoney(money, date, type);
      this.props.navigation.navigate('Home');
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
              keyboardType="numeric" />
            <Text style={styles.AddPlusMoneyTextMoney}>$</Text>
          </View>
          <View style={{ height: 1, backgroundColor: "gray" }}></View>

          {/* Date */}
          <TouchableOpacity style={styles.horizontalStyle3}>
            <MaterialCommunityIcons
              name="calendar-month-outline"
              style={{ flex: 1 }}
              onPress={showPicker}
              size={Size.s80}
              color="#e0e0e0"
            />
            {this.state.IsShowDate ? (
              <Text style={styles.addPlusMoneyDateTextMoney}>
                {new Date(this.state.date).getDate()}/
                {new Date(this.state.date).getMonth()}/
                {new Date(this.state.date).getFullYear()}
              </Text>
            ) : (
              <Text style={styles.addPlusMoneyDateTextMoney}>Date</Text>
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

          <View style={{height: 1, backgroundColor: 'gray'}}></View>

          {/* Description */}
          <View style={styles.horizontalStyle3}>
            <Image source={description} style={styles.iconDescription} />
            <TextInput
              style={styles.addPlusMoneyDescriptionInputMoney}
              placeholder="Description"
              placeholderTextColor={Color.placeholderTextColor}></TextInput>
          </View>
          <View style={{height: 1, backgroundColor: 'gray'}}></View>
        </View>

        {/* Button */}
        <View style={styles.horizontalStyle4}>
          <TouchableOpacity style={styles.addPlusMoneyOK} onPress={onPressOK}>
            <Text style={{ color: "black", fontSize: Size.s80 }}>OK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addPlusMoneyCancel}
            onPress={onPressCancel}>
            <Text style={{ color: "black", fontSize: Size.s80 }}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default AddPlusMoney;
