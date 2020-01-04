/**icon**/
import DashboardIcon from "@material-ui/icons/Dashboard";
/**page**/
import Index from "../views/index.js";
import Dashboard from "../views/dashboard/dashboard.js";

const dashboardRoutes = [
  {
    path: "/admin",
    name: "index",
    icon: Dashboard,
    component: Index
  },
  {
    path: "/dashboard",
    name: "dashboard",
    icon: DashboardIcon,
    child:[
      {
        path: "/dashboard/dashboard",
        name: "dashboard",
        component: Dashboard
      },
    ]
  }
];

export default dashboardRoutes;