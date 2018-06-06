import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/Intro'
import Testimonials from '@/components/Testimonials'
import FunFaqs from '@/components/FunFaqs'
import Pics from '@/components/Pics'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Intro
    },
    {
      path: '/testimonials',
      component: Testimonials
    },
    {
      path: '/fun-faqs',
      component: FunFaqs
    },
    {
      path: '/pics',
      component: Pics
    }
  ]
})
