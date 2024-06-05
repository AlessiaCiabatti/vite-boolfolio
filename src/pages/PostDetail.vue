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

  computed:{
    technology(){
      if(!this.project.technology){
        return 'no technology'
      }
      return 'Technologies: ' + this.project.technology.name
    },
    myTypes(){
       if(this.project.types.lenght === 0){
        return 'no types'
      }
      // let typesString = '';
      // this.project.types.forEach(type =>{
      //   console.log(type.name);
      //   typesString += type.name + ' '
      // })
      return 'Type: ' + this.project.types.map(typee => typee.name).join('-');
      // return 'Types: ' + this.project.myTypes.name
    },

    formattedDate(){
    const d = new Date(this.project.updated_at)
    console.log(d)

    console.log(navigator.language);

  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
    console.log(new Intl.DateTimeFormat(navigator.language, options).format(d))

    return new Intl.DateTimeFormat(navigator.language, options).format(d);
    // return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
  },
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
      <!-- <p>by: {{ project.user?.name }}</p> -->
      <p>{{ technology }}</p>
      <p>{{ myTypes }}</p>
      <img :src="project.image">
      <p>{{ project.image_original_name }}</p>
      <p>{{ project.text }}</p>
      <p>{{formattedDate}}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>