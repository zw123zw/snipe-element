<template>
  <el-tooltip :class="classList" v-bind="configs" v-on="$listeners">
    <template>
      <slot></slot>
      <slot slot="reference" name="reference"></slot>
    </template>
  </el-tooltip>
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
