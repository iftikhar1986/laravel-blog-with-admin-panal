import Vue from 'vue'
import Router from 'vue-router'
import firstPage from './components/pages/myFirstVuePage'
import newRoutePage from './components/pages/newRoutePage'
import hooks from './components/pages/basic/hooks.vue'
import methods from './components/pages/basic/methods.vue'

Vue.use(Router)

const routes = [
    { path: '/my-new-vue-route', 
      component: firstPage 
    },
    { path: '/new-route', 
      component: newRoutePage 
    },

    //vue hooks
    { path: '/hooks', 
      component: hooks 
    },

     // more basics
     { path: '/methods', 
     component: methods 
   },
  
  ] 


export default new Router({
    mode : 'history',
    routes
    
})
