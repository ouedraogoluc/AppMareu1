import 'react-native-gesture-handler';
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListReunions from './src/ListReunions'
import AddReunions from './src/AddReunions'
import EditReunion from './src/EditReunion'
import LoginScreen from './src/LoginScreen'
import SignUpScreen from './src/SignUpScreen'
import ProfileScreen from './src/ProfileScreen'
import { Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'
import {View,TouchableOpacity,StyleSheet} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 
import Filtre from './src/Filtre'
import FiltreHeur from './src/FiltreHeur'
import FiltreLieu from './src/FiltreLieu'
const Stack = createStackNavigator();

const App = ({navigation}) => {
    const state = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={state}>
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="auth" component={LoginScreen} /> 
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen
              name="Home"

              component={ListReunions}
              options={{ title: 'Mar eu', 
              backgroundColor:"red",
                       headerRight: () => (
                        <View style={{
                          flexDirection:'row',
                          justifyContent: 'space-between',
                          width:80,
                          marginRight:20
                        }}>
                            <TouchableOpacity   onPress ={()=>navigation.navigate(Filtre)} activeOpacity={0.5}>
                            <MaterialIcons name="filter-list" size={24} color="blue" />
                            </TouchableOpacity>
                     </View>
                  ),
              }}
            />
            <Stack.Screen name="Add" component={AddReunions} /> 
            <Stack.Screen name="Profile" component={ProfileScreen} /> 
            <Stack.Screen name="Edit" component={EditReunion} /> 
            <Stack.Screen name="heure" component={FiltreHeur} /> 
            <Stack.Screen name="lieu" component={FiltreLieu} /> 
    
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  
}
export default App

const styles = StyleSheet.create({
  header: {
      backgroundColor: 'red'
  }
});
