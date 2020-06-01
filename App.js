import 'react-native-gesture-handler';
import * as React from 'react';
import {TouchableOpacity,Text,StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from './src/context/BlogContext';
import CreateScreen from './src/screens/CreateScreen';
import ShowScreen from './src/screens/ShowScreen';
import IndexScreen from './src/screens/IndexScreen';
import EditScreen from './src/screens/EditScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Index" component={IndexScreen} options={({navigation})=>({ title: 'Index Screen', headerRight: () => (
                        <TouchableOpacity onPress={()=>navigation.navigate('Create')}><Text style={styles.createIcon}>+</Text></TouchableOpacity>
                    ) })}/>
                <Stack.Screen name="Show" component={ShowScreen} options={({navigation,route})=>({ title: `Post ${route.params.id}`, headerRight: () => (
                        <TouchableOpacity onPress={()=>navigation.navigate('Edit',{id: route.params.id})}><FontAwesome5 style={styles.createIcon} name={'edit'}></FontAwesome5></TouchableOpacity>
                    ) })}/>
                <Stack.Screen name="Create" component={CreateScreen} options={{ title: 'Create Screen' }}/>
                <Stack.Screen name="Edit" component={EditScreen} options={({route})=>({ title: `Post ${route.params.id}` })}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles= StyleSheet.create({
    createIcon: {
        fontSize: 25,
        padding: 5
    }
})

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
