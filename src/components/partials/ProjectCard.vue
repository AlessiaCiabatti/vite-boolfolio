<script>
export default {
  props: {
    project: {
      type: Object,
    }
  }
}
</script>

<template>
  <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ project.id }} - {{ project.title }}</h5>
      <p class="card-text">{{ project.text }}</p>
      <p class="card-text">Reading time: {{ project.reading_time }}</p>
      <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>