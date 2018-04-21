import Vue from 'vue'
import Router from 'vue-router'
import Cards from '@/components/Cards'
import scanQR from '@/components/ScanQR'
import unlockWithCode from '@/components/UnlockWithCode'
import bikeUnlocked from '@/components/BikeUnlocked'
import bikeLocked from '@/components/BikeLocked'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      component: Cards
    },
    {
      path: '/cards',
      component: Cards
    },
    {
    	path: '/scanQR/',
      component: scanQR
    },
    {
    	path: '/unlockWithCode/',
      component: unlockWithCode
    },
    {
    	path: '/bikeUnlocked/',
      component: bikeUnlocked
    },
    {
    	path: '/bikeLocked/',
      component: bikeLocked
    }
    
  ]
})