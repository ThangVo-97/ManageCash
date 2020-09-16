import React from "react";
import { View, Text, 
  Image, StyleSheet, 
  TouchableOpacity,
  Alert,
} from "react-native";
import GaXoiMo from "../assets/ga-xoi-mo.png";

export default function CategoryListItem(props) {
  const { category, onPress } = props;
  return (
    <TouchableOpacity 
      onPress={onPress}
    >
      <View style={styles.styleContainer}>
        <Image style={styles.styleImage} source={GaXoiMo} />
        <View style={styles.styleTextContainer}>
          <Text style={styles.styleTitle}>{category.name}</Text>
          <Text style={styles.styleAddress}>75 tan lap</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  styleContainer: {
    flexDirection: "row",
    backgroundColor: "blue",
    borderRadius: 10,
    padding: 10,
    shadowColor: "yellow",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    margin: 16,
    shadowOffset: { width: 0, height: 0 },
  },
  styleTextContainer: {
    flexDirection: "column",
  },
  styleImage: {
    width: 64,
    height: 64,
  },
  styleTitle: {
    textShadowColor: "red",
    textShadowRadius: 1,
    fontSize: 20,
    fontStyle: "normal",
  },
  styleAddress: {
    textShadowColor: "black",
    textShadowRadius: 1,
    fontSize: 14,
    fontStyle: "normal",
  },
});
