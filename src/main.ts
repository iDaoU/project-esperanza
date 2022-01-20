import { initializeApp } from 'firebase/app';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCK_koEEoGg5ZUUp6GUDh8q3CAU5XEPDrc',
  authDomain: 'esperanza-98d0f.firebaseapp.com',
  projectId: 'esperanza-98d0f',
  storageBucket: 'esperanza-98d0f.appspot.com',
  messagingSenderId: '407437136178',
  appId: '1:407437136178:web:fdf7a500891c54d682872b',
  measurementId: 'G-3N5T1P85J5',
};

// Initialize Firebase
initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
