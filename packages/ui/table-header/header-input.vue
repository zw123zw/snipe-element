<template>
  <div>
    <el-input
      v-model="fieldValue"
      @input="inputChange"
      v-bind="configs"
      @clear="searchData('clear')"
      @change="searchData"
      v-on="events"
    ></el-input>
  </div>
</template>

<script>
import mixinHeader from './mixinHeader'

export default {
  name: 'headerInput',
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
    searchData (type) {
      if (type !== 'clear') {
        this.handleSensors()
      }
      this.$emit('updateData')
    }
  }
}
</script>
