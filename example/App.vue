<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { updateRouter } from '@/router/index'

export default {
  name: 'App',
  created () {
    updateRouter()
  },
  mounted () {
    console.log(this.$dcsElement)
  },
  methods: {}
}
</script>
