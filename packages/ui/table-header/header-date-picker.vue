<template>
  <div>
    <el-date-picker
      v-model="fieldValue"
      @change="syncToChange"
      v-bind="configs"
      v-on="events"
    ></el-date-picker>
  </div>
</template>

<script>
import mixinHeader from './mixinHeader'

export default {
  name: 'headerDatePicker',
  mixins: [mixinHeader],
  data () {
    return {
      defaultConfigs: {
        'start-placeholder': '开始日期',
        'end-placeholder': '结束日期',
        clearable: true,
        size: 'small',
        'value-format': 'yyyy-MM-dd HH:mm',
        format: 'yyyy-MM-dd HH:mm',
        align: 'right'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
::v-deep .el-date-editor.el-input__inner {
  width: 100% !important;
  min-width: 320px;
}
</style>
