import Vue from 'vue'
import Router from 'vue-router'
import firstPage from './components/pages/myFirstVuePage'
import newRoutePage from './components/pages/newRoutePage'

Vue.use(Router)

const routes = [
    { path: '/my-new-vue-route', 
      component: firstPage 
    },
    { path: '/new-route', 
      component: newRoutePage 
    },
  
  ] 


export default new Router({
    mode : 'history',
    routes
    
})
