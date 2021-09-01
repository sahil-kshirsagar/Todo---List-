import React  from 'react';
import { TextInput, View , StyleSheet , Button} from 'react-native';
import { useState } from 'react';

export default function AddTodo({submitHandler}){
    const [text , setText] = useState('');

    const changeHadler = (val) => {
        setText(val);
    } 
    return(
        <View>
            <TextInput
            style={styles.input}
            placeholder = 'new Todo...'
            onChangeText={changeHadler}
            />
            <Button onPress={() => submitHandler(text)} title='add todo' color='coral' />
        </View>
    )
}

const styles = StyleSheet.create({
    input : {
        marginBottom : 10 ,
        paddingHorizontal : 8 ,
        paddingVertical : 6 ,
        borderBottomWidth: 1 ,
        borderBottomColor : '#ddd',
    }
})