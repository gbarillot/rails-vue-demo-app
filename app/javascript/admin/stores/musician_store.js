import { defineStore } from 'pinia'

export const MusicianStore = defineStore('musicians', {
  state: () => {
    return {
      musician: {},
      musicians: [],
      pagination: {}
    }
  },

  actions: {
    async index(path) {
      this.axios.get(path).then(response => {  
        this.pagination = response.data.pagination;    
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