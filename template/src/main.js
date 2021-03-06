{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import 'onsenui/css/onsenui.css'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import 'onsenui/css/onsen-css-components.css'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueOnsen from 'vue-onsenui'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#vuex}}
import store from './store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/vuex}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(VueOnsen){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#vuex}}
  store,
  {{/vuex}}
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
