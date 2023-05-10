import { View, Text } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PosterCard from '../../components/PosterCard'
import { setCurrentPosterData } from '../../redux/slices/currentSlice'
import { styles } from './style'

const CategorieScreen = () => {
    const app = useSelector(state => state.app)
    const data = app.recomendedProduct
    const dispatch = useDispatch;
    const current = useSelector(state => state.current)
    console.log(data[0]);
  return (
    <View style={styles.Container}>
      {data.map((item,index) => 
        current.currentCategorie === item.product_type && <PosterCard
        onPress={() => {
              dispatch(setCurrentPosterData(item));
            }}
            key={index}
            data={item}
         />
      )}
    </View>
  )
}

export default CategorieScreen