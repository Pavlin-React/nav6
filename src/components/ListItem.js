import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const ListItem = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'space-between'
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: 55,
            height: 55,
            borderRadius: 10,
            marginRight: 8,
          }}
          source={require('../assets/images/spiderman.webp')}
        />
        <View>
          <Text
            style={{
              color: '#333',
              fontSize: 14,
              fontFamily: 'Roboto-Medium',
            }}>
            Marvel
          </Text>
          <Text
            style={{
              color: '#333',
              fontSize: 14,
              fontFamily: 'Roboto-Medium',
              textTransform: 'uppercase',
            }}>
            Spider Man
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#0aada8',
          padding: 10,
          width: 100,
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 14,
            fontFamily: 'Roboto-Medium',
            textAlign: 'center'
          }}>
          Play
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;
