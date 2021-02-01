import React,{Component} from 'react';
import {Text,View} from 'react-native';
class K extends Component{
    render(){
        var user=`
            Hi there ${this.props.name}! U r fuckin stupid`
        return(
            <Text>{user}</Text>
        )
    }
}
export default class MultiUser extends Component{
    render(){
        return(
            <View style={{alignItems:"center"}}>
                <K name="Jarvis"></K>
                <K name="K"></K>
            </View>
        )
    }
}