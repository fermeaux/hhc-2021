<template>
  <div>
    <h1 class="page-title">
      Exercices
    </h1>
    <div class="grid lg:grid-cols-2 gap-8">
      <Block
        v-for="exercice of exercices"
        :key="exercice.slug"
        :title="exercice.title"
        :description="exercice.description"
        :link="`/exercices/${exercice.slug}`"
        :image="exercice.imagePreview"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const exercices = await $content('exercices').fetch()
    return { exercices }
  }
}
</script>
