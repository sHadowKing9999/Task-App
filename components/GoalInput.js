import React,{useState} from 'react';
import {View,TextInput,Button,StyleSheet} from 'react-native';

const GoalInput=props=>{
    const [enteredGoals,setenteredGoals]=useState('');
    const goalHandler=(goal)=>{
        setenteredGoals(goal);
      }
    return(
    <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalHandler} />
        <Button title="ADD1" onPress={props.onAddGoal.bind(this,enteredGoals)} />
    </View>);
};
const styles=StyleSheet.create({
    inputContainer:{
    flexDirection:"row",justifyContent:'space-between',alignItems:'center'
    },
    input:
    {width:'80%',borderBottomColor:'black',borderBottomWidth:1,padding:10},
    
});
export default GoalInput;