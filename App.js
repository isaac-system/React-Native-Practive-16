import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import CustomDrawer from "./navigation/CustomDrawer";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./stores/rootReducer";

import {
  FoodDetail,
  MyCart,
  MyCard,
  Checkout,
  AddCard,
  Success,
  DeliveryStatus,
  Map,
} from "./screens";

const Stack = createStackNavigator();

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"Home"}
        >
          <Stack.Screen name="Home" component={CustomDrawer} />
          <Stack.Screen name="FoodDetail" component={FoodDetail} />
          <Stack.Screen name="MyCart" component={MyCart} />
          <Stack.Screen name="MyCard" component={MyCard} />
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="AddCard" component={AddCard} />
          <Stack.Screen
            name="Success"
            component={Success}
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen
            name="DeliveryStatus"
            component={DeliveryStatus}
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
