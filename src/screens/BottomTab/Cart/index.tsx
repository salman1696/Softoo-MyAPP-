import React, { useMemo, useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { ApplicationScreenProps } from '../../../../@types/navigation';
import { Colors } from 'MyApp/src/theme/Variables';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import CartItemModal from 'MyApp/src/components/CartItemModal/CartItemModal';

const Cart = ({ navigation }: ApplicationScreenProps) => {
    const { rItems, user, lang } = useSelector((state: any) => state.user);
    const totalprice = useMemo(
        () => {
            let total = 0;
            rItems?.map((i: any) => {
                total = total + (i.count * i.price)
            })
            return total
        },
        [rItems]
    );

    return (
        <SafeAreaView style={styles.centeredView}>
            <StatusBar barStyle={'light-content'} />
            <Text style={styles.mainH1}>Cart</Text>
            <View style={rItems.filter((i: any) => i.count > 0).length ?
                styles.mainCon1 :
                [styles.mainCon1, { alignItems: 'center', justifyContent: 'center' }]}>
                {rItems.filter((i: any) => i.count > 0).length ? <FlatList
                    data={rItems.filter((i: any) => i.count > 0)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }: any) => (
                        <CartItemModal item={item} navigation={navigation} />
                    )}
                /> :
                    <Text style={styles.mainH2}>Cart Empty</Text>
                }
            </View>
            {rItems.filter((i: any) => i.count > 0).length > 0 && <View style={styles.total_con}>
                <Text style={styles.mainH2}>Total</Text>
                <Text style={styles.mainH2}> $ {totalprice.toFixed(2)}</Text>
            </View>}
            {rItems.filter((i: any) => i.count > 0).length > 0 && <View style={styles.checkout_con}>
                <Text style={styles.text_checkout}>Checkout</Text>
            </View>}
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    centeredView: { flex: 1, backgroundColor: Colors.textGray, padding: 10, },
    mainCon1: { width: '100%', height: '70%' },
    welcomeText: {
        fontSize: 15,
        fontWeight: '400',
        color: Colors.textGray200,
        lineHeight: 22,
    },
    mainH1: { fontSize: 28, fontWeight: '700', color: Colors.white },
    mainH2: { fontSize: 32, fontWeight: '700', color: Colors.white },
    text_checkout: { flex: 1, fontSize: 32, fontWeight: '700', textAlign: "center", color: Colors.textGray400, },
    checkout_con: { flexDirection: 'row', alignItems: 'center', width: '100%', position: 'absolute', bottom: 100, borderRadius: 5, backgroundColor: Colors.primary, padding: 10, alignSelf: 'center' },
    total_con: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', position: 'absolute', bottom: 170, backgroundColor: "#444", padding: 10, alignSelf: 'center' },

});
export default Cart;
