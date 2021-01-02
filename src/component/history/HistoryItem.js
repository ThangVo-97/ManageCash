import React, {Component} from 'react'
import {View, Text, Image,
    Button, StyleSheet} from 'react-native'
import PropTypes from 'prop-types'

import Color from "../../values/color";
import AntDesign from "react-native-vector-icons/AntDesign";
import incomeIcon from "../../assets/income.png";
import expenseIcon from '../../assets/expense.png';

import style from "../../values/style";
import styles from "../../values/style";
import { Colors } from 'react-native/Libraries/NewAppScreen';

class HistoryItem extends Component {
    render() {
        const { incomeMoneyData } = this.props
        const {
            incomeMoney,
            categoryExpenseMoney,
            expenseMoney,
            categoryIncomeMoney,
            dateCreate,
          } = incomeMoneyData
        console.log("Item history" + dateCreate)
        return (
            <View>
              <Text style={styles.dateHistoryStyle}>
                {dateCreate.getDate()}/{dateCreate.getMonth() + 1}/{dateCreate.getFullYear()}
                </Text>
                {
                incomeMoney !== "" &&
                <View style={styles.horizontalStyle}>
                {/* income */}
                <Image source={incomeIcon} style={styles.iconIncomeStyle} />
                <View>
                  <Text style={styles.categoryListHistoryStyle}>
                    {categoryIncomeMoney}
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
                      {incomeMoney}
                    </Text>
                  </View>
                </View>
              </View>
                }
                
                {/* expense */}
                {
                expenseMoney !== "" && 
                <View style={styles.horizontalStyle}>
                  <Image source={expenseIcon} style={styles.iconIncomeStyle} />
                  <View>
                    <Text style={styles.categoryListHistoryStyle}>
                      {categoryExpenseMoney}
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
                        {expenseMoney}
                      </Text>
                    </View>
                  </View>
                  </View>
                  }
              </View>
        )
    }
}

const styless = StyleSheet.create({
    
})

HistoryItem.propTypes = {
    history: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
}

export default HistoryItem