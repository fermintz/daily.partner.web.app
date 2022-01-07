import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import OrderDetail from "../views/OrderDetail.vue";
import HistoryView from "../views/History.vue";
import SearchView from "../views/SearchView.vue";
import MapView from "../views/MapView.vue";
import Product from '../views/Product'
import PostMessage from '../views/PostMessage'
import Calculate from '../views/Calculate'

import ProductCheck from "../views/check/product"
import AddCharge from "../views/check/addCharge"
import FinishCheck from '../views/check/finish'
import Question from "../views/check/question"

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
    path: "/product",
    name: "product",
    component: Product,
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


  {
    path: "/productCheck",
    name: "productCheck",
    component: ProductCheck,
  },
  {
    path: "/addCharge",
    name: "addCharge",
    component: AddCharge,
  },

  {
    path: "/finishCheck",
    name: "finishCheck",
    component: FinishCheck,
  },
  
  {
    path: "/question",
    name: "question",
    component: Question,
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
