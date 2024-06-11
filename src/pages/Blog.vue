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

          // const effectiveType = type === '' ? 'projects' : type;
          // this[effectiveType] = result.data;
          // if (effectiveType = 'projects') {
          //   this[effectiveType] = result.data.data;
          //   this.paginatorData.current_page = result.data.current_page;
          //   this.paginatorData.links = result.data.links;
          //   this.paginatorData.total = result.data.total;
          // }

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
  <div class="container">
    <h1 class="mb-5">I miei progetti</h1>

    <div class="content d-flex" v-if="!loading">
      <div class="prova">
        <ul class="list-group list-group-flush">
          <li class="list-group-item" v-for="project in projects" :key="project.id">{{ project.id }} -
            <router-link class="list" :to="{ name: 'postDetail', params: { slug: project.slug } }">{{ project.title
              }}</router-link>
          </li>
        </ul>
      </div>

      <div class="badge-list flex-column mt-4">

        <div class="badge-types mb-5">
          <h5>Types:</h5>
          <div>
            <router-link :to="{ name: 'projectType', params: { slug: myType.slug } }" v-for="myType in myTypes"
              :key="myType.id" class="me-2 badge">{{ myType.name
              }}</router-link>
          </div>
        </div>

        <div class="badge-tech">
          <h5>Technologie:</h5>
          <div>
            <router-link :to="{ name: 'projectTechnology', params: { slug: technology.slug } }"
              v-for="technology in technologies" :key="technology.id" class="me-2 badge">{{
      technology.name }}</router-link>
          </div>
        </div>

      </div>

    </div>
    <Loader v-else />

    <div class="d-flex justify-content-center">
      <Paginator v-if="!loading" :data="paginatorData" @callApi="getApi" />
    </div>

  </div>
</template>

<style lang="scss" scoped>
h1 {
  margin-top: 100px;
}

.content {
  ul {
    .list {
      text-decoration: none;
      color: black;
    }
  }

  .prova {
    background-color: rgb(255, 255, 255);
    padding: 30px;
    margin-bottom: 100px;
    border-radius: 20px;
    width: 500px;
    box-shadow: 2px 2px 10px rgba(221, 221, 221, 0.767);
  }

  .badge-list {
    margin-left: 170px;

    .badge {
      text-decoration: none;
      padding: 7px;
      margin-top: 20px;
      background-color: #8c74e5;
    }

    .badge-types {
      line-height: 35px;
    }

    .badge-types,
    .badge-tech {
      background-color: rgb(255, 255, 255);
      padding: 50px;
      border-radius: 20px;
      width: 500px;
      box-shadow: 2px 2px 10px rgba(221, 221, 221, 0.767);
    }
  }

}


</style>