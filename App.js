import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
        },
        sceneContainerStyle: {
          backgroundColor: "blue",
        },
        headerTitleStyle: {
          color: "white",
        },
        headerTintColor: "white",
        drawerStyle: {
          backgroundColor: "black",
        },
        drawerActiveTintColor: "black",
        drawerActiveBackgroundColor: "white",
        drawerInactiveTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "black",
            },
            contentStyle: {
              backgroundColor: "#1e1e1e",
            },
            headerTitleStyle: {
              color: "white",
            },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="Drawer"
            // component={CategoriesScreen}
            component={DrawerNavigator}
            options={{
              // title: "All Categories",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({ route }) => {
            //   return {
            //     title: route.params.categoryId,
            //   };
            // }}
          />
          <Stack.Screen
            name="MealDetails"
            component={MealDetailsScreen}
            options={{
              title: "About The Meal",
              // headerRight: () => {
              //   return <Button title={"Button"} />;
              // },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
