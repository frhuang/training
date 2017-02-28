import Vue from 'vue';

import {
  Button, Cell, Header, Swipe, SwipeItem, Navbar, TabItem, TabContainer, TabContainerItem
} from 'mint-ui';


import App from './App'
import MyHeader from './components/MyHeader'
import router from './router'

Vue.component(MyHeader.name, MyHeader)
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
