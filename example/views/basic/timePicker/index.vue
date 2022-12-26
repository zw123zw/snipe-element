<template>
  <div>
    <source-warp>
      <template #main>
        <el-row>
          <snipe-el-time-picker
            is-range
            v-model="value1"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围"
          >
          </snipe-el-time-picker>
        </el-row>

        <el-row>
          <snipe-el-date-picker
            v-model="value2"
            type="date"
            placeholder="选择日期"
          >
          </snipe-el-date-picker>
        </el-row>

        <el-row>
          <snipe-el-date-picker
            v-model="value3"
            type="datetime"
            placeholder="选择日期时间"
          >
          </snipe-el-date-picker>
        </el-row>
      </template>
    </source-warp>
  </div>
</template>

<script>
export default {
  name: 'TimePicker',
  data () {
    return {
      value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      value2: '',
      value3: ''
    }
  },
  mounted () {},
  methods: {}
}
</script>
