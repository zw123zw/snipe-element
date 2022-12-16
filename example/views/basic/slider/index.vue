<template>
  <div>
    <source-warp>
      <template #main>
        <el-row>
          <el-row>
            <span class="demonstration">默认</span>
            <snipe-el-slider v-model="value1"></snipe-el-slider>
          </el-row>
          <el-row>
            <span class="demonstration">自定义初始值</span>
            <snipe-el-slider v-model="value2"></snipe-el-slider>
          </el-row>
          <el-row>
            <span class="demonstration">隐藏 Tooltip</span>
            <snipe-el-slider v-model="value3" :show-tooltip="false"></snipe-el-slider>
          </el-row>
          <el-row>
            <span class="demonstration">格式化 Tooltip</span>
            <!-- <snipe-el-slider
              v-model="value4"
              :format-tooltip="formatTooltip"
              show-input
            ></snipe-el-slider> -->
          </el-row>
          <el-row>
            <span class="demonstration">禁用</span>
            <snipe-el-slider v-model="value5" disabled></snipe-el-slider>
          </el-row>
        </el-row>
      </template>
    </source-warp>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  data () {
    return {
      value1: 0,
      value2: 50,
      value3: 36,
      value4: 48,
      value5: 42
    }
  },
  mounted () {},
  methods: {
    formatTooltip (val) {
      return val / 100
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .source-warp {
  .snipe-el-slider {
    width: 50%;
  }
}
</style>
