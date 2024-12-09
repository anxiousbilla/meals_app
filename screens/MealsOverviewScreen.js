import { useLayoutEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    )?.title;

    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  function renderMealItem(itemData) {
    return <MealItem meal={itemData.item} />;
  }

  return (
    <View>
      <FlatList
        data={displayedMeals}
        keyExtractor={(mealItem) => mealItem.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({});
