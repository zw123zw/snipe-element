<template>
  <div>
    <el-radio
      v-model="fieldValue"
      @change="syncToChange"
      v-bind="configs"
      :label="item.value"
      v-for="item in fieldOptions"
      :key="item.value"
      v-on="events"
    >
      {{ item.label }}
    </el-radio>
  </div>
</template>

<script>
import mixinHeader from './mixinHeader'

export default {
  name: 'headerRadio',
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
