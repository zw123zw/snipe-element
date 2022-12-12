<template>
  <el-popover
    :class="classList"
    v-bind="configs"
    v-on="$listeners"
    v-model="modelValue"
  >
    <template>
      <slot></slot>
    </template>

    <template slot="reference">
      <slot name="reference"></slot>
    </template>
  </el-popover>
</template>

<script>
import create from 'core/create'
import props from 'mixins/props'
import event from 'mixins/event'

export default create({
  name: 'el-popover',
  mixins: [props(), event()],
  data () {
    return {
      defaultConfigs: {}
    }
  }
})
</script>
