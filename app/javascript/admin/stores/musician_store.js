import { defineStore } from 'pinia'

export const MusicianStore = defineStore('musicians', {
  state: () => {
    return {
      progress: '',
      errors: {},
      bands: [],
      musician: {},
      musicians: [],
      pagination: {}
    }
  },

  actions: {
    async index(path) {
      return this.Api.get(path).then(response => {  
        this.pagination = response.data.pagination;
        this.bands = response.data.bands;    
        this.musicians = response.data.musicians;        
      })  
    },
    async new() {
      this.errors = {}; 
      this.musician = {};
      return this.Api.get(`/musicians/new`).then(response => {             
        this.musician = response.data.musician;
      })  
    },
    async create() {
      this.errors = {};
      this.progress = 'loading';
      return this.Api.post(`/musicians`, this.musician).then(response => {        
        this.musician = response.data.musician;
        return true;
      }).catch(error => {
        this.errors = error.response.data.errors;
        return false;
      }).finally(() => {
        this.progress = '';
      })
    },
    async edit(id) {
      this.errors = {};
      this.musician = {};
      return this.Api.get(`/musicians/${id}/edit`).then(response => {             
        this.musician = response.data.musician;
      })  
    },
    async update(id) {
      this.errors = {};
      this.progress = 'loading';
      return this.Api.put(`/musicians/${id}`, this.musician).then(response => {        
        this.errors = {};
      }).catch(error => {
        this.errors = error.response.data.errors;
      }).finally(() => {
        this.progress = '';
      })
    },
    async destroy(id) {      
      return this.Api.destroy(`/musicians/${id}`).then(response => {  
        this.errors = {};      
      }).catch(error => {
        this.errors = error.response.data.errors;
      }) 
    }
  }
})