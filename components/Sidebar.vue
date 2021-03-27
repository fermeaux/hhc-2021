<template>
  <div class="md:flex flex-col md:flex-row md:min-h-screen w-full">
    <div class="flex flex-col w-full md:w-64 text-gray-700 bg-white flex-shrink-0">
      <div class="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
        <NuxtLink to="/" class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg focus:outline-none focus:shadow-outline">
          Ma santé à coeur
        </NuxtLink>
        <button class="rounded-lg md:hidden rounded-lg focus:outline-none focus:shadow-outline" @click="open = !open">
          <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
            <path v-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd" />
            <path v-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      <nav :class="{'block': open, 'hidden': !open}" class="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
        <template v-for="item of items">
          <NuxtLink v-if="item.link != null" :key="item.link" :to="item.link" class="nav-link block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
            {{ item.label }}
          </NuxtLink>
          <div v-else :key="item.label">
            <button class="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg md:block hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" @click="item.open = !item.open">
              <span>{{ item.label }}</span>
              <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': item.open, 'rotate-0': !item.open}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
            </button>
            <div v-show="item.open" class="w-full mt-2 origin-top-right rounded-md shadow-lg">
              <div class="px-2 py-2 bg-white rounded-md shadow">
                <NuxtLink v-for="subitem of item.items" :key="subitem.link" class="nav-link block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" :to="subitem.link">
                  {{ subitem.label }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </template>
      </nav>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  data () {
    return {
      open: false,
      items: [
        {
          label: 'Ma bibliothèque',
          items: [
            {
              label: 'Informations',
              link: '/informations'
            },
            {
              label: 'Exercices',
              link: '/exercices'
            },
            {
              label: 'Alimentation',
              link: '/food'
            }
          ],
          open: true
        },
        {
          label: 'Ma santé',
          items: [
            {
              label: 'Mes données',
              link: '/health'
            },
            {
              label: 'Mes activités',
              link: '/activities'
            },
            {
              label: 'Mes médicaments',
              link: '/pills'
            },
            {
              label: 'Mes évènements',
              link: '/events'
            }
          ],
          open: true
        },
        {
          label: 'Mon parcours',
          link: '/journey'
        },
        {
          label: 'Mon coaching',
          items: [
            {
              label: 'Physique',
              link: '/coach/activity'
            },
            {
              label: 'Alimentaire',
              link: '/coach/food'
            },
            {
              label: 'Conseil santé',
              link: '/coach/health'
            }
          ],
          open: true
        }
      ]
    }
  }
}
</script>

<style scoped>
a.nav-link.nuxt-link-exact-active {
  @apply bg-gray-200;
}
</style>
