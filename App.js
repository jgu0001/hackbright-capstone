import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from "./screens/LandingScreen";
import SearchScreen from "./screens/SearchScreen";
import ResultScreen from "./screens/ResultScreen";
import RecipeScreen from "./screens/RecipeScreen";
import { Colors } from "./styles/Colors";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={LandingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{
              headerTransparent: true,
              headerBackTitleVisible: false,
              headerTintColor: Colors.oatmeal,
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Results"
            component={ResultScreen}
            options={{
              headerTransparent: true,
              headerBackTitleVisible: false,
              headerTintColor: Colors.black,
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="Recipe"
            component={RecipeScreen}
            options={{
              headerTransparent: true,
              headerBackTitleVisible: false,
              headerTintColor: Colors.black,
              headerTitleAlign: "center",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
