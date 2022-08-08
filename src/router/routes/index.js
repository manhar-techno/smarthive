import Dashboard from "../../pages/dashboard";
import { appRoutes } from "../../constants/RouteConstant/Routes";

/*
Approutes is passed down to authmiddleware in order to authenticate the user 
and give path and component to element in router
components which do not require authentication are given true isPublicRoute value
*/

const AppRoutes = [
  {
    path: appRoutes.Dashboard,
    component: Dashboard,
    meta: {
      isPublicRoute: true,
    },
  },
];

export default AppRoutes;
