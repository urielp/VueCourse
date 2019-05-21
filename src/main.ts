import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
//import Vuetify from 'vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee);

//Vue.use(Vuetify);
Vue.use(BootstrapVue);
// Vue.use(Card);
// Vue.use(Button);
// Vue.use(Layout);

// import Navbar from "bootstrap-vue/es/components/navbar"
// Vue.use(Navbar)
// import Form from "bootstrap-vue/es/components/form"
// Vue.use(Form)
// import FormInput from "bootstrap-vue/es/components/form-input"
// Vue.use(FormInput)
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
