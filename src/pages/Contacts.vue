<script>
import axios from 'axios';
import { store } from '../data/store';
import Loader from '../components/partials/Loader.vue';

  export default {
    name: 'Contacts',

    components:{
      Loader,
    },

    data(){
      return{
        name: 'alessia',
        email: 'alessia@alessia.it',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, aut vero officia quae nam laborum incidunt placeat molestiae natus atque?',
        sending: false,
        sent: false,
        errors:{
          name:'',
          email:'',
          message:'',
        }
      }
    },

    methods:{
      sendEmail(){
        this.sending = true
        const data = {
          name: this.name,
          email: this.email,
          message: this.message,
        }
        
        axios.post(store.apiUrl + 'send-email', data)
        .then(result =>{
        this.sending = false
        console.log(result.data)
        this.sent = result.data.success

        if(!result.data.success){
          this.errors = result.data.errors
        }else{
          this.errors = {
          name:[],
          email:[],
          message:[],
          }
        }

        })
        .catch(error =>{
        this.sending = false
          console.log(error.message)
        })

      }
    }
  }
</script>

<template>
  <div>
    <h1>Contacts</h1>
    <div v-if="!sending">
      <form v-if="!sent" @submit.prevent="sendEmail" >
        <div>
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input v-model="name" type="text" name="name" class="form-control" id="name" placeholder="name">
            <p class="error">{{errors.name?.toString()}}</p>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input v-model="email" type="email" name="email" class="form-control" id="email" placeholder="name@example.com">
            <p class="error">{{errors.email?.toString()}}</p>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea v-model="message" name="message" id="message" class="form-control" rows="3"></textarea>
            <p class="error">{{errors.message?.toString()}}</p>
          </div>
          <div>
            <button class="btn btn-primary" type="submit">Send</button>
          </div>
        </div>
      </form>
      <h3 v-else>Email inviata correttamente</h3>
    </div>
    <Loader v-else />
   
  </div>
</template>


<style lang="scss" scoped>

</style>