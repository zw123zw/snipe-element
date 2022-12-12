<template>
  <el-dialog :class="classList" v-bind="configs" v-on="$listeners">
    <slot slot="footer" name="footer"></slot>
    <slot slot="title" name="title"></slot>
    <slot></slot>
  </el-dialog>
</template>

<script>
import create from 'core/create'
import props from 'mixins/props'
import event from 'mixins/event'

export default create({
  name: 'el-dialog',
  mixins: [props(), event()],
  data () {
    return {
      defaultConfigs: {}
    }
  }
})
</script>
