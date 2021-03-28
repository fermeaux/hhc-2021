<template>
  <div>
    <h1 class="page-title">
      Mes données de santé
    </h1>
    <button v-if="profile == null && loading === false" class="bg-gray-300 text-white px-6 py-3 rounded-lg" @click="connectFitbit()">
      <img src="fitbit.png" class="w-32">
    </button>
    <div v-if="profile != null && loading === false">
      <h2 class="mb-8 text-2xl">
        Informations provenant de votre FitBit
      </h2>
      <div class="grid sm:grid-cols-2 gap-y-8 gap-x-16">
        <div>
          <label for="name" class="block mb-2 text-sm text-gray-600">Nom</label>
          <input id="name" type="text" :value="displayName" readonly class="w-full px-3 py-2 border-b border-gray-300 focus:outline-none">
        </div>
        <div>
          <label for="age" class="block mb-2 text-sm text-gray-600">Age</label>
          <input id="age" type="text" :value="age" readonly class="w-full px-3 py-2 border-b border-gray-300 focus:outline-none">
        </div>
        <div>
          <label for="height" class="block mb-2 text-sm text-gray-600">Taille</label>
          <input id="height" type="text" :value="height" readonly class="w-full px-3 py-2 border-b border-gray-300 focus:outline-none">
        </div>
        <div>
          <label for="weight" class="block mb-2 text-sm text-gray-600">Poids</label>
          <input id="weight" type="text" :value="weight" readonly class="w-full px-3 py-2 border-b border-gray-300 focus:outline-none">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return { profile: null, loading: true }
  },
  async fetch () {
    try {
      this.profile = await this.$axios.$get('https://api.fitbit.com/1/user/-/profile.json', { headers: { Authorization: `Bearer ${localStorage.getItem('fitbit-token')}` } })
    } catch {
      console.warn("don't work")
    } finally {
      this.loading = false
    }
  },
  fetchOnServer: false,
  computed: {
    age () {
      return this.profile ? `${this.profile.user.age} ans` : ''
    },
    displayName () {
      return this.profile ? this.profile.user.displayName : ''
    },
    height () {
      return this.profile ? `${this.profile.user.height} cm` : ''
    },
    weight () {
      return this.profile ? `${this.profile.user.weight} kg` : ''
    }
  },
  methods: {
    connectFitbit () {
      this.$connectFitbit()
    }
  }
}
</script>
