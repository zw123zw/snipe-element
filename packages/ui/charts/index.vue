<template>
  <div class="dcs-chart" ref="dcsChart"></div>
</template>

<script>
import create from 'core/create'
import { init as EChartsInit } from 'echarts'

export default create({
  name: 'charts',
  components: {},
  data () {
    return {
      charEch: null
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    window.addEventListener('resize', this.chartsResize)
  },
  methods: {
    init (options) {
      if (this.charEch) this.charEch.dispose()
      this.charEch = EChartsInit(this.$refs.dcsChart)
      this.charEch.setOption(options)
      this.$nextTick(() => {
        this.chartsResize()
      })
      return this.charEch
    },
    dispose () {
      this.charEch.dispose()
    },
    chartsResize () {
      this.charEch && this.charEch.resize()
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.chartsResize)
  }
})
</script>

<style scoped lang="scss">
.dcs-chart {
  height: 500px;
}
</style>
