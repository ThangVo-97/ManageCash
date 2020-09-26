import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  FlatList,
  SectionList,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

// import ImagePicker from 'react-native-image-picker';
import ImagePicker from 'react-native-image-picker';
import Color from '../values/color';
import MainBackGround from '../assets/background.jpg';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProgressCircle from 'react-native-progress-circle';
import incomeIcon from '../assets/income.png';
import expenseIcon from '../assets/expense.png';
// import moment from 'moment'
// import DateTimePickerModal from "react-native-modal-datetime-picker";

import DatePicker from '@react-native-community/datetimepicker';
import {Root} from 'native-base';
import styles from '../values/style';
import Size from '../values/dimens'
import style from '../values/style';
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
      DateSearch: '',
      date: new Date(),
      incomeMoney: 5000000,
      expenseMoney: 1200000,
      show: false,
      avatarSource: {},
    };
  }

  render() {
    monthCurrent = new Date().getMonth() + 1;
    yearCurrent = new Date().getFullYear();
    currentMoney = this.state.incomeMoney - this.state.expenseMoney;
    this.state.date = new Date();

    var DATA = [
      {
        title: '20/9/2020',
        data: [
          {
            id: '1',
            income: '2000000',
            expense: '1000000',
            category: 'Classify',
          },
        ],
      },
      {
        title: '19/9/2020',
        data: [
          {
            id: '1',
            income: '2000000',
            expense: '1000000',
            category: 'Classify',
          },
        ],
      },
      {
        title: '18/9/2020',
        data: [
          {
            id: '1',
            income: '2000000',
            expense: '1000000',
            category: 'Classify',
          },
        ],
      },
      {
        title: '18/9/2020',
        data: [
          {
            id: '1',
            income: '2000000',
            expense: '1000000',
            category: 'Classify',
          },
        ],
      },
    ];

    // datetime picker

    const showPicker = () => {
      this.setState({
        show: true,
      });
    };
    const onChangeDate = (event, selectedDate) => {
      console.log('currentDate ' + selectedDate);
      this.setState({
        date: selectedDate,
        show: false,
      });
      console.log('date ' + this.state.date);
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
    const plusMoneyPress=()=>{
      this.props.navigation.navigate('Add')
    }
    return (
      <View style={styles.container}>
        <ImageBackground source={MainBackGround} style={styles.imageStyle}>
          <View style={styles.horizontalStyle}>
            <Root >
              <TouchableOpacity
                style={styles.circleImage}
                onPress={onTestPress}>
                <Image
                  source={this.state.avatarSource}
                  style={styles.circleImage}
                />
              </TouchableOpacity>
            </Root>
            <TextInput
              style={styles.userNameText}
              placeholderTextColor="white"
              maxLength={40}
              multiline={false}
              placeholder="Your name"
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
                  borderWidth={Size.h20}
                  color={Color.progressBarInColor}
                  shadowColor='#999'
                  width={100}
                  marginLeft={200}
                  bgColor={Color.progressBarOutColor}
                  >
                  <Text style={styles.textProgress}>
                    {Math.round(
                      ((this.state.expenseMoney * 100) /
                        this.state.incomeMoney) *
                        100,
                    ) / 100}%
                  </Text>
                </ProgressCircle>
              </View>

              <View style={styles.backgroudMoneyCurrent}>
                <Text style={styles.textCurrentStyle}>Current</Text>
                <Text style={styles.textMoney}>{currentMoney} VND</Text>
              </View>
            </View>

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
                  <Text style={styles.textMoney2}>
                    {this.state.expenseMoney} VND
                  </Text>
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
          <View style={styles.Line}></View>
          <SectionList
            sections={DATA}
            renderSectionHeader={({section: {title}}) => (
              <Text style={styles.titleListHistoryStyle}>{title}</Text>
            )}
            renderItem={({item}) => (
              <View>
                <View style={styles.horizontalStyle}>
                  <Image source={incomeIcon} style={styles.iconIncomeStyle} />
                  <View>
                    <Text style={styles.categoryListHistoryStyle}>
                      {item.category}
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
                        {item.income}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.horizontalStyle}>
                  <Image source={expenseIcon} style={styles.iconIncomeStyle} />
                  <View>
                    <Text style={styles.categoryListHistoryStyle}>
                      {item.category}
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
                        {item.expense}
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
export default HomeScreen;
