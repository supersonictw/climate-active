import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import idb from "./plugins/idb";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  idb,
  render: (h) => h(App),
}).$mount("#app");
