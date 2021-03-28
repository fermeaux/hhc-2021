<template>
  <NuxtLink class="rounded-full" :to="link">
    <img v-if="image.length > 0" class="object-cover object-center h-64 w-full" :src="image">
    <div v-else class="h-64 w-full" />
    <h3 class="text-2xl">
      {{ title }}
    </h3>
    <h4 class="text-md">
      {{ description }}
    </h4>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      require: true,
      default: ''
    }
  }
}
</script>
