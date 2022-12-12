<template>
  <div>
    <el-autocomplete
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
      <template slot="suffix">
        <slot name="suffix"></slot>
      </template>
      <template slot-scope="{ item }">
        <slot :item="item"></slot>
      </template>
    </el-autocomplete>
  </div>
</template>

<script>
import create from 'core/create'
import props from 'mixins/props'
import event from 'mixins/event'

export default create({
  name: 'el-autocomplete',
  mixins: [props(), event()],
  data () {
    return {
      defaultConfigs: {}
    }
  }
})
</script>
