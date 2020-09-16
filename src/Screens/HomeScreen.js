import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  FlatList,
} from 'react-native';
import styles from './style';
import {TouchableOpacity} from 'react-native-gesture-handler';

// import ImagePicker from 'react-native-image-picker';
import ImagePicker from 'react-native-image-picker';
import Color from '../config/color';
import MainBackGround from '../assets/background.jpg';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProgressCircle from 'react-native-progress-circle';

// import moment from 'moment'
// import DateTimePickerModal from "react-native-modal-datetime-picker";

import DatePicker from 'react-native-datepicker';
import {Root, ActionSheet} from 'native-base';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
      DateSearch: '',
      show: false,
      avatarSource: {},
      data: [
        {key: 'Devin'},
        {key: 'Dan'},
        {key: 'Dominic'},
        {key: 'Jackson'},
        {key: 'James'},

        {key: 'Dominic1'},
        {key: 'Jack2son'},
        {key: 'Jam3es'},
        {key: 'Dev3in'},
        {key: 'D4an'},
        {key: 'Dom4inic'},
        {key: 'Ja5ckson'},
        {key: 'Ja7mes'},
        {key: 'Dev6in'},
        {key: 'Da8n'},
        {key: 'Dom9inic'},
        {key: 'Jac9kson'},
        {key: 'Ja0mes'},
      ],
    };
  }

  render() {
    monthCurrent = new Date().getMonth() + 1;
    yearCurrent = new Date().getFullYear();

    const handleConfirm = (date) => {
      this.setState({DateSearch: date});
      // DateSearch: moment(date).format('MM YYYY')
    };
    const showPicker =()=> {
      this
    }
    onPressCancel = () => {
      this.setState({visibility: false});
    };

    onPressButton = () => {
      this.setState({visibility: true});
    };

    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    onClickAddImage = () => {
      ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const source = {uri: response.uri};

          // You can also display the image using data:
          // const source = { uri: 'data:image/jpeg;base64,' + response.data };

          this.setState({
            avatarSource: source,
          });
        }
      });
    };
    onTestPress = () => {
      onClickAddImage();
    };
    return (
      <View style={styles.container}>
        <ImageBackground source={MainBackGround} style={styles.imageStyle}>
          <View style={styles.horizontalStyle}>
            <Root style={styles.horizontalStyle}>
              <TouchableOpacity
                style={styles.circleImage}
                onPress={onTestPress}>
                <Image
                  source={this.state.avatarSource}
                  style={styles.circleImage}
                />

                {/* {this.state.avatarSource && (
                        <Image
                        source={{uri: this.state.avatarSource}}
                        style={styles.circleImage}
                        />  
                    )}*/}
              </TouchableOpacity>
            </Root>
            <TextInput
              style={styles.userNameText}
              placeholderTextColor="white"
              maxLength={40}
              multiline={true}
              placeholder="Input your name"
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
                  percent={30}
                  radius={60}
                  borderWidth={8}
                  color={Color.progressBarInColor}
                  shadowColor="#999"
                  width={100}
                  marginLeft={200}
                  bgColor={Color.progressBarOutColor}>
                  <Text style={styles.textProgress}>{'30%'}</Text>
                </ProgressCircle>
              </View>

              <View style={styles.backgroudMoneyCurrent}>
                <Text style={styles.textCurrentStyle}>Current</Text>
                <Text style={styles.textMoney}>2000000 VND</Text>
              </View>
            </View>

            <View style={styles.percentHorizontal}>
              <TouchableOpacity>
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
                  <Text style={styles.textMoney2}>3000000 VND</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
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
                  <Text style={styles.textMoney2}>1000000 VND</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* List History */}
          <View>
            <View style={styles.horizontalStyle}>
              <Text style={styles.textWhile}>History</Text>

              <TouchableOpacity
                style={styles.horizontalStyle}
                onPress={onPressButton}>
                <Ionicons name="search" size={20} color="white" onPress={showPicker}/>

                <View>
                  {this.state.show && (<DatePicker
                
                    mode="date" //The enum of date, datetime and time
                    format="DD-MM-YYYY"
                    date={this.state.DateSearch}
                    cancelBtnText="Cancel"
                    showIcon={false}
                    textColor= 'white'
                    confirmBtnText="Confirm"
                    style={{backgroundColor:'white'}}
                    customStyles={{
                      dateIcon: {
                        alignContent: 'center',
                        justifyContent: 'center',
                      },
                      dateInput: {
                        textColor: 'white',
                        alignContent: 'center',
                        justifyContent: 'center',
                        
                      },
                    }}
                    // iconSource={caretdown}
                    onDateChange={(date) => {
                      this.setState({DateSearch: date});
                    }}
                  />)}
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.Line}></View>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => (
              <Text style={styles.textWhile}>{item.key}</Text>
            )}
          />
        </ImageBackground>
      </View>
    );
  }
}
export default HomeScreen;
