<template>
  <div>
    <el-cascader
      v-model="fieldValue"
      :options="fieldOptions"
      v-bind="configs"
      @change="syncToChange"
      clearable
      v-on="events"
    >
    </el-cascader>
  </div>
</template>

<script>
import mixinHeader from './mixinHeader'

export default {
  name: 'headerCascader',
  mixins: [mixinHeader],
  data () {
    return {
      defaultConfigs: {
        placeholder: `请选择${this.label}`,
        clearable: true,
        filterable: true,
        size: 'small'
      }
    }
  }
}
</script>
<style scoped lang="scss">
::v-deep .el-cascader {
  width: 100%;
}
</style>
