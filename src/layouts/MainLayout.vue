<template>
  <div class="app-main-layout">

    <Navbar @menuToggle="isOpen = !isOpen" />

    <Sidebar v-model="isOpen" />

    <main :class="['app-content', { full: !isOpen }]">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export default {
  name: 'MainLayout',

  components: {
    Navbar, Sidebar
  },

  data: () => ({
    isOpen: true
  })
}
</script>

<style scoped>

</style>
