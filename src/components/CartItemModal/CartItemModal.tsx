import React, { useMemo, useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { setRItems, } from 'MyApp/src/store/userReducer';
import { useDispatch, useSelector } from 'react-redux';

interface Props {
    item: object;
    navigation: any;
}

const CartItemModal = ({ item, navigation }: Props) => {
    const { rItems } = useSelector((state: any) => state.user);
    const dispatch = useDispatch();

    return (
        <View style={styles.main}>
            <View style={styles.sub_main}>
                <View style={styles.image_con}>
                    <Image
                        source={{
                            uri: item?.id === 1 ? 'https://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg' : item.img + "",
                        }}
                        style={styles.image}
                    />
                </View>
                <View style={styles.name_holder} >
                    <Text style={styles.header_bold}>{item?.name}</Text>
                    <View style={styles.varriant}>
                        <Text style={styles.header_white}>Variant Color : <Text style={styles.header_bold}>{item?.colour}</Text></Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.count_container}>
                        <View>
                            <Text style={styles.price_text}>$ {item?.price}</Text>
                        </View>
                        <View style={styles.counter_con}>
                            <View style={styles.add_minus}  >
                                <Icon
                                    name={item?.count !== 1 ? "minus-a" : 'trash'}
                                    type="fontisto"
                                    color="#000"
                                    size={25}
                                    onPress={() => {
                                        dispatch(setRItems(item?.count === 0 ?
                                            rItems?.filter((i: any) => i.id !== item.id) :
                                            rItems?.map((i: any) => i.id === item.id ?
                                                { ...i, count: i.count - 1 } : i)));
                                    }}
                                />
                            </View>
                            <Text style={styles.count}>{item?.count} </Text>
                            <View style={styles.add_minus}  >
                                <Icon
                                    name="plus-a"
                                    type="fontisto"
                                    color="#000"
                                    size={25}
                                    onPress={() => dispatch(setRItems(rItems?.map((i: any) => i.id === item.id ? { ...i, count: i.count + 1 } : i)))}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: { margin: 10, backgroundColor: "#fff", borderRadius: 10 },
    sub_main: { flex: 1, padding: 12, flexDirection: "row" },
    image_con: { flex: 0.25 },
    image: { width: 95, height: 145, borderRadius: 10 },
    varriant: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    divider: { height: 1, width: "100%", backgroundColor: "#00000010" },
    counter_con: { flexDirection: "row", alignItems: "center", paddingHorizontal: 18 },
    header_yellow: {
        color: "#000",
        fontSize: 18,
        textAlign: "left",
        fontWeight: "100",
    },
    name_holder: {
        flex: 0.75,
        marginLeft: 10,
        justifyContent: "center",
        alignItems: "flex-start"
    },
    count_container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 16,
        alignItems: "center",
        marginVertical: 10,
    },
    add_minus: {
        backgroundColor: "#35353520",
        marginLeft: 5,
        padding: 18,
        borderRadius: 30,
    },
    header_white: {
        color: "#000",
        fontSize: 18,
        marginTop: 2,
        marginHorizontal: 2,
        textAlign: 'left',
        fontWeight: "100",
    },
    count: {
        color: "#000",
        fontSize: 22,
        marginTop: 2,
        left: 4,
        fontWeight: "400",
    },
    header_bold: {
        color: "#000",
        fontSize: 18,
        marginTop: 2,
        marginHorizontal: 2,
        textAlign: "left",
        fontWeight: "400",
    },
    price_text: {
        color: "#000",
        fontSize: 16,
        marginTop: 2,
        textAlign: "center",
        fontWeight: "800",
    }
});

export default CartItemModal;
