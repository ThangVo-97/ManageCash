import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import HistoryItem from "./HistoryItem"

class ListHistory extends Component {

    render() {
        const { incomeMoneyData } = this.props
        console.log("ListHistory: " + incomeMoneyData);
        return (
            <View style={styles.container}>
                <ScrollView>
                    {
                        incomeMoneyData.map((incomeMoneyData, index) => {
                            return (
                                <HistoryItem
                                    key={index}
                                    index={index}
                                    incomeMoneyData={incomeMoneyData} />
                            )
                        })
                    }
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
    }
})

ListHistory.propTypes = {
    histories: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

export default ListHistory