import React, {useContext} from 'react';
import {Outlet, Navigate} from 'react-router-dom';
import AuthContext from '../AuthContext';

function ProtectedRoutes() {

  const {isAuth} = useContext(AuthContext);
  return (
    isAuth ? <Outlet/> : <Navigate to="/login" />
  )
}
export default ProtectedRoutes