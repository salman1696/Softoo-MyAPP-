/** @format */

import React, { useEffect } from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TabBar } from './tab';
import { Colors } from 'MyApp/src/theme/Variables';
import Products from './Products';
import { getProducts } from 'MyApp/src/services/UserService';
import { setRItems } from 'MyApp/src/store/userReducer';
import { useDispatch } from 'react-redux';
import Cart from './Cart';



const Tab = createBottomTabNavigator();

const MainFlow = ({ navigation }: { navigation: any }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        getProducts().then((res) => {
            const items = setRItems(res?.data?.map((i: any) => {
                return { ...i, count: 0 };
            }))
            dispatch(items)
        })
    }, [])

    return (
        <Tab.Navigator
            useLegacyImplementation
            screenOptions={{ headerShown: false }}
            tabBar={(props: any) => <TabBar {...props} />}
            initialRouteName={'Home'}
            tabBarOptions={{
                activeTintColor: '#000',
                style: {
                    borderWidth: 0.5,
                    borderBottomWidth: 1,
                    backgroundColor: Colors.primary,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    borderColor: 'grey',
                    position: 'absolute',
                },
            }}
        >
            <Tab.Screen
                component={Products}
                name={'Products'}
                options={{
                    tabBarLabel: 'Products',

                    tabBarIcon: ({ color, size }) => (
                        <Image
                            source={offer1}
                            resizeMode={'contain'}
                            style={{ height: 42, width: 42, marginHorizontal: 5 }}
                        />
                    ),
                }}
            />
            <Tab.Screen
                component={Cart}
                name={'Cart'}
                options={{
                    tabBarLabel: 'Cart',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="reorder" color={color} size={size} />
                    ),
                }}
            />

        </Tab.Navigator>
    );
};

export default MainFlow;
