import { defineStore } from 'pinia'

export const MusicianStore = defineStore('musicians', {
  state: () => {
    return {
      loaded: false,
      errors: {},
      bands: [],
      musician: {},
      musicians: [],
      pagination: {}
    }
  },

  actions: {
    async index(path) {
      this.loaded = false;
      this.pagination = {};
      this.axios.get(path).then(response => {  
        this.loaded = true;
        this.pagination = response.data.pagination;
        this.bands = response.data.bands;    
        this.musicians = response.data.musicians;        
      })  
    },
    async new() {
      this.errors = {}; 
      this.axios.get(`/musicians/new`).then(response => {             
        this.musician = response.data.musician;
      })  
    },
    async create() {
      this.errors = {};
      return this.axios.post(`/musicians`, this.musician).then(response => {        
        this.musician = response.data.musician;
        return true;
      }).catch(error => {
        this.errors = error.response.data.errors;
        return false;
      }) 
    },
    async edit(id) {
      this.errors = {};
      this.axios.get(`/musicians/${id}/edit`).then(response => {             
        this.musician = response.data.musician;
      })  
    },
    async update(id) {
      this.errors = {};
      return this.axios.put(`/musicians/${id}`, this.musician).then(response => {        
        return true;
      }).catch(error => {
        this.errors = error.response.data.errors;
        return false;
      }) 
    },
    async destroy(id) {
      this.errors = {};
      return this.axios.delete(`/musicians/${id}`).then(response => {        
        return true;
      }).catch(error => {
        this.errors = error.response.data.errors;
        return false;
      }) 
    }
  },
})