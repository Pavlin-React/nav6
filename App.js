import React from 'react'
import { SafeAreaView,TouchableOpacity, Text, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import GamingImg from './assets/game.svg'

const App = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <View>
        <Text
          style={{
            fontFamily: 'Montserrat-Light',
            fontSize: 30,
            color: '#20315F'
            }}>
            GAMEON
        </Text>
      </View>
    <GamingImg width={300} height={300} />
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        backgroundColor: '#ad40af',
        padding: 20,
        borderRadius: 5,
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

export default App
