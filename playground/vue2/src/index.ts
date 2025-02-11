import 'ol-plot-vue/dist/style.css';
import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';

import App from './App.vue';
import Plot from 'ol-plot-vue';

Vue.config.productionTip = false;
Vue.use(VueCompositionAPI);
Vue.use(Plot);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
