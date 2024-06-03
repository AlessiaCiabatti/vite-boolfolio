<script>
import axios from 'axios';
import {store} from '../data/store';

  export default {
    name: 'Blog',

    data(){
      return{
        projects: [],
      }
    },

    methods:{
    getApi(){
      axios.get(store.apiUrl)
      .then(result =>{
        this.projects = result.data.data
      })
      .catch(error => {
        console.log(error.message);
      })
    }
  }
  }



</script>

<template>
  <div>
    <h1>I miei post</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">{{ project.id }} - {{ project.title }}</li>
    </ul>

  </div>
</template>

<style lang="scss" scoped>

</style>