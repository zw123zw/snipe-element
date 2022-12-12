<template>
  <el-slider
    v-model="modelValue"
    :class="classList"
    v-bind="configs"
    v-on="$listeners"
  >
  </el-slider>
</template>

<script>
import create from 'core/create'
import props from 'mixins/props'
import event from 'mixins/event'

export default create({
  name: 'el-slider',
  mixins: [props(), event()],
  data () {
    return {
      defaultConfigs: {}
    }
  }
})
</script>
