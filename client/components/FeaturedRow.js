import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurentCard from './RestaurentCard'

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View >

        <View className="flex-row justify-between mt-4 px-4">
            <Text className="font-bold text-xl">{title}</Text>
            <ArrowRightIcon/>
        </View>

        <Text className="pl-4">{description}</Text>

        <ScrollView
            horizontal
            contentContainerStyle={{
               paddingLeft: 15
            }}
            showsHorizontalScrollIndicator={false}
            className="pt-4"
        >

            <RestaurentCard
                id={123}
                imgUrl="https://i.postimg.cc/Bvmh7Pkn/360-F-260128861-Q2tt-KHo-Vw2-Vrmv-Itxy-CVBn-Ey-M1852-Mo-J.jpg"
                title="The Asian Food"
                rating={4.5}
                genre="Asian"
                address="123 Main Street"
                short_description="Test Description"
                dishes={[]}
                long={20}
                lat={0}
            />

            <RestaurentCard
                id={123}
                imgUrl="https://i.postimg.cc/Bvmh7Pkn/360-F-260128861-Q2tt-KHo-Vw2-Vrmv-Itxy-CVBn-Ey-M1852-Mo-J.jpg"
                title="Nandos"
                rating={4.5}
                genre="Asian"
                address="123 Main Street"
                short_description="Test Description"
                dishes={[]}
                long={20}
                lat={0}
            />

            <RestaurentCard
                id={123}
                imgUrl="https://i.postimg.cc/Bvmh7Pkn/360-F-260128861-Q2tt-KHo-Vw2-Vrmv-Itxy-CVBn-Ey-M1852-Mo-J.jpg"
                title="Nandos"
                rating={4.5}
                genre="Asian"
                address="123 Main Street"
                short_description="Test Description"
                dishes={[]}
                long={20}
                lat={0}
            />    

        </ScrollView>
    </View>
  )
}

export default FeaturedRow