import React from 'react';
import { View, Text ,StyleSheet} from 'react-native';

export default function Forecast(props) {
    return (
        <View style={styles.crop}>
            <Text style={styles.textmain}>{props.main}{"\n"}</Text>
    <Text style={styles.textdes}>{props.description}{"\n"}</Text>
            <View>
    <Text style={styles.texttemp}>{props.temp} <Text style={styles.textc}>°C{"\n"}</Text></Text>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    crop:{
        alignItems:'center',

    },

    textmain:{
        fontSize:40,
        color:'#AED6F1',
       

    },

    textdes:{
        fontSize:15,
        color:'#AED6F1',

    },
    texttemp:{
        fontSize:45,
        color:'#AED6F1',

    },
    textc:{
        fontSize:20,
    }




});