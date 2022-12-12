<template>
  <el-radio-group
    v-model="modelValue"
    :class="classList"
    v-bind="configs"
    v-on="$listeners"
  >
    <template>
      <slot></slot>
    </template>
  </el-radio-group>
</template>

<script>
import create from 'core/create'
import props from 'mixins/props'
import event from 'mixins/event'

export default create({
  name: 'el-radio-group',
  mixins: [props(), event()],
  data () {
    return {
      defaultConfigs: {}
    }
  }
})
</script>
