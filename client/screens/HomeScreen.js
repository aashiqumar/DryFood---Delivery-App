import {  View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline"

import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import client from '../../server/sanity';

const HomeScreen = () => {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    });

    

 
  return (
    <SafeAreaView className="bg-white pt-5">
        
        <View className="flex-row px-1 pb-3 items-center mx-4 space-x-2">
            <Image 
                source={{
                    uri: 'https://links.papareact.com/wru'
                }}
                className='h-7 w-7 bg-gray-300 p-4 rounded-full'
            />
            <View className="flex-1">
                <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                <Text className="font-bold text-xl">Current Location
                    <ChevronDownIcon size={20} />
                </Text>
            </View>

            <UserIcon size={35} />
        </View>

        <View className='flex-row items-center space-x-2 pb-2 mx-4 px-1'>
            <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
                <MagnifyingGlassIcon />
                <TextInput
                    placeholder='Restaurents and Cuisines'
                    keyboardType='default'
                    style={{borderRadius:10}}
                />
            </View>
            <AdjustmentsVerticalIcon/>
        </View> 
        
        <ScrollView className="bg-gray-100"
            contentContainerStyle={{
                paddingBottom: 100,
            }}
            >
            <Categories/>

            <FeaturedRow
                id="123"
                title="Featured"
                description="Paid placements from our partners"
            />

            <FeaturedRow
                id="1234"
                title="Tasty Discounts"
                description="Everyone's been enjoying these juicy discounts!"  
            />

            <FeaturedRow
                id="123"
                title="Offers near you!"
                description="Why not support your local restaurent tonight"
                
            />
        </ScrollView>
           
    </SafeAreaView>
  )
}

export default HomeScreen