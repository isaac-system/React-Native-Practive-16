import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import {
  Header,
  IconButton,
  IconLabel,
  Ratings,
  StepperInput,
  TextButton,
} from "../../component";
import CartQuantityButton from "../../component/CartQuantityButton";
import LineDivider from "../../component/LineDivider";
import {
  COLORS,
  SIZES,
  icons,
  dummyData,
  FONTS,
  images,
} from "../../constants";

const FoodDetail = ({ navigation, route }) => {
  const { item } = route.params;

  const [selectedSize, setSelectedSize] = React.useState("");
  const [qty, setQty] = React.useState(1);
  // const [foodItem , setFoodItem] = React.useState(item. )

  function renderHeader() {
    return (
      <Header
        title="DETAILS"
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          marginTop: 40,
          alignItems: "center",
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

  function renderDetail() {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          marginBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* Food Card */}
        <View
          style={{
            height: 190,
            borderRadius: 15,
            backgroundColor: COLORS.lightGray2,
          }}
        >
          {/* Calories & Favourite */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: SIZES.base,
              paddingHorizontal: SIZES.radius,
            }}
          >
            {/* Calories */}
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Image
                source={icons.calories}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  color: COLORS.darkGray2,
                  ...FONTS.body4,
                }}
              >
                {item?.calories} Calories
              </Text>
            </View>
            {/* Favourite */}
            <Image
              source={icons.love}
              style={{
                width: 20,
                height: 20,
                tintColor: item?.isFavourite ? COLORS.primary : COLORS.gray,
              }}
            />
          </View>

          {/* Food Image */}
          <Image
            source={item?.image}
            resizeMode="contain"
            style={{ height: 170, width: "100%" }}
          />
        </View>

        {/* Food Info */}
        <View
          style={{
            marginTop: SIZES.padding,
          }}
        >
          {/* Name & Description */}
          <Text
            style={{
              ...FONTS.h1,
            }}
          >
            {item?.name}
          </Text>

          <Text
            style={{
              marginTop: SIZES.base,
              color: COLORS.darkGray,
              textAlign: "justify",
              ...FONTS.body3,
            }}
          >
            {item?.description}
          </Text>

          {/* Ratings, Duration & Shipping */}
          <View
            style={{
              flexDirection: "row",
              marginTop: SIZES.padding,
            }}
          >
            {/* Ratings */}
            <IconLabel
              containerStyle={{
                backgroundColor: COLORS.primary,
              }}
              icon={icons.star}
              label={item?.rating}
              labelStyle={{
                color: COLORS.white,
              }}
            />
            {/* Duration */}
            <IconLabel
              containerStyle={{
                marginLeft: SIZES.base,
                paddingHorizontal: 0,
              }}
              icon={icons.clock}
              label="30 Mins"
              labelStyle={{
                color: COLORS.black,
              }}
            />

            {/* Shipping */}
            <IconLabel
              containerStyle={{
                marginLeft: SIZES.base,
                paddingHorizontal: 0,
              }}
              icon={icons.dallar}
              label="Free Shpping"
              labelStyle={{
                color: COLORS.black,
              }}
            />
          </View>

          {/* Sizes */}

          <View
            style={{
              flexDirection: "row",
              marginTop: SIZES.padding,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                ...FONTS.h3,
              }}
            >
              Sizes:
            </Text>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                marginLeft: SIZES.padding,
              }}
            >
              {dummyData.sizes.map((item, index) => {
                return (
                  <TextButton
                    key={`Sizes-${index}`}
                    buttonContainerStyle={{
                      width: 55,
                      height: 55,
                      margin: SIZES.base,
                      borderWidth: 1,
                      borderRadius: SIZES.radius,
                      borderColor:
                        selectedSize == item.id ? COLORS.primary : COLORS.gray2,
                      backgroundColor:
                        selectedSize == item.id ? COLORS.primary : null,
                    }}
                    label={item.label}
                    labelStyle={{
                      color:
                        selectedSize == item.id ? COLORS.white : COLORS.gray2,
                      ...FONTS.body2,
                    }}
                    onPress={() => setSelectedSize(item.id)}
                  />
                );
              })}
            </View>
          </View>
        </View>
      </View>
    );
  }

  function renderRastaurant() {
    return (
      <View
        style={{
          flexDirection: "row",
          marginVertical: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <Image
          source={images.profile}
          style={{
            width: 50,
            height: 50,
            borderRadius: SIZES.radius,
          }}
        />

        {/* Info */}
        <View
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            justifyContent: "center",
          }}
        >
          <Text style={{ ...FONTS.h3 }}>ByProgrammers</Text>
          <Text style={{ ...FONTS.body3, color: COLORS.gray }}>
            1.2 KM away from you
          </Text>
        </View>

        {/* Rastaurant Rating */}
        <Ratings
          rating={4}
          iconStyle={{
            marginLeft: 3,
          }}
        />
      </View>
    );
  }

  function renderFooter() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 120,
          alignItems: "center",
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.radius,
        }}
      >
        {/* Stapper Input */}
        <StepperInput
          value={qty}
          onAdd={() => setQty(qty + 1)}
          onMinus={() => {
            if (qty > 1) {
              setQty(qty - 1);
            }
          }}
        />

        {/* Text Button */}
        <TextButton
          buttonContainerStyle={{
            flex: 1,
            flexDirection: "row",
            height: 60,
            marginLeft: SIZES.radius,
            paddingHorizontal: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          label="Buy Now"
          label2={`$${item.price}`}
          onPress={() => navigation.navigate("MyCart")}
        />
      </View>
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

      {/* Body */}
      <ScrollView>
        {/* Food Detail */}
        {renderDetail()}

        <LineDivider />

        {/* Restaurant */}
        {renderRastaurant()}
      </ScrollView>

      {/* Footer */}
      <LineDivider />
      {renderFooter()}
    </View>
  );
};

export default FoodDetail;
