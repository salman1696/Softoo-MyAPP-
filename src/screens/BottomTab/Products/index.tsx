import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native';
import { ApplicationScreenProps } from '../../../../@types/navigation';
import { Colors } from 'MyApp/src/theme/Variables';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import ProductModal from 'MyApp/src/components/ProductModal/ProductModal';

const Products = ({ navigation }: ApplicationScreenProps) => {
    const { rItems } = useSelector((state: any) => state.user);

    return (
        <SafeAreaView style={styles.centeredView}>
            <StatusBar barStyle={'light-content'} />
            <View style={styles.mainCon1}>
                <Text style={styles.mainH1}>Products</Text>
                {rItems.length ? <FlatList
                    data={rItems}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }: any) => (
                        <ProductModal item={item} navigation={navigation} />
                    )}
                /> :
                    <Text style={styles.mainH2}>No Product Found</Text>
                }
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    centeredView: { flex: 1, backgroundColor: Colors.textGray, padding: 10 },
    mainCon1: { flex: 0.94, alignContent: 'center', width: '100%' },
    welcomeText: {
        fontSize: 15,
        fontWeight: '400',
        color: Colors.textGray200,
        lineHeight: 22,
    },
    mainH1: { fontSize: 28, fontWeight: '700', color: Colors.white },
    mainH2: { flex: 1, alignItems: "center", fontSize: 32, fontWeight: '700', color: Colors.white },

});

export default Products;
