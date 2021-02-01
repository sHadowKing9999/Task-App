import React,{Component} from 'react';
import {Image,Text,View} from 'react-native';
const Imag =()=>{
    const k=`
    
                hello there`
    return(
        <View>
            <Text>{k}</Text>
            <Image source={require('../assets/favicon.png')} style={{height:100,width:100}}/>
        </View>
    );
}

export default Imag;
