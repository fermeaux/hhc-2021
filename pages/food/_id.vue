<template>
  <div>
    <nuxt-content :document="foodWorkshop" class="prose-sm sm:prose my-4" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const foodWorkshop = await $content(`food-workshops/${params.id}`).fetch()
    return { foodWorkshop }
  }
}
</script>
