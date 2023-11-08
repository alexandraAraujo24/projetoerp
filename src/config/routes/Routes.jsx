import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native";
import Sales from "../../screens/login/sales/Sales";

function Routes() {
  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Sales" component={Sales} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
export default Routes;
