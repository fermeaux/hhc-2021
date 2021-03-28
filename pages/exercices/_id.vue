<template>
  <div>
    <nuxt-content :document="exercice" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const exercice = await $content(`exercices/${params.id}`).fetch()
    return { exercice }
  }
}
</script>
