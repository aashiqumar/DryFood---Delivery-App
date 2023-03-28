import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({ imgUrl, title, color, h, w }) => {
  return (
    <TouchableOpacity className="pr-2" >
        <View style={{backgroundColor: color, height: 80, width: 80}} className='h-20 w-20 rounded items-center'>
            <Image
                source={{ 
                    uri: imgUrl
                }}
                style={{ height: h, width: w}}
                className='h-20 w-20 rounded px-2 items-center'
                
            />
            <Text className="absolute bottom-1 left-1 text-white font-bold ">{title}</Text>
        </View>
        
    </TouchableOpacity>
  )
}

export default CategoryCard