import React from 'react';
import {Outlet, Navigate} from 'react-router-dom';

function ProtectedRoutes(  ) {
  let auth = {'token' : true}
  return (
    auth.token ? <Outlet/> : <Navigate to="/login" />
  )
}
// function ProtectedRoute( isAuth, Component, ...rest ) {
//   return (
//     <Route 
//         {...rest} render={ (props)=>{
//             if(isAuth){
//                 return <Component/>
//             } else{
//                 return <Navigate to={{pathname: '/login', state: {from: props.location}}} />
//             }
//         } }
//     />
//   )
// }

export default ProtectedRoutes