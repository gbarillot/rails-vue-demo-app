import { defineStore } from 'pinia'

export const DashboardStore = defineStore('dashboard', {
  state: () => {
    return {
      metrics: {}
    }
  },

  actions: {
    async index() {
      return this.Api.get('/dashboard').then(response => {    
        this.metrics = response.data.metrics;        
      })  
    }
  }
})