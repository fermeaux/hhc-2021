<template>
  <div>
    <nuxt-content :document="information" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const information = await $content(`informations/${params.id}`).fetch()
    return { information }
  }
}
</script>
