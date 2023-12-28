import { defineStore } from 'pinia'

export const MusicianStore = defineStore('musicians', {
  state: () => {
    return {
      musicians: [],
      musician: {}      
    }
  },

  actions: {
    async index(path) {
      return this.Bpi.get('/musicians').then(response => {      
        this.musicians = response.data.musicians;
      })  
    },
    async show(id) {
      return this.Bpi.get(`/musicians/${id}`).then(response => {      
        this.musician = response.data.musician;
      })  
    }
  }
})