<script>
import axios from 'axios';
import { store } from '../data/store';
import Loader from '../components/partials/Loader.vue';

export default {
  name: 'Contacts',

  components: {
    Loader,
  },

  data() {
    return {
      // name: 'alessia',
      // email: 'alessia@alessia.it',
      // message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, aut vero officia quae nam laborum incidunt placeat molestiae natus atque?',
      sending: false,
      sent: false,
      errors: {
        name: '',
        email: '',
        message: '',
      }
    }
  },

  methods: {
    sendEmail() {
      this.sending = true
      const data = {
        name: this.name,
        email: this.email,
        message: this.message,
      }

      axios.post(store.apiUrl + 'send-email', data)
        .then(result => {
          this.sending = false
          console.log(result.data)
          this.sent = result.data.success

          if (!result.data.success) {
            this.errors = result.data.errors
          } else {
            this.errors = {
              name: [],
              email: [],
              message: [],
            }
          }

        })
        .catch(error => {
          this.sending = false
          console.log(error.message)
        })

    }
  }
}
</script>

<template>
  <div class="d-flex flex-column align-items-center">
    <h1 class="mb-5">Contattami</h1>

    <div class="mail">
      <div v-if="!sending">
        <form v-if="!sent" @submit.prevent="sendEmail">
          <div>
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input v-model="name" type="text" name="name" class="form-control" id="name" placeholder="name">
              <p class="error">{{ errors.name?.toString() }}</p>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input v-model="email" type="email" name="email" class="form-control" id="email"
                placeholder="name@example.com">
              <p class="error">{{ errors.email?.toString() }}</p>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea v-model="message" name="message" id="message" class="form-control" rows="3"></textarea>
              <p class="error">{{ errors.message?.toString() }}</p>
            </div>
            <div class="text-box">
              <a href="#" class="btn btn-white btn-animate mt-4">Invia</a>
            </div>
          </div>
        </form>
        <h3 v-else>Email inviata correttamente</h3>
      </div>
      <Loader v-else />

    </div>
  </div>
</template>


<style lang="scss">
.mail {
  background-color: rgb(255, 255, 255);
  padding: 30px;
  padding-bottom: 110px;
  margin-bottom: 100px;
  border-radius: 20px;
  width: 800px;
  box-shadow: 2px 2px 10px rgba(221, 221, 221, 0.767);

  .btn:link,
  .btn:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 15px 40px;
    display: inline-block;
    border-radius: 100px;
    transition: all .2s;
    position: absolute;
  }

  .btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .btn:active {
    transform: translateY(-1px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  .btn-white {
    background-color: #8c74e5;
    color: white;
  }

  .btn::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .4s;
  }

  .btn-white::after {
    background-color: #c1b4f3;
  }

  .btn:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }

  .btn-animated {
    animation: moveInBottom 5s ease-out;
    animation-fill-mode: backwards;
  }

  @keyframes moveInBottom {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
}
</style>