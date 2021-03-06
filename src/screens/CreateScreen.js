import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {Context} from './../context/BlogContext';

const CreateScreen = ({navigation}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const {addBlogPost} = useContext(Context);

    return(
        <View>
            <Text style={styles.label}>Enter Title:</Text>
            <TextInput value={title} onChangeText={(text) => setTitle(text)} style={styles.input}/>
            <Text style={styles.label}>Enter Content:</Text>
            <TextInput value={content} onChangeText={(text) => setContent(text)} style={styles.input}/>
            <TouchableOpacity onPress={()=>addBlogPost(title,content,()=>navigation.navigate('Index'))} style={styles.button}>
                <Text style={styles.buttonText}>Save Post</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontSize:20,
        marginBottom: 5
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 16,
        color: 'whitesmoke'
    },
    button: {
        padding: 10,
        margin: 8,
        backgroundColor: '#dc79ff',
        borderRadius: 5,
        width: '50%',
        alignSelf: 'center'
    },
   input:{
       borderColor: 'black',
       borderWidth: 1,
       padding: 10,
       margin:5
   }
});

export default CreateScreen;
