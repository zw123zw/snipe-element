<template>
  <div>
    <source-warp>
      <template #main>
        <el-row>
          <snipe-el-switch
            v-model="value"
            active-color="#13ce66"
            inactive-color="#ff4949"
          >
          </snipe-el-switch>
        </el-row>
        <el-row>
          <snipe-el-switch
            v-model="value1"
            active-text="按月付费"
            inactive-text="按年付费"
          >
          </snipe-el-switch>
        </el-row>
      </template>
    </source-warp>
  </div>
</template>

<script>
export default {
  name: 'Switchs',
  data () {
    return {
      value: true,
      value1: ''
    }
  },
  mounted () {},
  methods: {}
}
</script>
