<template>
  <div class="dcs-chart" ref="dcsChart" :id="ccid"></div>
</template>

<script>
import create from 'core/create'
import { init as EChartsInit } from 'echarts'

export default create({
  name: 'charts',
  components: {},
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      charEch: null,
      idInitial: 0
    }
  },
  computed: {
    ccid: function () {
      const idRow = Number(this.id) > this.idInitial ? this.id : ++this.idInitial
      return idRow
    }
  },
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
      this.$emit('resizeChange')
    },
    getChartInstance () {
      return this.charEch
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
