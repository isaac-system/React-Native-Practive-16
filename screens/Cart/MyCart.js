import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  Header,
  IconButton,
  CartQuantityButton,
  StepperInput,
  FooterTotal,
} from "../../component";
import { SwipeListView } from "react-native-swipe-list-view";
import { FONTS, SIZES, COLORS, icons, dummyData } from "../../constants";

const MyCart = ({ navigation }) => {
  const [myCartList, setMyCartList] = React.useState(dummyData.myCart);

  // Handler
  function updateQuantityHandler(newQty, id) {
    const newMyCardList = myCartList.map((cl) =>
      cl.id === id ? { ...cl, qty: newQty } : cl
    );

    setMyCartList(newMyCardList);
  }

  function removeMyCardHandler(id) {
    let newMyCardList = [...myCartList];

    const index = newMyCardList.findIndex((cart) => cart.id === id);

    newMyCardList.splice(index, 1);

    setMyCartList(newMyCardList);
  }
  // Render

  function renderHeader() {
    return (
      <Header
        title="MY CART"
        containerStyle={{
          height: 50,
          marginHorizontal: SIZES.padding,
          marginTop: 40,
        }}
        leftComponent={
          <IconButton
            icon={icons.left_arrow}
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray2,
            }}
            onPress={() => navigation.goBack()}
          />
        }
        rightComponent={<CartQuantityButton quantity={3} />}
      />
    );
  }

  function renderCartList() {
    return (
      <SwipeListView
        data={myCartList}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{
          marginTop: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.padding * 2,
        }}
        disableRightSwipe={true}
        rightOpenValue={-75}
        renderItem={(rowData, rowMap) => (
          <View
            style={{
              height: 100,
              backgroundColor: COLORS.lightGray2,
              ...styles.cartItemContainer,
            }}
          >
            {/* Food Image */}
            <View
              style={{
                width: 90,
                height: 100,
                marginLeft: -10,
              }}
            >
              <Image
                source={rowData.item.image}
                resizeMode="contain"
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 10,
                }}
              />
            </View>

            {/* Food Info */}
            <View
              style={{
                flex: 1,
              }}
            >
              <Text style={{ ...FONTS.body3 }}>{rowData.item.name}</Text>
              <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>
                ${rowData.item.price}
              </Text>
            </View>

            {/* Quantity */}
            <StepperInput
              containerStlye={{
                height: 50,
                width: 125,
                backgroundColor: COLORS.white,
              }}
              value={rowData.item.qty}
              onAdd={() =>
                updateQuantityHandler(rowData.item.qty + 1, rowData.item.id)
              }
              onMinus={() => {
                if (rowData.item.qty > 1) {
                  updateQuantityHandler(rowData.item.qty - 1, rowData.item.id);
                }
              }}
            />
          </View>
        )}
        renderHiddenItem={(rowData, rowMap) => (
          <IconButton
            containerStyle={{
              flex: 1,
              justifyContent: "flex-end",
              backgroundColor: COLORS.primary,
              ...styles.cartItemContainer,
            }}
            icon={icons.delete_icon}
            iconStyle={{
              marginRight: 10,
            }}
            onPress={() => removeMyCardHandler(rowData.item.id)}
          />
        )}
      />
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header */}
      {renderHeader()}

      {/* Cart List */}
      {renderCartList()}

      {/* Footer */}
      <FooterTotal
        subTotal={dummyData.myCart.map((a) => a.price).reduce((a, b) => a + b)}
        shippingFee={0}
        total={dummyData.myCart.map((a) => a.price).reduce((a, b) => a + b)}
        onPress={() => navigation.navigate("MyCard")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cartItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: SIZES.radius,
    paddingHorizontal: SIZES.radius,
    borderRadius: SIZES.radius,
  },
});

export default MyCart;
