import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 15,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >

        <CategoryCard 
            imgUrl="https://i.postimg.cc/K8K4Yz0d/price-tag.png" 
            title='Offers' 
            color="#ff7272" 
            h={80}
            w={80}
        />
        <CategoryCard 
            imgUrl="https://i.postimg.cc/wjg8fxrS/Pizza.png" 
            title='Pizza'
            color="#feb60d"
            h={80}
            w={80}
        />
        <CategoryCard 
            imgUrl="https://i.postimg.cc/9fqNBvpD/thai-food.webp" 
            title='Thai'
            color="#0de6fe"
            h={80}
            w={80}
        />
        <CategoryCard 
            imgUrl="https://i.postimg.cc/Hkj7FmFk/landing-feature-dish.png" 
            title='Asian'
            color="#9ba4fc"
            h={80}
            w={80}
        />
        <CategoryCard 
            imgUrl="https://i.postimg.cc/FR6ynRHm/sushi.png" 
            title='Sushi'
            color="#fdb39a"
            h={80}
            w={80}
        />
        <CategoryCard 
            imgUrl="https://i.postimg.cc/7hYg62tg/western.png" 
            title='European'
            color="#d6fbaa"
            h={80}
            w={80}
        />
        <CategoryCard 
            imgUrl="https://i.postimg.cc/XqG9db3J/indian.png" 
            title='Indian'
            color="#060efa"
            h={80}
            w={80}
        />


    </ScrollView>
  )
}

export default Categories