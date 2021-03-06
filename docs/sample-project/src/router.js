import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AForm from './views/AForm.vue'
import LifeCycle from './views/LifeCycle.vue'
import Syntax from './views/Syntax.vue'
import WatchData from './views/WatchData.vue'
import UseComponent from './views/UseComponent.vue'
import FileObject from './views/FileObject.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/aform',
      name: 'aform',
      component: AForm
    },
    {
      path: '/lifecycle',
      name: 'lifecycle',
      component: LifeCycle
    },
    {
      path: '/syntax',
      name: 'syntax',
      component: Syntax
    },
    {
      path: '/watchdata',
      name: 'watchdata',
      component: WatchData
    },
    {
      path: '/usecomponent',
      name: 'usecomponent',
      component: UseComponent
    },
    {
      path: '/fileobject',
      name: 'fileobject',
      component: FileObject
    }
  ]
})
