import React, { Component,ReactElement  } from 'react'
import { Text, View,Image,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import Ent from 'react-native-vector-icons/Entypo'


export default  function TabBottomHome({ state, descriptors, navigation }) {
    return (<View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
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
                        style={{ flex: 1,height:80,backgroundColor:"white",justifyContent:"center",alignItems:"center" }}
                    >

                        {/*<Icon name={'star'} size={30} />*/}
                        {
                            index === 0 ? <Icon color={isFocused ? "#03b3fd" : "#939393"} name={'star'} size={30} /> : index === 1 ? <Ent
                                    name={'list'}
                                    color={isFocused ? "#03b3fd" : "#939393"}
                                    size={30} />
                            : index === 2 ? <Ent name={"chat"} size={30} color={isFocused ? "#03b3fd" : "#939393"} /> : <Ent color={isFocused ? "#03b3fd" : "#939393"} name={'user'} size={30} />
                        }
                        <Text style={{ color: isFocused ? '#64b5ea' : '#aebbc4',fontSize:13 }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
