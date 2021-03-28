<template>
  <div>
    <h1 class="page-title">
      Informations
    </h1>
    <div class="grid lg:grid-cols-2 gap-8">
      <Block
        v-for="information of informations"
        :key="information.slug"
        :title="information.title"
        :description="information.description"
        :link="`/informations/${information.slug}`"
        :image="information.imagePreview"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const informations = await $content('informations').fetch()
    return { informations }
  }
}
</script>
