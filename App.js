import React  from 'react';
import { StyleSheet, View , FlatList , Text , Platform , StatusBar , TouchableWithoutFeedback, Keyboard , Alert } from 'react-native';
import { useState } from 'react';
import Header from './components/header';
import TodoItem from './components/todoitems';
import AddTodo from './components/addTodo';

export default function App() {
  const [todo , setTodo] = useState([{ text : 'Play' , key : '1'} , 
  { text : 'Create' , key : '6'} , { text : 'Delete' , key : '4' } , 
]);

  const pressHandler = (key) => {
    setTodo((prevTodes) => {
      return prevTodes.filter(todo => todo.key != key);
    })
  }


  const submitHandler = (text) => {
    if(text.length >= 3){
    setTodo((prevTodes) => {
      return [
        { text: text , key : Math.random.toString},
        ...prevTodes
      ];
    })
  } else {
    Alert.alert('OOPS!' , 'Todo Must Be 3 Char Long' , [
      {text : 'understood'}
    ]);
  }
  }
  return (
    <TouchableWithoutFeedback
    onPress={Keyboard.dismiss}
    >
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
       <AddTodo submitHandler={submitHandler}/> 
        <View style={styles.list}>

        <FlatList 
          data={todo}
          renderItem={({item}) => (
          <TodoItem item={item} pressHandler={pressHandler}/>
          )}
        />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : '#ffff',
    paddingTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  content : {
    padding : 40,
    flex : 1,
  },
  list:{
    marginTop : 20,
    flex : 1,
  }
});
