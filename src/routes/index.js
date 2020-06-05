import React,{useContext} from 'react';
import {AuthContext} from '../contexts/auth'
import {View,ActivityIndicator, Text} from 'react-native'

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

function Routes() {
 const {signed} = useContext(AuthContext)

 return (
    signed ? <AppRoutes/> :  <AuthRoutes/>
  );
 
}

export default Routes;

/*
 if(loading){
   return (
   <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
     <ActivityIndicator size="large" color='#131313' />
   </View>
   )
 }
*/

  /*if (signed) {
    return 
    (
      <AppRoutes/>
    )
  } 
    
 return 
 (
    <AuthRoutes/>
 )
    */

