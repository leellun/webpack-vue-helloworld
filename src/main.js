import Vue from 'vue'
import App from './App.vue'
Vue.directive('title', {
    inserted: function (el, binding) {
        document.title = el.dataset.title
    }
})

Vue.config.productionTip = false

new Vue({
    el: '#app',
    render: h => h(App)
})
