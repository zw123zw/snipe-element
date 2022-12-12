<template>
  <el-cascader-panel
    v-model="modelValue"
    :class="classList"
    v-bind="configs"
    v-on="$listeners"
  >
    <template slot-scope="item">
      <slot :item="item"></slot>
    </template>
    <template slot="empty">
      <slot name="empty"></slot>
    </template>
  </el-cascader-panel>
</template>

<script>
import create from 'core/create'
import props from 'mixins/props'
import event from 'mixins/event'

export default create({
  name: 'el-cascader-panel',
  mixins: [props(), event()],
  data () {
    return {
      defaultConfigs: {}
    }
  }
})
</script>
