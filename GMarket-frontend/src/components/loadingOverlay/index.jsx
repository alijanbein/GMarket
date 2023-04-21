import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { styles } from './style'
import { COLORS } from '../../contansts/colors'

const LoadingOverlay = () => {
  return (
  
        <ActivityIndicator
          style={styles.overlay}
          size={50}
          color={COLORS.main}
        />
     
  )
}

export default LoadingOverlay