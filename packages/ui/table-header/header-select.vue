<template>
  <div>
    <el-select
      v-model="fieldValue"
      v-bind="configs"
      :remote-method="remoteMethod"
      v-on="events"
      @change="change"
      @focus="handleFocus"
      ref="dcsSelect"
    >
      <el-option
        v-for="item in fieldOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
  </div>
</template>

<script>
import mixinHeader from './mixinHeader'

export default {
  name: 'headerSelect',
  mixins: [mixinHeader],
  data () {
    return {
      defaultConfigs: {
        placeholder: `请选择${this.label}`,
        clearable: true,
        filterable: true,
        size: 'small'
      }
    }
  },
  methods: {
    change (data) {
      const next = (newValue) => {
        this.fieldValue =
          typeof newValue !== 'undefined' ? newValue : this.fieldValue

        // 全选
        if (this.configs.multiple) {
          data.forEach((val) => {
            const itemOption = this.fieldOptions.find(
              (vItem) => vItem.value === val
            )
            if (itemOption && itemOption.select) {
              this.fieldValue = this.fieldOptions
                .filter((item) => typeof item.select === 'undefined')
                .map((item) => item.value)
            }
          })
        }

        this.$emit('change', this.fieldValue)
        this.$emit('updateData')
        this.handleSensors()
      }
      if (typeof this.events.asyncChange === 'function') {
        // 异步更新数据
        this.events.asyncChange(next, this.fieldValue)
      } else {
        next()
      }
    },
    // 解决下拉选项显示不全问题
    handleFocus () {
      this.$refs.dcsSelect.handleQueryChange()
    },
    remoteMethod (query) {
      if (typeof this.$attrs['remote-method'] === 'function') {
        const cb = (options) => {
          this.fieldOptions = options
        }
        this.$attrs['remote-method'](query, cb)
      }
    }
  }
}
</script>
<style scoped lang="scss">
::v-deep .el-select {
  width: 100%;

  .el-input--small {
    .el-input__prefix,
    .el-input__suffix {
      line-height: 30px;
    }

    .el-input__icon {
      line-height: 30px;
    }
  }
}
</style>
