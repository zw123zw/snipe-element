<template>
  <div>
    <el-autocomplete
      v-model="fieldValue"
      @input="inputChange"
      v-bind="configs"
      v-on="events"
      @select="searchData"
      @change="searchData"
    ></el-autocomplete>
  </div>
</template>

<script>
import mixinHeader from './mixinHeader'

export default {
  name: 'headerAutocomplete',
  mixins: [mixinHeader],
  data () {
    return {
      defaultConfigs: {
        placeholder: `请输入${this.label}`,
        clearable: true,
        size: 'small',
        maxlength: 30
      }
    }
  },
  methods: {
    inputChange () {
      this.$emit('change', this.fieldValue)
    },
    searchData () {
      this.$emit('updateData')
      this.handleSensors()
    }
  }
}
</script>
<style scoped lang="scss">
::v-deep .el-autocomplete {
  width: 100%;
}
</style>
