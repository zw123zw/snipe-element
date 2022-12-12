<template>
  <el-date-picker
    :class="classList"
    v-model="modelValue"
    v-bind="configs"
    v-on="$listeners"
  >
  </el-date-picker>
</template>

<script>
import create from 'core/create'
import props from 'mixins/props'
import event from 'mixins/event'

export default create({
  name: 'el-date-picker',
  mixins: [props(), event()],
  data () {
    return {
      defaultConfigs: {}
    }
  }
})
</script>
