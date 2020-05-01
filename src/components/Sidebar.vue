<template>
  <ul :class="['sidenav', 'app-sidenav', { open: value }]">
    <router-link
      v-for="(link, index) of links"
      :key="index"
      :to="link.url"
      :exact="link.exact"
      tag="li"
      active-class="active"
    >
      <a href="#" class="waves-effect waves-orange pointer">
        {{ link.title }}
      </a>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'Sidebar',

  props: ['value'],

  data: () => ({
    links: [
      {title: 'Score', url: '/', exact: true},
      {title: 'History', url: '/history'},
      {title: 'Planning', url: '/planning'},
      {title: 'New entry', url: '/record'},
      {title: 'Categories', url: '/categories'},
    ]
  })
}
</script>

<style scoped>

</style>
