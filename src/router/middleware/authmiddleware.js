/* eslint-disable no-else-return */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Navigate } from "react-router-dom";

function AuthMiddleware(props) {
  const token = JSON.parse(localStorage.getItem("token"));
  const { route } = props;
  const isPublicRoute = route?.meta?.isPublicRoute;

  //this is userRole that will be dynamic according to user
  const userRole = "admin";

  if (!isPublicRoute && !token) {
    /**
     ** If user is not Logged in & route meta is undefined
     ** OR
     ** If user is not Logged in & route.meta.isPublicRoute, !route.meta.publicRoute are undefined
     ** Then redirect user to login
     */

    return <Navigate to="/" />;
  } else if (!isPublicRoute && !route.authorizedRoles?.includes(userRole)) {
    // ** If route has meta and authRole and user is Logged in then redirect user to home page (DefaultRoute)
    // return <Redirect to="/" />;
    return <Navigate to="/" />;
  } else {
    // ** If none of the above render component
    return <route.component {...props} />;
  }
}

export default AuthMiddleware;
