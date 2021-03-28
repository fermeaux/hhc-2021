<template>
  <div>
    <h1 class="page-title">
      Alimentation
    </h1>
    <div class="grid lg:grid-cols-2 gap-8">
      <Block
        v-for="workshop of workshops"
        :key="workshop.slug"
        :title="workshop.title"
        :description="workshop.description"
        :link="`/food/${workshop.slug}`"
        :image="workshop.imagePreview"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const workshops = await $content('food-workshops').fetch()
    return { workshops }
  }
}
</script>
