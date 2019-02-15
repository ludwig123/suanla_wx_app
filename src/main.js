import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'

import 'mpvue-weui/src/style/weui.css'

Vue.config.productionTip = false
Vue.use(VueResource)
App.mpType = 'app'

const app = new Vue(App)

app.$mount()
