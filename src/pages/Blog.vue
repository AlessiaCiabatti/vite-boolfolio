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
      paginatorData: {},
    }
  },

  methods: {
    getApi(apiUrl) {
      axios.get(apiUrl)
        .then(result => {
          this.projects = result.data.data
          console.log(result.data)
          // paginator
          this.paginatorData.current_page = result.data.current_page;
          this.paginatorData.links = result.data.links;
          this.paginatorData.total = result.data.total;
          console.log(this.paginatorData)
        })
        .catch(error => {
          console.log(error.message);
        })
    }
  },
  mounted() {
    this.getApi(store.apiUrl);
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
        <h4>Tags:</h4>
        <div>
          <span class="me-2 badge text-bg-primary">tag</span>
          <span class="me-2 badge text-bg-primary">tag</span>
        </div>
      </div>

      <div>
        <h4>Technology:</h4>
        <div>
          <span class="me-2 badge text-bg-primary">technology</span>
          <span class="me-2 badge text-bg-primary">technology</span>
        </div>
      </div>

      <Paginator :data="paginatorData" @callApi="getApi" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>