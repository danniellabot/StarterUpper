import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'


const  NavigationIcon = ({route, isFocused}) => {
  const renderIcon = (route, isFocused) =>{
    let height = 20;
    let width = 20;
    

  
    switch (route) {
      case "Home":
        return isFocused?<Icon name="home" type="feather" color='white' size={26} />:<Icon name="home" type="feather" color='gray' size={26} />
      case "Search":
        return isFocused?<Icon name="search" type="feather" color='white' size={26} />:<Icon name="search" type="feather" color='gray' size={26} />
      case "Friends":
        return isFocused?<Icon name="users" type="feather" color='white' size={26} />:<Icon name="users" type="feather" color='gray' size={26} />
      case "Create":
        return  isFocused?<Icon name="file-plus" type="feather" color='white' size={26} />:<Icon name="file-plus" type="feather" color='gray' size={26} />
      default:
        break;
    }
  }

  return (
    <View>
      {renderIcon(route, isFocused)}
    </View>
  
  )
}

const styles = StyleSheet.create({})

export default NavigationIcon