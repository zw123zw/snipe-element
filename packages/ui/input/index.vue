<template>
  <el-input
    :class="classList"
    v-model="modelValue"
    v-bind="configs"
    v-on="$listeners"
    @input="handleChange"
  >
    <template slot="prepend">
      <slot name="prepend"></slot>
    </template>
    <template slot="append">
      <slot name="append"></slot>
    </template>
  </el-input>
</template>

<script>
import create from 'core/create'
import props from 'mixins/props'
import event from 'mixins/event'

export default create({
  name: 'el-input',
  mixins: [props(), event()],
  data () {
    return {
      defaultConfigs: {}
    }
  }
})
</script>
