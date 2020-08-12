import React, { Component,ReactElement  } from 'react'
import { Text, View,Image,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

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
                        {/*<Image*/}
                        {/*    style={{*/}
                        {/*        width: 55,*/}
                        {/*        height: 55,*/}
                        {/*    }}*/}
                        {/*    source={index == 0 ? <Icon name={'star'} /> : index == 1 ? <Icon name={'meh'} /> : index == 2 ? <Icon name={'meho'} /> : <Icon name={'user'} /> }*/}
                        {/*/>*/}
                        <Icon name={'star'} size={30} />
                        <Text style={{ color: isFocused ? '#64b5ea' : '#aebbc4',fontSize:13 }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
