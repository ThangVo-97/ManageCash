import * as React from 'react';
import {View, Text, Image, TextInput,TouchableHighlight, Modal,ImageBackground} from 'react-native';

import DatePicker from '@react-native-community/datetimepicker';
import MainBackGround from '../assets/background.jpg';
import styles from '../values/style';
import Color from '../values/color';
import Size from '../values/dimens';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import description from '../assets/description.png';
import Category from '../assets/category.png';
import {TouchableOpacity} from 'react-native-gesture-handler';

class AddPlusMoney extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDatePicker: false,
      IsShowDate: false,
      date: new Date(),
    };
  }
  
  showModalCategory=()=>{

  }
  render() {
    const onPressOK = () => {
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
      console.log('currentDate ' + dateChoose);
  
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
              keyboardType="numeric"></TextInput>
            <Text style={styles.AddPlusMoneyTextMoney}>$</Text>
          </View>
          <View style={{height: 1, backgroundColor: 'gray'}}></View>

          {/* Category */}
          {/* <View> */}
          

          <TouchableOpacity style={styles.horizontalStyle3} onPress={()=>
              this.setState({modalVisible: true})
            }>
            <Image source={Category} style={styles.iconCategory} />
            <Text
              style={styles.addMinusMoneyCategoryInputMoney}
              >Choose Type</Text>
               <MaterialIcons name="navigate-next" size={26} color={Color.placeholderTextColor} style={{flex:1}}/>
          </TouchableOpacity>
          {/* <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
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
                this.setState({modalVisible: false});
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal> */}
          {/* </View> */}
          <View style={{height: 1, backgroundColor: 'gray'}}></View>

          {/* Date */}
          <TouchableOpacity style={styles.horizontalStyle3}>
            <MaterialCommunityIcons
              name="calendar-month-outline"
              style={{flex: 1}}
              onPress={showPicker}
              size={Size.s80}
              color="#e0e0e0"
            />

            {this.state.IsShowDate ? (
              <Text style={styles.addPlusMoneyDateTextMoney}>
                {new Date(this.state.date).getDate()}/
                {new Date(this.state.date).getMonth()}/
                {new Date(this.state.date).getFullYear()}{' '}
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
            <Text style={{color: 'black', fontSize: Size.s80}}>OK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addPlusMoneyCancel}
            onPress={onPressCancel}>
            <Text style={{color: 'black', fontSize: Size.s80}}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default AddPlusMoney;
