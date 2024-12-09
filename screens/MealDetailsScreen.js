import { useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { MEALS } from "../data/dummy-data";
import IconButton from "../components/IconButton";

const MealDetailsScreen = ({ route }) => {
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);
  const navigation = useNavigation();

  function headerButtonPressHandler() {
    console.log("Header Button Pressed!");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={headerButtonPressHandler}
            icon={"star"}
            color={"white"}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{meal.duration} minutes</Text>
        <Text style={styles.detailItem}>{meal.complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>
          {meal.affordability.toUpperCase()}
        </Text>
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Ingredients:</Text>
        <View style={styles.listItem}>
          {meal.ingredients.map((ingredient, index) => (
            <Text key={index} style={styles.itemText}>
              {ingredient}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>Instructions:</Text>
        <View style={styles.listItem}>
          {meal.steps.map((step, index) => (
            <Text key={index} style={styles.itemText}>
              {index + 1}. {step}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
    color: "white",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
    color: "white",
  },
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
