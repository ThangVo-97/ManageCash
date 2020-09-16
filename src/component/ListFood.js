
import { Component } from "react";
import * as React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from "react-native";
import CategoryListItem from "./CategoryListItem";

export default class ListFood extends Component {
  constructor(props) {
    super();
    this.state = {
      categories: [
        { id: "1", name: "Món Gà" },
        { id: "2", name: "Món Heo" },
        { id: "3", name: "Món Bò" },
        { id: "4", name: "Món Cá" },
        { id: "5", name: "Món Chay" },
        { id: "6", name: "Món Tráng miệng" },
        { id: "7", name: "Món Ngon" },
        { id: "8", name: "Món Hay" },
        { id: "9", name: "Món Lạ" },
      ],
    };
  }

  render() {
    const { categories } = this.state;

    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={{ alignItems: "center", justifyContent: "center" }}>
          Bé khùng
        </Text>

        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <CategoryListItem
              category={item}
              onPress={() => navigation.navigate("Details")}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",

    justifyContent: "center",
  },
});
