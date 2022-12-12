<template>
  <el-radio-button
    v-model="modelValue"
    :class="classList"
    v-bind="configs"
    v-on="$listeners"
  >
    <template>
      <slot></slot>
    </template>
  </el-radio-button>
</template>

<script>
import create from 'core/create'
import props from 'mixins/props'
import event from 'mixins/event'

export default create({
  name: 'el-radio-button',
  mixins: [props(), event()],
  data () {
    return {
      defaultConfigs: {}
    }
  }
})
</script>
