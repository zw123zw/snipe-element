<template>
  <div>
    <pre><code>{{source}}</code></pre>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'dcsVariable',
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
      axios('/theme/var.scss', {
        responseType: 'text'
      }).then((res) => {
        this.source = res.data
      })
    }
  }
}
</script>
