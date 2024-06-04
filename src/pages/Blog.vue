<script>
import axios from 'axios';
import { store } from '../data/store';
import Paginator from '../components/partials/Paginator.vue';
import Loader from '../components/partials/Loader.vue';

export default {
  name: 'Blog',

  components: {
    Paginator,
    Loader,
  },

  data() {
    return {
      projects: [],
      technologies: [],
      myTypes: [],
      paginatorData: {},
      loading: true,
    }
  },

  methods: {
    getApi(apiUrl, type = '') {
      this.loading = true;
      // perchè se passo il parametro type mi da errore? e perchè non stampa types e technologies
      axios.get(apiUrl + type)
        .then(result => {
          this.loading = false;
          // switch case: posso mettere tante condizioni come se fosse un if
          switch (type) {
            case 'technologies':
              this.technologies = result.data
              console.log(this.technologies)

              break;
            case 'types':
              // this.types = result.data
              this.myTypes = result.data
              console.log(this.myTypes)
              break;
            default:
              this.projects = result.data.data
              console.log(this.projects);
              // paginator
              this.paginatorData.current_page = result.data.current_page;
              this.paginatorData.links = result.data.links;
              this.paginatorData.total = result.data.total;
              break;
          }

          // console.log(result.data)

          // console.log(this.paginatorData)
        })
        .catch(error => {
          this.loading = false;
          console.log(error.message, 'projects');
        })
    }
  },
  mounted() {
    this.getApi(store.apiUrl, 'projects');
    this.getApi(store.apiUrl, 'technologies');
    this.getApi(store.apiUrl, 'types');

  }
}



</script>

<template>
  <div>
    <h1>I miei post</h1>

    <div class="content" v-if="!loading">
      <ul>
        <li v-for="project in projects" :key="project.id">{{ project.id }} - {{ project.title }}</li>
      </ul>

      <div>
        <h4>Types:</h4>
        <div>
          <span v-for="myType in myTypes" :key="myType.id" class="me-2 badge text-bg-primary">{{ myType.name
            }}</span>
        </div>
      </div>

      <div>
        <h4>Technology:</h4>
        <div>
          <span v-for="technology in technologies" :key="technology.id" class="me-2 badge text-bg-primary">{{
      technology.name }}</span>
        </div>
      </div>

    </div>
    <Loader v-else />

    <Paginator v-if="!loading" :data="paginatorData" @callApi="getApi" />

  </div>
</template>

<style lang="scss" scoped></style>