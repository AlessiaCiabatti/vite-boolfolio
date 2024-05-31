<script>
import axios from 'axios';
import {store} from './data/store';

import ProjectCard from './components/partials/ProjectCard.vue';

  export default {
    components: {
    ProjectCard
  },
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

    
    <!-- <ul>
      <li v-for="project in projects" :key="project.id">{{ project.id }} - {{ project.title }}</li>
    </ul> -->

    <div class="container">
      <h1>Projects List</h1>
      
      <div class="row">
        <div class="col-md-4 mt-5" v-for="project in projects" :key="project.id">
          <ProjectCard :project="project" />
        </div>
      </div>
    </div>
  </div>

  <div>

  </div>
</template>

<style lang="scss" scoped>

</style>