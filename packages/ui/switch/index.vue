<template>
  <el-switch
    v-model="modelValue"
    :class="classList"
    v-bind="configs"
    v-on="$listeners"
  >
  </el-switch>
</template>

<script>
import create from 'core/create'
import props from 'mixins/props'
import event from 'mixins/event'

export default create({
  name: 'el-switch',
  mixins: [props(), event()],
  data () {
    return {
      defaultConfigs: {}
    }
  }
})
</script>
