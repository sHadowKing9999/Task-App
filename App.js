import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,Button,FlatList} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';
export default function App() {
  
  const [listGoals,setlistGoals]=useState([]);
  
  const listHandler=goals=>{
    if(goals!='')
    {setlistGoals(currGoals=>[...currGoals,{id:Math.random().toString(),value:goals}]);}
  }
  const goalDeleteHandler= goalKey =>{
    setlistGoals(currGoals=>{
      return currGoals.filter((goal)=>goal.id!==goalKey);
    });
  }
  return (
    <View style={styles.screen}>
      <StatusBar/>
      <GoalInput onAddGoal={listHandler} />
      <View>
      <FlatList 
          keyExtractor={(item,index)=>item.id}
          data={listGoals}
          renderItem={itemData=><GoalList id={itemData.item.id} 
          onDelete={goalDeleteHandler} 
          title={itemData.item.value}/>
          }/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:50,
    flex: 1,
    backgroundColor: '#fff'
  },
  listItems:{
    padding:10,
    marginVertical:10,
    backgroundColor:'#ccc',
    borderColor:'black',
    borderWidth:1
  }
});
