import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function AuthNavigator({children}) {
    // const {isLoggedIn}=useAuth();
    const location=useLocation();
    // const [state,setState]=useState({...location});
   console.log(location);    
    
    if (!localStorage.getItem("access_token")) {
        // Redirect to login page, and save the current location in state
        return <Navigate to="/login" state={{ from: location,course:location.state.course }} replace />;
    }else
    return <>
    {React.cloneElement(children, {state: location.state})}
 </>

}

export default AuthNavigator;

