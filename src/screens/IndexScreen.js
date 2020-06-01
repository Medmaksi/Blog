import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import {Context} from '../context/BlogContext';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const IndexScreen = ({navigation}) => {
    const {state, deleteBlogPost} = useContext(Context);

    const LeftActions = (listItem) => {
            return(
                <TouchableOpacity style={styles.iconContainer} onPress={()=>{deleteBlogPost(listItem.id)}}>
                    <FontAwesome5 name={'trash'} style={styles.icon}/>
                </TouchableOpacity>
            )
    }
  return (
    <View>

        <FlatList
            data={state}
            keyExtractor={(blogPost)=> (blogPost.id).toString()}
            renderItem={({item})=>{
                return(
                    <Swipeable renderLeftActions={() => LeftActions(item)}>
                        <View style={styles.row}>
                             <TouchableOpacity  onPress={() => navigation.navigate('Show', {id: item.id})}>
                                <Text style={styles.title}> {item.title} - {item.id}</Text>
                            </TouchableOpacity>
                        </View>
                    </Swipeable>
                   );
            }}
        />
    </View>
  );
};
/**/
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: 'gray',
        marginVertical: 1,
        backgroundColor: 'whitesmoke'
    },
    title: {
        fontSize: 18,
        margin:8
    },
    iconContainer:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    icon : {
        fontSize: 20,
        margin: 8,
        color: 'white'
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
    }
});

export default IndexScreen;
