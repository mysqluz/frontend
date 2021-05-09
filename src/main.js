/*!

 =========================================================
 * Vue Now UI Kit - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/now-ui-kit
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)

 * Designed by www.invisionapp.com Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from 'vue';
import App from './App.vue';
// You can change this import to `import router from './starterRouter'` to quickly start development from a blank layout.
import router from "./router";
import store from './store';
import {getAPI} from "@/axios-api";
import NowUiKit from './plugins/now-ui-kit';
import vueCodeditor from "vue-codeditor";

Vue.config.productionTip = false;
Vue.component(vueCodeditor);

// set auth header
// getAPI.defaults.headers.common['Authorization'] = `Bearer ${store.state.token}`;

Vue.use(NowUiKit);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
