import React, { useMemo, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import { Colors } from "../../../src/theme/Variables";
import { setRItems } from "./../../../src/store/userReducer";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  item: object;
  navigation: any; 
}

const ProductModal = ({ item, navigation }: Props) => {
  const { rItems } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const handleAddtoCart = (item: any) => {
    dispatch(
      setRItems(
        rItems.map((i: any) => {
          if (i.id === item.id) {
            if (item?.count > 0) {
              return { ...i, count: i.count - 1 };
            } else {
              return { ...i, count: i.count + 1 };
            }
          }
          return i;
        })
      )
    );
  };

  return (
    <View style={styles.main}>
      <View style={styles.subMain}>
        <View style={styles.imageCon}>
          <Image
            source={{
              uri:
                item?.id === 1
                  ? "https://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg"
                  : item.img + "",
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.nameCon}>
          <Text style={styles.headerBold}>{item?.name}</Text>
          <View style={styles.varriant}>
            <Text style={styles.headerWhite}>
              Variant Color :{" "}
              <Text style={styles.headerBold}>{item?.colour}</Text>{" "}
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.countCon}>
            <View>
              <Text style={styles.priceText}>$ {item?.price}</Text>
            </View>
            <TouchableOpacity
              onPress={() => handleAddtoCart(item)}
              style={[
                styles.addCart,
                {
                  backgroundColor:
                    item?.count === 0 ? Colors.primary : Colors.error,
                },
              ]}
            >
              <Text
                style={[
                  styles.headerWhite,
                  { color: item?.count === 0 ? "#000" : "#FFF" },
                ]}
              >
                {item?.count === 0 ? "Add to cart" : "Remove from cart"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: { margin: 10, backgroundColor: "#fff", borderRadius: 10 },
  subMain: { flex: 1, padding: 12, flexDirection: "row" },
  imageCon: { flex: 0.25 },
  image: { width: 95, height: 145, borderRadius: 10 },
  varriant: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameCon: {
    flex: 0.75,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  divider: { height: 1, width: "100%", backgroundColor: "#00000010" },

  countCon: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    alignItems: "center",
    marginVertical: 10,
  },
  addCart: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    marginEnd: 19,
    borderRadius: 15,
  },
  headerWhite: {
    color: "#000",
    fontSize: 18,
    marginVertical: 12,
    marginHorizontal: 2,
    textAlign: "left",
    fontWeight: "100",
  },
  headerBold: {
    color: "#000",
    fontSize: 18,
    marginTop: 2,
    marginHorizontal: 2,
    textAlign: "left",
    fontWeight: "400",
  },
  priceText: {
    color: "#000",
    fontSize: 16,
    marginTop: 2,
    textAlign: "center",
    fontWeight: "800",
  },
});

export default ProductModal;
