import { defineStore } from 'pinia'

export const MusicianStore = defineStore('musicians', {
  state: () => {
    return {
      musician: {},
      musicians: []
    }
  },

  actions: {
    async index() {
      this.axios.get('/musicians').then(response => {      
        this.musicians = response.data.musicians;
      })  
    },
    async show(id) {
      this.axios.get(`/musicians/${id}`).then(response => {      
        this.musician = response.data.musician;
      })  
    }
  },
})