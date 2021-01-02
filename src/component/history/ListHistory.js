import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import HistoryItem from "./HistoryItem"

class ListHistory extends Component {

    render() {
        const { histories } = this.props
        console.log("ListHistory: " + histories);
        return (
            <View style={styles.container}>
                <ScrollView>
                    {
                        histories.map((history, index) => {
                            return (
                                <HistoryItem
                                    key={index}
                                    index={index}
                                    history={history} />
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