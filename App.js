import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const App = () => {
  return (
    <SafeAreaView>
      <Text style={{fontFamily: 'Montserrat-Light', fontSize: 30}} >this is just for truing</Text>
      <MaterialIcons name='search' size={22} />
    </SafeAreaView>
  )
}

export default App
