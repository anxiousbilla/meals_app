import { StyleSheet, FlatList } from "react-native";

import MealItem from "./MealItem";

const MealsList = ({ items }) => {
  function renderMealItem(itemData) {
    return <MealItem meal={itemData.item} />;
  }

  return (
    <FlatList
      data={items}
      keyExtractor={(mealItem) => mealItem.id}
      renderItem={renderMealItem}
    />
  );
};

export default MealsList;

const styles = StyleSheet.create({});
