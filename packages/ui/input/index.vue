<template>
  <div>
    <slot name="customBefore"></slot>
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
      <template slot="prefix">
        <slot name="prefix"></slot>
      </template>
      <template slot="suffix">
        <slot name="suffix"></slot>
      </template>
    </el-input>
     <slot name="customBefore"></slot>
  </div>
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
