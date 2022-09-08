import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ProductDescription from '@/components/ProductDescription'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ProductDescription/:id',
      name: 'ProductDescription',
      component: ProductDescription
    },

  ]
})
