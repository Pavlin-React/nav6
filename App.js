import React from 'react'
import { SafeAreaView,TouchableOpacity, Text, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import GamingImg from './assets/game.svg'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

let Stack = createNativeStackNavigator()

let App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Main' component={Main} options={{headerShown: false}} />
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const Main = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <View style={{marginTop: 20}} >
        <Text
          style={{
            fontFamily: 'Montserrat-Light',
            fontSize: 30,
            color: '#20315F'
            }}>
            GAMEON
        </Text>
      </View>
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
      <GamingImg width={300} height={300} style={{transform: [{rotate: '-15deg'}]}} />
    </View>
    <TouchableOpacity
      onPress={() => navigation.navigate('Home')}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        backgroundColor: '#ad40af',
        padding: 20,
        borderRadius: 5,
        marginBottom: 50,

        }} >
      <Text style={{color: 'white', fontSize: 18, fontFamily: 'Roboto-MediumItalic'}} >
        Let's Begin
      </Text>
      <View>
          <MaterialIcons name='arrow-forward-ios' size={32} color='white'/>
        </View>
    </TouchableOpacity>
      
    </SafeAreaView>
  )
}

let Home = () => {
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
    <Text>
      Home Screen
    </Text>
  </View>
  )
}

export default App
