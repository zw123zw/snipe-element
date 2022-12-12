<template>
  <div>
    <el-switch
      v-model="fieldValue"
      v-bind="configs"
      @change="syncToChange"
      v-on="events"
    >
    </el-switch>
  </div>
</template>

<script>
import mixinHeader from './mixinHeader'

export default {
  name: 'headerSwitch',
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
