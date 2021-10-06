import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import OrderDetail from "../views/OrderDetail.vue";
import HistoryView from "../views/History.vue";
import SearchView from "../views/SearchView.vue";
import MapView from "../views/MapView.vue";
import CheckOrder from "../views/CheckOrder"
import Product from '../views/Product'
import FinishCheck from '../views/FinishCheck'
import PostMessage from '../views/PostMessage'
import Calculate from '../views/Calculate'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/orderDetail",
    name: "OrderDetail",
    component: OrderDetail,
  },
  {
    path: "/historyView",
    name: "historyView",
    component: HistoryView,
  },
  {
    path: "/searchView",
    name: "searchView",
    component: SearchView,
  },
  {
    path: "/mapView",
    name: "mapView",
    component: MapView,
  },
  {
    path: "/checkOrder",
    name: "checkOrder",
    component: CheckOrder,
  },
  {
    path: "/product",
    name: "product",
    component: Product,
  },
  {
    path: "/finishCheck",
    name: "finishCheck",
    component: FinishCheck,
  },
  {
    path: "/postMessage",
    name: "postMessage",
    component: PostMessage,
  },
  {
    path: "/calculate",
    name: "calculate",
    component: Calculate,
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
