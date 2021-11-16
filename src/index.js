import React from 'react';


// import { store } from '../state/store'
import { AuthenticatedUserProvider } from './navigation/AuthenticatedUserProvider';
import RootNavigator from './navigation/RootNavigator';
import { Platform } from 'react-native';
import { Button, colors, ThemeProvider } from 'react-native-elements';
//import { useColorScheme } from 'react-native-appearance';


  // let colorScheme = useColorScheme();

  //<ThemeProvider useDark={colorScheme === 'dark'}></ThemeProvider>

const theme = {
  colors: {
    ...Platform.select({
      default: colors.platform.android,
      ios: colors.platform.ios,
    }),
  },
};



export default function Routes() {
  return (
   
   <ThemeProvider theme={theme}>
   {/* <ThemeProvider useDark={true}> */}
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  </ThemeProvider>
    
  
  );
}
