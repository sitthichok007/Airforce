import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, Image,ScrollView } from 'react-native'

export class UnreadChatScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.chatListContainer}>

                        <View style={styles.chatListItem}>
                            <Image style={styles.chatListImage} source={{
                                uri: 'https://uifaces.co/our-content/donated/AW-rdWlG.jpg',
                            }} />
                            <View style={styles.chatListDetail}>
                                <Text style={styles.headerText}>ไมตรี เมตตา</Text>
                                <Text style={styles.secondText}>โอเคครับ ขอบคุณมาก</Text>
                            </View>
                            <View style={styles.dateContainer}>
                                <Text style={styles.dateText}>07/02/2563 10:15</Text>
                            </View>
                        </View>

                        <View style={styles.chatListItem}>
                            <Image style={styles.chatListImage} source={{
                                uri: 'https://uifaces.co/our-content/donated/AW-rdWlG.jpg',
                            }} />
                            <View style={styles.chatListDetail}>
                                <Text style={styles.headerText}>ไมตรี เมตตา</Text>
                                <Text style={styles.secondText}>โอเคครับ ขอบคุณมาก</Text>
                            </View>
                            <View style={styles.dateContainer}>
                                <Text style={styles.dateText}>07/02/2563 10:15</Text>
                            </View>
                        </View>

                        <View style={styles.chatListItem}>
                            <Image style={styles.chatListImage} source={{
                                uri: 'https://uifaces.co/our-content/donated/AW-rdWlG.jpg',
                            }} />
                            <View style={styles.chatListDetail}>
                                <Text style={styles.headerText}>ไมตรี เมตตา</Text>
                                <Text style={styles.secondText}>โอเคครับ ขอบคุณมาก</Text>
                            </View>
                            <View style={styles.dateContainer}>
                                <Text style={styles.dateText}>07/02/2563 10:15</Text>
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    chatListContainer:{

        paddingHorizontal: 30,

    },
    chatListItem:{
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#c4edfe',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    chatListImage:{
        width: 50,
        height:50,
        borderRadius: 50
    },
    chatListDetail: {
        width: 200
    },
    headerText: {
        fontSize: 18,
        color: '#000'
    },
    secondText: {
        fontSize: 14,
        color: '#939393'
    },
    dateContainer: {
    },
    dateText: {
        fontSize: 10,
        color: '#939393'
    },

})

export default UnreadChatScreen
