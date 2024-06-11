<script>
export default {

}
</script>

<template>
  <section>
    <header>
      <ul class="nav nav-underline d-flex justify-content-between">
        <li class="nav-item">
          <p class="nav-link" aria-disabled="true">Alessia</p>
        </li>
        <div class="d-flex">
          <li class="mx-5 nav-item">
            <router-link class="nav-link" aria-current="page" :to="{ name: 'home' }">Home</router-link>
          </li>
          <li class="mx-5 nav-item">
            <router-link class="nav-link" :to="{ name: 'about' }">Chi siamo</router-link>
          </li>
          <li class="mx-5 nav-item">
            <router-link class="nav-link" :to="{ name: 'blog' }">Blog</router-link>
          </li>
          <li class="mx-5 nav-item">
            <router-link class="nav-link" :to="{ name: 'contacts' }">Contatti</router-link>
          </li>
        </div>
      </ul>
    </header>
  </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

ul {
  height: 70px;

  .nav-link {
    color: black;
    line-height: 48px;
    font-size: 1.2rem;
  }
}
</style>