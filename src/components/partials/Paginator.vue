<script>
export default {
  name: 'Paginator',
  props: {
    data: Object,
  },

  methods: {
    callApi(link) {
      console.log(link);
      this.$emit('callApi', link)
    }
  }
}
</script>

<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" v-for="link in data.links">
        <button class="page-link" :key="link.label" v-html="link.label" 
        :disabled="link.active || (!link.url && link.label != '...')"
        @click="callApi(link.url)"
        ></button>
      </li>
    </ul>
    <!-- <nav aria-label="Page navigation example">
      <button v-for="link in data.links" :key="link.label"
        :disabled="link.active || (!link.url && link.label !== '...')" @click="callApi(link.url)"></button>
    </nav> -->
  </nav>
</template>

<style lang="scss" scoped></style>