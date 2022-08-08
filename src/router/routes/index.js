import Dashboard from "../../pages/dashboard";
import { appRoutes } from "../../constants/RouteConstant/Routes";
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
