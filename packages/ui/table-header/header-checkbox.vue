<template>
  <div>
    <el-checkbox-group
      v-model="fieldValue"
      v-bind="configs"
      @change="syncToChange"
      v-on="events"
    >
      <el-checkbox
        v-for="item in fieldOptions"
        :key="item.value"
        :label="item.value"
        >{{ item.label }}</el-checkbox
      >
    </el-checkbox-group>
  </div>
</template>

<script>
import mixinHeader from './mixinHeader'

export default {
  name: 'headerCheckbox',
  mixins: [mixinHeader],
  data () {
    return {
      defaultConfigs: {
        size: 'small'
      }
    }
  },
  methods: {}
}
</script>
