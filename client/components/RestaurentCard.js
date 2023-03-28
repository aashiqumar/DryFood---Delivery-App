import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StarIcon, MapPinIcon } from 'react-native-heroicons/outline'

const RestaurentCard = ({ id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat }) => {
  return (
    <TouchableOpacity className="bg-white mr-3">
      <View>
        <Image
            source={{ uri: imgUrl }}
            className="h-36 w-64"
        />
      </View>

      <View className="px-3 pb-3">
        <Text className="pt-2 font-bold text-lg">{title}</Text>
        <View className="flex-row items-center space-x-1">
            <StarIcon size={22} fill="#006aff" color="#006aff"/>
            <Text className="text-xs text-blue-600 font-bold" text>{rating} 
                <Text className="text-xs text-gray-500"> . {genre}</Text>
            </Text> 
        </View>

        <View className="pt-2 flex-row items-center space-x-1">
            <MapPinIcon size={20} color="#808080"/>
            <Text className="text-gray-500">Nearby . {address}</Text>
        </View>

      </View>
    </TouchableOpacity>
  )
}

export default RestaurentCard