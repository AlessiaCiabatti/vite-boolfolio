<script>
import axios from 'axios';
import { store } from '../data/store';

  export default {
    name: 'ProjectType',

    data(){
      return {
        typeName: {},
        projects: [],
      }
    },

    methods:{
      getApi(slug){
        console.log('Slug:', slug);
        axios.get(store.apiUrl + 'project-by-type/' + slug)
        .then(result =>{
          console.log(result.data);
          this.typeName = result.data.name;
          console.log(this.typeName);
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
    <h1>Project Types: {{ typeName }}</h1>

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