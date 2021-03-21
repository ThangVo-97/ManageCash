import * as React from 'react';
import { View, Text, Image, TextInput, TouchableHighlight, Modal, ImageBackground } from 'react-native';

import DatePicker from '@react-native-community/datetimepicker';
import MainBackGround from '../assets/background.jpg';
import styles from '../values/style';
import Color from '../values/color';
import Size from '../values/dimens';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import DropDownPicker from 'react-native-dropdown-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import description from '../assets/description.png';
import Category from '../assets/category.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { addIncomeMoney } from "../services/StorageServices"

const currentDate = new Date();
class AddPlusMoney extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDatePicker: false,
      IsShowDate: false,
      date: new Date(),
      money: '',
      type: 'Food',
      des: '',
    };
  }
  handleAddMoney = (money, date, type, des) => {
    addIncomeMoney("", date, "", money, des, type)
  }
  showModalCategory = () => {

  }
  render() {
    const { date, money, type, des } = this.state;

    const currentDateTime = currentDate.getDate() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getFullYear()
    const choseDateFormat = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    const onPressOK = () => {
      this.handleAddMoney(money, date, type, des);
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
              onChangeText={value => { this.setState({ money: value }) }}
              keyboardType="numeric"></TextInput>
            <Text style={styles.AddPlusMoneyTextMoney}>$</Text>
          </View>
          <View style={{ height: 1, backgroundColor: 'gray' }}></View>

          <View style={{ flexDirection: "row", marginTop: 10}}>
            <Image source={Category} style={styles.iconCategory} />
            <DropDownPicker
              items={[
                { label: 'Food', value: 'Food'},
                { label: 'Entertainment', value: 'Entertainment'},
                { label: 'Drink', value: 'Drink'},
                { label: 'Transport', value: 'Transport'},
                { label: 'Home', value: 'Home'},
                { label: 'Shopping', value: 'Shopping'},
                { label: 'Health', value: 'Health'},
                { label: 'Travel', value: 'Travel'},
                { label: 'Sport', value: 'Sport'},
                { label: 'Kids', value: 'Kids'},
                { label: 'Fitness', value: 'Fitness'},
                { label: 'Party', value: 'Party'},
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
              onChangeItem={item => this.setState({
                type: item.value
              })}
            />
          </View>
          <View style={{ height: 1, backgroundColor: 'gray' }}></View>

          {/* Date */}
          <TouchableOpacity style={styles.horizontalStyle3} onPress={showPicker}>
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
          <View style={{ height: 1, backgroundColor: 'gray' }}></View>
          {/* Description */}
          <View style={styles.horizontalStyle3}>
            <Image source={description} style={styles.iconDescription} />
            <TextInput
              style={styles.addPlusMoneyDescriptionInputMoney}
              placeholder="Description"
              onChangeText={value => this.setState({ money: value })}
              placeholderTextColor={Color.placeholderTextColor}></TextInput>
          </View>
          <View style={{ height: 1, backgroundColor: 'gray' }}></View>
        </View>

        {/* Button */}
        <View style={styles.horizontalStyle4}>
          <TouchableOpacity style={styles.addPlusMoneyOK} onPress={onPressOK}>
            <Text style={{ color: 'black', fontSize: Size.s80 }}>OK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addPlusMoneyCancel}
            onPress={onPressCancel}>
            <Text style={{ color: 'black', fontSize: Size.s80 }}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default AddPlusMoney;
