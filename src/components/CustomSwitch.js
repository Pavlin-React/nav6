import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const CustomSwitch = ({
  selectionMode,
  option1,
  option2,
  onSelectSwitch
}) => {

  let [getSelectionMode, setSelectionMode] = useState(selectionMode)

  let updateSwitchData = (value) => {
    setSelectionMode(value)
    onSelectSwitch(value)
  }

  return (
    <View
      style={{
        width: '100%',
        height: 44,
        backgroundColor: '#e4e4e4',
        borderRadius: 10,
        justifyContent: 'center',
        borderColor: '#ad40af',
        flexDirection: 'row'
      }}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(1)}
        style={{
          flex: 1,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: getSelectionMode == 1 ? '#ad40af' : '#e4e4e4'
        }}
      >
        <Text>{option1}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(2)}
        style={{
          flex: 1,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: getSelectionMode == 2 ? '#ad40af' : '#e4e4e4'
        }}
      >
        <Text>{option2}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CustomSwitch
