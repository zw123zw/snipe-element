<template>
  <el-input-number
    :class="classList"
    v-model="modelValue"
    v-bind="configs"
    v-on="$listeners"
    @input="handleChange"
  >
  </el-input-number>
</template>

<script>
import create from 'core/create'
import props from 'mixins/props'
import event from 'mixins/event'

export default create({
  name: 'el-input-number',
  mixins: [props(), event()],
  data () {
    return {
      defaultConfigs: {}
    }
  }
})
</script>
