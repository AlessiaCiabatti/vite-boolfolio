<script>
import axios from 'axios';
import { store } from '../data/store';
import Paginator from '../components/partials/Paginator.vue'

export default {
  name: 'Blog',

  components: {
    Paginator,
  },

  data() {
    return {
      projects: [],
      technologies: [],
      myTypes: [],
      paginatorData: {},
    }
  },

  methods: {
    getApi(apiUrl, type = '') {
      // perchè non stampa technologies e types? e perchè se passo il parametro type mi da errore?
      axios.get(apiUrl)
        .then(result => {

          switch (type) {
            case 'technologies':
              this.technologies = result.data
              console.log(this.technologies)

              break;
            case 'types':
              // this.types = result.data
              this.myTypes = result.data
              console.log(this.myTypes)

            default:
              this.projects = result.data.data
              // paginator
              this.paginatorData.current_page = result.data.current_page;
              this.paginatorData.links = result.data.links;
              this.paginatorData.total = result.data.total;
              break;
          }

          console.log(result.data)

          console.log(this.paginatorData)
        })
        .catch(error => {
          console.log(error.message, 'projects');
        })
    }
  },
  mounted() {
    this.getApi(store.apiUrl, 'projects');
    this.getApi(store.apiUrl, 'types');
    this.getApi(store.apiUrl, 'technologies');
  }
}



</script>

<template>
  <div>
    <h1>I miei post</h1>
    <div>
      <ul>
        <li v-for="project in projects" :key="project.id">{{ project.id }} - {{ project.title }}</li>
      </ul>

      <div>
        <h4>Types:</h4>
        <div>
          <span v-for="myType in myTypes" :key="`x-${myType.id}`" class="me-2 badge text-bg-primary">{{ myType.title }}</span>
        </div>
      </div>

      <div>
        <h4>Technology:</h4>
        <div>
          <span v-for="Technology in technologies" :key="`x-${technologies.id}`" class="me-2 badge text-bg-primary">{{ technology.title }}</span>
        </div>
      </div>

      <Paginator :data="paginatorData" @callApi="getApi" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>