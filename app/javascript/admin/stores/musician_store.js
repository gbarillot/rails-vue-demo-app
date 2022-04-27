import { defineStore } from 'pinia'

export const MusicianStore = defineStore('musicians', {
  state: () => {
    return {
      errors: {},
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
    async show(path) {
      this.axios.get(path).then(response => {      
        this.musician = response.data.musician;
      })  
    },
    async update(path) {
      return this.axios.put(path, this.musician).then(response => {
        this.errors = {};
        return true;
      }).catch(error => {
        this.errors = error.response.data.errors;
        return false;
      }) 
    }
  },
})