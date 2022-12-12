<template>
  <div>
    <pre><code>{{source}}</code></pre>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'dcsMixin',
  data () {
    return {
      source: ''
    }
  },
  mounted () {
    this.getSource()
  },
  methods: {
    getSource () {
      axios('/theme/mixin.scss', {
        responseType: 'text'
      }).then((res) => {
        this.source = res.data
      })
    }
  }
}
</script>
