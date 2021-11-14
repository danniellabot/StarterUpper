import React from 'react';


// import { store } from '../state/store'
import { AuthenticatedUserProvider } from './navigation/AuthenticatedUserProvider';
import RootNavigator from './navigation/RootNavigator';


/**
 * Wrap all providers here
 */

export default function Routes() {
  return (
   
  
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
    
  
  );
}
