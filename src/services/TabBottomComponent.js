import React, { Component,ReactElement  } from 'react'
import { Text, View,Image,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import Ent from 'react-native-vector-icons/Entypo'


export default  function TabService({ state, descriptors, navigation }) {
    return (<View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;
                const fontSize = options.tabBarLabel !== undefined
                     && options.fontSize;
                const fontWeight = options.tabBarLabel !== undefined
                  && options.fontWeight !== undefined ? options.fontWeight : "normal";

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityStates={isFocused ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{ flex: 1,height:80,backgroundColor:isFocused ? "#03b3fd" : "white",justifyContent:"center",alignItems:"center"


                        }}
                    >

                        {
                            index === 0 ? <Ent color={isFocused ? "white" : "#03b3fd"} name={'chat'} size={45} /> : null
                        }
                        <Text style={{ color: isFocused ? 'white' : '#03b3fd',fontSize:fontSize,fontWeight:fontWeight }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
