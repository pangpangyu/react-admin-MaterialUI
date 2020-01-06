/**icon**/
import Dashboard from "@material-ui/icons/Dashboard";
import Unarchive from "@material-ui/icons/Unarchive";
/**page**/
import Index from "../views/index.js";
import User from "../views/user/user.js";
import Product from "../views/product/product.js";
import Setting from "../views/setting/setting.js";

const dashboardRoutes = [
  {
    path: "/index",
    name: "控制台",
    icon: Dashboard,
    component: Index,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User",
    icon: 'U',
    component: User,
    layout: "/admin"
  },
  {
    path: "/product",
    name: "product",
    icon: "P",
    component: Product,
    layout: "/admin"
  },
  {
    path: "/setting",
    name: "setting",
    icon: Unarchive,
    component: Setting,
    layout: "/admin"
  }
];

export default dashboardRoutes;