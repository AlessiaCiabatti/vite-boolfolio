<script>
import axios from 'axios';
import {store} from './data/store';

import Header from './components/Header.vue'

  export default {
    components: {
    Header
  },
    data(){
      return{
        
      }
    },

    methods:{
     
    },

    mounted(){

    }
  }
</script>


<template>
  <div class="main-wrapper">
    <div class="container">
      <Header/>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>