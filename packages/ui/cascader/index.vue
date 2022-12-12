<template>
  <el-cascader
    v-model="modelValue"
    :class="classList"
    v-bind="configs"
    v-on="$listeners"
  >
    <template slot-scope="{ node, data }">
      <slot :data="data" :node="node"></slot>
    </template>

    <template slot="empty">
      <slot name="empty"></slot>
    </template>
  </el-cascader>
</template>

<script>
import create from 'core/create'
import props from 'mixins/props'
import event from 'mixins/event'

export default create({
  name: 'el-cascader',
  mixins: [props(), event()],
  data () {
    return {
      attributes: {}
    }
  }
})
</script>
