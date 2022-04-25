import { defineStore } from 'pinia'
import axios from "axios"

export const MusicianStore = defineStore('musicians', {
  state: () => {
    return {
      musician: {},
      musicians: []
    }
  },

  actions: {
    async index() {
      axios.get('/api/musicians').then(response => {      
        this.musicians = response.data.musicians;
      })  
    },
    async show(id) {
      axios.get(`/api/musicians/${id}`).then(response => {      
        this.musician = response.data.musician;
      })  
    }
  },
})