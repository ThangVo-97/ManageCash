import * as React from 'react';
import {View, Text, Image, TextInput, Switch, ImageBackground,Dimensions} from 'react-native';

import DatePicker from '@react-native-community/datetimepicker';
import MainBackGround from '../assets/background.jpg';
import styles from '../values/style';
import Color from '../values/color';
import Size from '../values/dimens';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import description from '../assets/description.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
import Sizes from '../values/dimens';
const sizeWindow = Dimensions.get('window');

class AddPlusMoney extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showToDateDatePicker: false,

      showFromDateDatePicker: false,
      IsShowToDate: false,
      IsShowFromDate: false,
      toDate: new Date(),
      fromDate: new Date(),
      isEnabled: false,
    };
  }
   onPressOK = () => {
    this.props.navigation.navigate('Home');
  };
   onPressCancel = () => {
    this.props.navigation.navigate('Home');
  };
   showToDatePicker = () => {
    this.setState({
      showToDatePicker: true,
    });
  };
   OnPressShowToDate = (event, dateChoose) => {
    this.setState({
      toDate: dateChoose,
      showToDatePicker: false,
      IsShowToDate: true,
    });
  };

   showFromDatePicker = () => {
    this.setState({
      showFromDatePicker: true,
    });
  };
   OnPressShowFromDate = (event, dateChoose) => {
    this.setState({
      fromDate: dateChoose,
      showFromDatePicker: false,
      IsShowFromDate: true,
    });
  };
   toggleSwitch = (value) => {
    this.setState({isEnabled: value})
    
  }
  render() {
    
    return (
      <ImageBackground source={MainBackGround} style={styles.imageStyle}>
        
        <View style={{backgroundColor:'transparent', width: sizeWindow.width, 
        alignItems:'flex-end', justifyContent:'flex-end', height: Sizes.s100,
        paddingEnd:Sizes.s20
        
        }}>
        <Switch

        trackColor={{ false: "#B9B9B9", true: "#007236" }}
        thumbColor={this.state.isEnabled ? "#00FF00" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={this.toggleSwitch}
        value={this.state.isEnabled}
      />
</View>
        <View style={styles.addPlusMoneyBackground}>
        
          <View style={styles.horizontalStyle3}>
            <TextInput
              style={styles.AddPlusMoneyInputMoney}
              placeholder="0"
              placeholderTextColor={Color.yellowTextColor}
              keyboardType="numeric"></TextInput>
            <Text style={styles.AddPlusMoneyTextMoney}>$</Text>
          </View>
          <View style={{height: 1, backgroundColor: 'gray'}}></View>

          {/* Description */}
          <View style={styles.horizontalStyle3}>
            <Image source={description} style={styles.iconDescription} />
            <TextInput
              style={styles.addPlusMoneyDescriptionInputMoney}
              placeholder="Your goal"
              placeholderTextColor={Color.placeholderTextColor}></TextInput>
          </View>
          <View style={{height: 1, backgroundColor: 'gray'}}></View>
          {/* Date */}
          <TouchableOpacity style={styles.horizontalStyle3}>
            <MaterialCommunityIcons
              name="calendar-month-outline"
              style={{flex: 1}}
              onPress={this.showFromDatePicker}
              size={Size.s80}
              color="#e0e0e0"
            />

            {this.state.IsShowFromDate ? (
              <Text style={styles.addPlusMoneyDateTextMoney}>
                {new Date(this.state.fromDate).getDate()}/
                {new Date(this.state.fromDate).getMonth()}/
                {new Date(this.state.fromDate).getFullYear()}
              </Text>
            ) : (
              <Text style={styles.addPlusMoneyDateTextMoney}>From date</Text>
            )}

            <View>
              {this.state.showFromDatePicker && (
                <DatePicker
                  mode="date" //The enum of date, datetime and time
                  value={this.state.fromDate}
                  dateFormat="DD MM YYYY"
                  display="default"
                  onChange={this.OnPressShowFromDate}
                />
              )}
            </View>
          </TouchableOpacity>

          <View style={{height: 1, backgroundColor: 'gray'}}></View>
          {/* Date */}
          <TouchableOpacity style={styles.horizontalStyle3}>
            <MaterialCommunityIcons
              name="calendar-month-outline"
              style={{flex: 1}}
              onPress={this.showToDatePicker}
              size={Size.s80}
              color="#e0e0e0"
            />
            {this.state.IsShowToDate ? (
              <Text style={styles.addPlusMoneyDateTextMoney}>
                {new Date(this.state.toDate).getDate()}/
                {new Date(this.state.toDate).getMonth()}/
                {new Date(this.state.toDate).getFullYear()}{' '}
              </Text>
            ) : (
              <Text style={styles.addPlusMoneyDateTextMoney}>To date</Text>
            )}
            <View>
              {this.state.showToDatePicker && (
                <DatePicker
                  mode="date" //The enum of date, datetime and time
                  value={this.state.toDate}
                  minimumDate={this.state.fromDate}
                  dateFormat="DD MM YYYY"
                  display="default"
                  onChange={this.OnPressShowToDate}
                />
              )}
            </View>
          </TouchableOpacity>

          <View style={{height: 1, backgroundColor: 'gray'}}></View>
        </View>

        {/* Button */}
        <View style={styles.horizontalStyle4}>
          <TouchableOpacity style={styles.addPlusMoneyOK} onPress={this.onPressOK}>
            <Text style={{color: 'black', fontSize: Size.s80}}>OK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addPlusMoneyCancel}
            onPress={this.onPressCancel}>
            <Text style={{color: 'black', fontSize: Size.s80}}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default AddPlusMoney;
