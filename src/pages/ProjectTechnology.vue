<script>
import axios from 'axios';
import { store } from '../data/store';

  export default {
    name: 'ProjectTechnology',

    data(){
      return {
        technologyName: {},
        projects: [],
      }
    },

    methods:{
      getApi(slug){
        console.log(slug);
        axios.get(store.apiUrl + 'project-by-technology/' + slug)
        .then(result =>{
          console.log(result.data);
          this.technologyName = result.data.name;
          console.log(this.projects);
          this.projects = result.data.projects;
          console.log(this.projects);
        })
        .catch(error =>{
          console.log(error.message);
        })
      }
    },
    mounted(){
      this.getApi(this.$route.params.slug);
    }
  }
</script>

<template>
  <div>
    <h1>Project Technology: {{ technologyName }}</h1>

    <ul>
        <li v-for="project in projects" :key="project.id">
          {{ project.id }} -
          <router-link :to="{name: 'postDetail', params:{slug: project.slug}}">{{ project.title }}</router-link>
        </li>
      </ul>

  </div>
</template>

<style lang="scss" scoped>

</style>