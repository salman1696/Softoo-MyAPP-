/* eslint-disable prettier/prettier */
/** @format */

import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Platform,
    Image,
} from 'react-native';
// import {hasNotch} from 'react-native-device-info';
import { Icon } from 'react-native-elements';

import { Colors } from 'MyApp/src/theme/Variables';
import { useTheme } from 'MyApp/src/hooks';
import { useSelector } from 'react-redux';

export const TabBar = (props: any) => {
    const { state, descriptors, navigation } = props;
    const { rItems } = useSelector((state: any) => state.user)
    const { Images } = useTheme();



    const IconStyle = {
        Products: {
            icon: Images.sparkles.home,
            iconfilled: Images.sparkles.home_fill,
            family: 'material-community',
            key: 'Home',
        },
        Cart: {
            icon: Images.sparkles.case,
            iconfilled: Images.sparkles.home_fill,
            family: 'font-awesome',
            key: 'explore',
        },

    };

    const _renderItem = (
        index: string,
        name: string,
        onPress: any,
        focused: any,
    ) => {
        let _icon = IconStyle[name];

        // alert(nav);
        return (
            <View
                key={index}
                style={styles.mainCon1}
            >
                <TouchableOpacity
                    style={focused ? [styles.foucedStyles] : [styles.inactiveStyle]}
                    onPress={onPress}
                >
                    {name === "Cart" ?
                        <View style={styles.checkinCon}>
                            {rItems.filter((i) => i?.count).length ?
                                <Text
                                    style={[styles.tabText, {
                                        fontWeight: focused ? '500' : '300',
                                        color: Colors.darkGray,
                                        fontSize: 15
                                    }]}
                                >
                                    {rItems.filter((i) => i?.count).length}
                                </Text> : < Icon
                                    name={'plus'}
                                    type="antdesign"
                                    size={20}
                                    color={Colors.bgGray}
                                />}
                        </View> :
                        focused ?
                            <Image
                                source={focused ? _icon.iconfilled : _icon.icon}
                                resizeMode={'contain'}
                                style={[styles.imgCon, {

                                    tintColor: focused ? Colors.primary : Colors.white,
                                }]}
                            />
                            :
                            <Image
                                source={focused ? _icon.iconfilled : _icon.icon}
                                resizeMode={'contain'}
                                style={
                                    [styles.imgCon, { tintColor: focused ? Colors.primary : Colors.white, }]
                                }
                            />
                    }

                    <Text
                        style={[styles.tabText, {
                            fontWeight: focused ? '500' : '300',
                        }]}
                    >
                        {name}
                    </Text>
                </TouchableOpacity >
                {focused && (
                    <View style={styles.underline}></View>
                )}
            </View >
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            {state.routes.map((route: any, index: any) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;
                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });


                    if (!isFocused && !event.defaultPrevented) {
                        route.name !== 'Courses' && navigation.navigate(route.name);
                    }
                };

                return _renderItem(index, label, onPress, isFocused);
            })}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: Platform.OS === 'ios' ? 85 : 70,
        width: '100%',
        alignItems: 'center',
        backgroundColor: Colors.bgGray,
        flexDirection: 'row',
        borderColor: '#eee',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        position: 'absolute',
        bottom: 0,
        alignSelf: 'flex-start',
        elevation: Platform.OS === 'android' ? Number.MAX_SAFE_INTEGER : undefined,
        justifyContent: 'space-evenly',
        paddingHorizontal: 20,
    },
    foucedStyles: {
        // marginTop: 10,
        alignItems: 'center',
        paddingHorizontal: Platform.OS === 'ios' ? 20 : 10,
        // marginHorizontal: 5,

        // width: Platform.OS === 'ios' ? 109 : 69,
    },
    inactiveStyle: {
        alignItems: 'center',
        // marginHorizontal: 5,
        paddingHorizontal: Platform.OS === 'ios' ? 20 : 10,


    },
    imgCon: {
        height: Platform.OS === 'android' ? 22 : 28,
        width: 28,
    },
    mainCon1: {
        alignItems: 'center',
        borderRadius: 25,
        marginTop: Platform.OS === 'android' ? 0 : 20,
    },
    checkinCon: {
        paddingHorizontal: 16,
        paddingVertical: 4,
        backgroundColor: Colors.primary, borderRadius: 5,
        alignItems: 'center', justifyContent: "center"
    },
    tabText: {
        fontSize: Platform.OS === 'android' ? 12 : 14,
        top: 2,
        textAlign: 'center',
        color: Colors.white,
    },
    underline: {
        position: 'absolute',
        bottom: -8,
        width: 15,
        height: 6,
        borderRadius: 10,
        backgroundColor: Colors.primary,
    }
});
