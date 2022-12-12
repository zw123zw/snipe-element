<template>
  <div>
    <snipe-charts ref="testCharts" class="test-charts"></snipe-charts>
  </div>
</template>

<script>
export default {
  name: 'dcsChartsPage',
  props: {},
  components: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    this.initCharts()
  },
  methods: {
    initCharts () {
      var colorList = ['#4FE894', '#EF0C27', '#FEE7EA']
      var listData = [
        { name: '不明', value: 20 },
        { name: '已判明', value: 20 },
        { name: '未发现', value: 20 }
      ]
      var option = {
        color: colorList,
        title: {
          x: 'center',
          y: 'center',
          textStyle: {
            color: '#000',
            fontSize: 20
          }
        },
        legend: {
          orient: 'vertical',
          bottom: 5,
          align: 'right',
          right: 15,
          textStyle: {
            color: '#000',
            fontSize: 20
          },
          selectedMode: false,
          data: ['元素1', '元素2', '元素3']
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['55%', '35%'],
            itemStyle: {
              normal: {
                color: function (params) {
                  return colorList[params.dataIndex]
                }
              }
            },
            label: {
              show: true,
              fontSize: 10,
              color: '#000',
              formatter: function (data) {
                return data.name + ':' + data.percent.toFixed(0) + '%'
              }
            },
            labelLine: {
              normal: {
                length: 15,
                length2: 15,
                lineStyle: {
                  width: 2
                }
              }
            },
            data: listData
          }
        ]
      }
      this.$refs.testCharts.init(option)
    }
  }
}
</script>

<style scoped lang="scss">
.test-charts {
}
</style>
