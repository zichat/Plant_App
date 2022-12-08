import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import categories from '../containers/categories'
import COLORS from '../containers/colors'

const CategoryList = () => {
    const [categoryIndex, setCategoryIndex] = useState(0)
  return (
    <View style={style.categoryContainer}>
        {categories.map((item, index) =>(
            <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={()=> setCategoryIndex(index)}>
                <Text style={[style.categoryText, categoryIndex === index && style.categoryTextSelected]}>
                    {item}
                </Text>
            </TouchableOpacity>
        ))}
    </View>
  )
}

const style = StyleSheet.create({
    categoryContainer:{
        flexDirection: 'row',
        marginTop: 30,
        marginBottom:20,
        justifyContent: 'space-between',
    },
    categoryText:{
        fontSize:16, color: COLORS.grey, fontWeight: 'bold',
    },
    categoryTextSelected:{
        color:COLORS.green,
        paddingBottom:5,
        borderBottomWidth:2,
        borderColor: COLORS.green,
    }
});

export default CategoryList