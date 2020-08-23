import React, { Component } from 'react'
import {Text, View, StyleSheet, SafeAreaView, TextInput, Dimensions, Image} from 'react-native'

import MultiSlider from '@ptomasroos/react-native-multi-slider'
import {TouchableOpacity} from "react-native-gesture-handler";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export class WorkDetailScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            low_price: 0,
            high_price: 0,
            multiSliderValue: [0, 10000]
        }
    }

    render() {
        return (

            <SafeAreaView style={styles.container}>
                <View style={{flexDirection:"row",alignItems:"center",
                    paddingLeft:30,
                    paddingTop:10,
                    paddingBottom:20,
                    backgroundColor:"white",
                    shadowRadius: 2,
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowColor: '#000000',
                    elevation: 4,
                    shadowOpacity: 0.10
                }}>
                    <TouchableOpacity onPress={()=>this.props.navigation.goBack()} >
                        <Image source={require("../assets/images/back.png")} style={{width:25,height:25,marginLeft:"auto",zIndex:100}} />
                    </TouchableOpacity>
                    <Text style={{fontSize:20,color:"#009ada",textAlign:"center",alignItems:"center"}}>กรอกรายละเอียดงาน</Text>
                </View>
                <View style={styles.detailContainer}>
                    <Text style={styles.headerText}>รายละเอียดงานบริการของคุณ</Text>
                    <Text style={styles.secondText}>กรอกรายละเอียดงาน แนะนำตัว และประสบการณ์ทำงาน</Text>
                    <TextInput
                        style={styles.workDetailText}
                        editable
                        multiline
                        numberOfLines={4}
                    />
                    <Text style={styles.headerText}>ช่วงราคา ราคาต่ำสุด - สูงสุด</Text>


                    <View style={styles.multiSlideContainer}>
                        <MultiSlider

                            markerStyle={{
                                height: 20,
                                width: 20,
                            }}
                            pressedMarkerStyle={{
                            }}
                            selectedStyle={{
                                backgroundColor: '#f77a02'
                            }}
                            trackStyle={{
                                backgroundColor: '#fde4cb'
                            }}
                            touchDimensions={{
                                height: 40,
                                width: 40,
                                borderRadius: 20,
                            }}
                            enableLabel={true}
                            values={[this.state.multiSliderValue[0], this.state.multiSliderValue[1]]}
                            sliderLength={windowWidth - 60}
                            onValuesChange={(value) => this.setState({multiSliderValue: value})}
                            min={0}
                            max={10000}
                            allowOverlap={false}
                            minMarkerOverlapDistance={10}
                            step={100}
                        />
                    </View>

                    <View style={styles.rangeBoxContainer}>
                        <View style={styles.rangeBoxItem}>
                            <Text style={styles.rangeBoxText}>ราคาต่ำสุด</Text>
                            <TextInput
                                style={styles.inputText}
                                value={this.state.multiSliderValue[0].toString()}
                                underlineColorAndroid='transparent'
                            />
                        </View>
                        <Text style={styles.toText}>ถึง</Text>
                        <View style={styles.rangeBoxItem}>
                            <Text style={styles.rangeBoxText}>ราคาสูงสุด</Text>
                            <TextInput
                                style={styles.inputText}
                                value={this.state.multiSliderValue[1].toString()}
                                underlineColorAndroid='transparent'
                            />
                        </View>


                    </View>
                    <View style={styles.toolsContainer}>
                        <TouchableOpacity style={styles.nextButton} onPress={()=>this.props.navigation.navigate('confirmEmail')}>
                            <Text style={styles.nextButtonText}>ยืนยันการสมัคร</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    detailContainer: {
        marginTop: 30,
        paddingHorizontal: 30
    },
    inputText: {
        fontSize: 14,
        height: 35,
        width: '100%',
        borderColor: '#939393',
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        marginVertical: 7,
        color: '#f8902c'
    },
    headerText: {
        color: '#38a9ef',
        fontSize: 18
    },
    secondText: {
        color: "#939393",
        fontSize: 14
    },
    workDetailText: {
        borderColor: '#939393',
        borderWidth: 1,
        borderRadius: 10,
        height: 120,
        marginVertical: 20
    },
    rangeBoxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rangeBoxItem: {
        width: '40%'
    },
    toText: {
        alignItems: 'flex-end',
        color: '#3c9db9',
        fontSize: 16,
        paddingTop: 15
    },
    rangeBoxText: {
        color: '#38a9ef',
        fontSize: 16
    },
    multiSlideContainer: {
        marginVertical: 10
    },
    toolsContainer: {
        paddingHorizontal: 50,
    },
    nextButton: {
        marginVertical: 30,
        backgroundColor: '#38a9ef',
        borderRadius: 50
    },
    nextButtonText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        paddingVertical: 7
    },
})

export default WorkDetailScreen
