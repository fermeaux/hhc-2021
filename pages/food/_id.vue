<template>
  <div>
    <nuxt-content :document="foodWorkshop" />
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const foodWorkshop = await $content(`food-workshops/${params.id}`).fetch()
    console.log(foodWorkshop)
    return { foodWorkshop }
  }
}
</script>
