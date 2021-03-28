<template>
  <div class="video-container my-4">
    <iframe
      v-if="id.length > 0"
      :src="`https://www.youtube.com/embed/${id}`"
      frameborder="0"
      allowfullscreen
    />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      require: true,
      default: ''
    }
  }
}
</script>

<style scoped>
.video-container {
    position:relative;
    padding-bottom:56.25%;
    padding-top:30px;
    height:0;
    overflow:hidden;
}

.video-container iframe {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
}
</style>
