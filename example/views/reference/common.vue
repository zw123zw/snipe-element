<template>
  <div>
    <pre><code>{{source}}</code></pre>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'dcsCommon',
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
      axios('/theme/common.scss', {
        responseType: 'text'
      }).then((res) => {
        this.source = res.data
      })
    }
  }
}
</script>
