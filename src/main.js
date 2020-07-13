import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAwesomeSwiper from "vue-awesome-swiper";
import {
  Col,
  Row,
  Container,
  Header,
  Main,
  Footer,
  Input,
  Carousel,
  CarouselItem,
  Button,
  PageHeader,
  Slider,
  Card,
  Tabs,
} from "element-ui";
// 基础组件
Vue.use(Col)
  .use(Row)
  .use(Container)
  .use(Header)
  .use(Main)
  .use(Footer)
  .use(Button);
// 表格组件
Vue.use(Input).use(Carousel).use(CarouselItem).use(Slider);
// 通知组件
// 导航组件
Vue.use(PageHeader).use(Tabs);
// 其它组件
Vue.use(Card);
// Swiper
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;
// 创建vuebus
Vue.prototype.bus = new Vue();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
