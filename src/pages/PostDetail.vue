<script>
import axios from 'axios'
import { store } from '../data/store';
import Loader from '../components/partials/Loader.vue';


export default {
  name: 'PostDetail',

  components: {
    Loader,
  },

  data() {
    return {
      project: {},
      loading: true
    }
  },

  methods: {
    getApi() {
      console.log(this.$route.params.slug);
      const slug = this.$route.params.slug;
      axios.get(store.apiUrl + 'project-by-slug/' + slug)
        .then(result => {
          this.loading = false;
          console.log(result.data)
          this.project = result.data.project
        })
        .catch(error => {
          this.loading = false;
          console.log(error.message);
        })
    }
  },

  mounted() {
    this.getApi()
  }
}
</script>

<template>
  <div>
    <Loader v-if="loading" />
    <div v-else class="project">
      <h1>{{ project.title }}</h1>
      <p>by: {{ project.user?.name }}</p>
      <img :src="project.image">
      <p>{{ project.image_original_name }}</p>
      <p>{{ project.text }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>