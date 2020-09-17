import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../bg.jpg') } style={styles.backdrop} >
               
                    <View style={styles.crop}>
                        <View >
    <Text  style={styles.textfornt}>{"\n"}Zip Code is  {props.zipCode}.{"\n"} </Text>
                            <Forecast {...forecastInfo}></Forecast>
                            <Text style={styles.textfornt}>Made My Jaturon EiEi 026</Text>
                        </View>
                      
                    </View>
               
                
            </ImageBackground>
        </View>
        
    );
}
const styles = StyleSheet.create({
    container: {
        width:'100%',
        flex:1
        
      },
    
    backdrop: {
    
       flex:1,
       paddingTop:25,
    },
    textcolor: {
        
        backgroundColor:'red',
    
      },
    crop: {
        textAlignVertical:'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'black',
        opacity:0.4,
        
    },
    textfornt:{
        fontSize:20,
        color:'#AED6F1',
    }


});
