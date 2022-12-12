<template>
  <el-checkbox
    v-model="modelValue"
    :class="classList"
    v-bind="configs"
    v-on="$listeners"
  >
    <template>
      <slot></slot>
    </template>
  </el-checkbox>
</template>

<script>
import create from 'core/create'
import props from 'mixins/props'
import event from 'mixins/event'

export default create({
  name: 'el-checkbox',
  mixins: [props(), event()],
  data () {
    return {
      defaultConfigs: {}
    }
  }
})
</script>
