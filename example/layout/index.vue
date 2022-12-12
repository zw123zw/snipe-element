<template>
  <div class="app-wrapper">
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <app-main />
  </div>
</template>

<script>
import AppMain from './components/AppMain.vue'
import AppHeader from './components/AppHeader.vue'
import AppSidebar from './components/AppSidebar.vue'

export default {
  name: 'Layout',
  components: {
    AppMain,
    AppHeader,
    AppSidebar
  },
  mixins: [],
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
</style>
