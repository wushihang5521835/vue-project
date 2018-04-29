import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demo1 from '@/components/demo1'
import demo2 from '@/components/demo2'
import demo3 from '@/components/demo3'
import demo4 from '@/components/demo4'
import demo5 from '@/components/demo5'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: demo1
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: demo2
    },
    {
      path: '/demo3',
      name: 'demo3',
      component: demo3
    },
    {
      path: '/demo4',
      name: 'demo4',
      component: demo4
    },
    {
      path: '/demo5',
      name: 'demo5',
      component: demo5
    }
  ]
})
