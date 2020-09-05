import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView,Image,TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/AntDesign'

export class SpecialMainScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.navigation}>
                    <Text style={styles.headerText}>สวัสดี!</Text>
                    <Text style={styles.secondText}>คุณสมชาย</Text>
                </View>

                <View style={styles.menuContainer}>

                    <View style={styles.rootMenu}>
                        <TouchableOpacity style={styles.menuButton} onPress={()=>this.props.navigation.navigate('specialWorkList')}>
                            <Text style={styles.menuButtonText}>
                                <Icon name='star' size={50} color='#329ada' />
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.menuText}>
                            งานของคุณ
                        </Text>
                    </View>

                    <View style={styles.rootMenu}>
                        <TouchableOpacity style={styles.menuButton} onPress={()=>this.props.navigation.navigate('specialListTab')}>
                            <Text style={styles.menuButtonText}>
                                <Icon name='filetext1' size={50} color='#329ada' />
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.menuText}>
                            รายการงาน
                        </Text>
                    </View>

                    <View style={styles.rootMenu}>
                        <TouchableOpacity style={styles.menuButton} onPress={()=>this.props.navigation.navigate('specialnotification')}>
                            <Text style={styles.menuButtonText}>
                                <Icon name='notification' size={50} color='#329ada' />
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.menuText}>
                            แจ้งเตือน
                        </Text>
                    </View>
                </View>

                <View style={styles.menuContainer}>

                    <View style={styles.rootMenu}>
                        <TouchableOpacity style={styles.menuButton} onPress={()=>this.props.navigation.navigate('specialworkCalendar')}>
                            <Text style={styles.menuButtonText}>
                                <Icon name='calendar' size={50} color='#329ada' />
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.menuText}>
                            ปฏิบัติงาน
                        </Text>
                    </View>

                    <View style={styles.rootMenu}>
                        <TouchableOpacity style={styles.menuButton} onPress={()=>this.props.navigation.navigate('specialChatTap')}>
                            <Text style={styles.menuButtonText}>
                                <Icon name='wechat' size={50} color='#329ada' />
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.menuText}>
                            แชท
                        </Text>
                    </View>

                    <View style={styles.rootMenu}>
                        <TouchableOpacity style={styles.menuButton} onPress={()=>this.props.navigation.navigate('specialAccount')}>
                            <Text style={styles.menuButtonText}>
                                <Icon name='user' size={50} color='#329ada' />
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.menuText}>
                            บัญชีของฉัน
                        </Text>
                    </View>
                </View>

                <View style={styles.imageContainer}>
                    <Image style={styles.coverImage} source={{
                        uri: 'https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                    }} />
                </View>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    navigation: {
        width: '100%',
        height: 120,
        justifyContent: 'flex-start',
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#38a9ef',
        paddingHorizontal: 30
    },
    headerText: {
        fontSize: 30,
        color: '#fff'
    },
    secondText: {
        fontSize: 24,
        paddingTop: 3,
        paddingLeft: 5,
        color: '#fff'
    },
    menuContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
    },
    rootMenu: {
        alignSelf: 'flex-start',
        marginTop: 30
    },
    menuButton: {
        borderRadius: 100,
        width: 90,
        height: 90,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: .3,
        shadowRadius: 4,
        elevation: 5,
        marginVertical:10,
        marginLeft:10,
        marginRight:10
    },
    menuText: {
        fontSize: 18,
        paddingTop: 10,
        textAlign: 'center',
        color: '#329ada'
    },
    imageContainer: {
        marginTop: 30,
        height: 150
    },
    coverImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    }
})

export default SpecialMainScreen
