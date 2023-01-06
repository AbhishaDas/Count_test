import { StatusBar } from "react-native";
import React,{useState,useEffect} from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

export default function App(){
  const [count, setCount] =useState(0);

  useEffect(()=>{
    setInterval(()=>{
      setCount(count+10)
    }, 1000);
  });

  return(
    <View style={styles.container}>
      <Text>Count! {count}</Text>
      <TouchableHighlight>
        <Text>Count</Text>
      </TouchableHighlight>
      <StatusBar style='auto'/>

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor : '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})