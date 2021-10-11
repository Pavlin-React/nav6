import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Carousel from 'react-native-snap-carousel';
import {sliderData} from '../model/data'
import { windowWidth} from '../utils/Dimensions'
import BannerSlider from '../components/BannerSlider'

let HomeScreen = () => {

  let renderBanner = ({index, item}) => {
    return <BannerSlider data={item} />
  }

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView style={{padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 15,
          }}>
          <Text style={{fontSize: 16, fontFamily: 'Roboto-Medium'}}>
            Hello John Smith
          </Text>
          <ImageBackground
            style={{width: 35, height: 35}}
            imageStyle={{borderRadius: 25}}
            source={require('../assets/images/user-profile.jpg')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 20,
            borderWidth: 1,
            borderRadius: 8,
            padding: 10,
            borderColor: '#c6c6c6',
          }}>
          <Feather
            name="search"
            size={20}
            color="#c6c6c6"
            style={{marginRight: 5}}
          />
          <TextInput placeholder="Search" />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 16, fontFamily: 'Roboto-Medium'}}>
            Upcoming Games{' '}
          </Text>
          <TouchableOpacity>
            <Text style={{color: '#0aada8'}}>See All</Text>
          </TouchableOpacity>
        </View>
        <Carousel
          ref={c => {
            this._carousel = c;
          }}
          data={sliderData}
          renderItem={renderBanner}
          sliderWidth={windowWidth - 40}
          itemWidth= {300}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
