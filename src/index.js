import Vue from 'vue';
import GridItem from './GridItem.vue';
import GridLayout from './GridLayout.vue';
import './css/gridlayout.css'

GridItem.install = Vue => Vue.component(GridItem.name, GridItem); 
GridLayout.install = Vue => Vue.component(GridLayout.name, GridLayout);

const components = [
  GridItem,
  GridLayout
]

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  GridItem, 
  GridLayout
};