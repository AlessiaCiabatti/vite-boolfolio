<script>
import axios from 'axios';
import {store} from './data/store';

  export default {
    data(){
      return{
        projects: [],
      }
    },

    methods:{
      getApi(){
        axios.get(store.apiUrl)
        .then(result =>{
          console.log(result.data);
          this.projects = result.data
        })
        .catch(error =>{
          console.log(error.messsage);
        })
      }
    },

    mounted(){
      this.getApi();
    }
  }
</script>


<template>
  <div>
    <h1>List Projects</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">{{ project.id }} - {{ project.title }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

</style>