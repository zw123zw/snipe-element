<template>
  <div class="table-header">
    <el-form ref="form" v-bind="formProps">
      <el-row v-for="(item, index) in finalFields" :key="index" :gutter="30">
        <el-col
          :span="eleItem.span || elSpan"
          v-for="(eleItem, index) in item"
          :key="index"
        >
          <el-form-item
            :label="`${eleItem.label}`"
            v-bind="eleProps(eleItem.itemProps)"
          >
            <slot :name="eleItem.key" :eleItem="eleItem">
              <component
                :is="eleName(eleItem.type)"
                v-model="eleItem.value"
                v-bind="eleItem.props"
                :label="eleItem.label"
                :eleKey="eleItem.key"
                :options="eleItem.options"
                :events="eleItem.events"
                @updateData="updateData"
              ></component>
            </slot>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <div class="hanle">
      <el-button plain size="small" @click="resetForm">重置</el-button>
      <el-button
        plain
        size="small"
        @click="showQuery = !showQuery"
        :class="showQuery ? 'toggle-up' : 'toggle-down'"
        v-if="rowFields.length > 1"
      >
      </el-button>
    </div>
  </div>
</template>

<script>
import create from 'core/create'
import headerCascader from './header-cascader'
import headerCheckbox from './header-checkbox'
import headerDatePicker from './header-date-picker'
import headerInput from './header-input'
import headerRadio from './header-radio'
import headerSelect from './header-select'
import headerSwitch from './header-switch'
import headerAutocomplete from './header-autocomplete'
import { getSensorsData, getSensorsName } from '../../global/common'
import _ from 'lodash'

export default create({
  name: 'table-header',
  components: {
    headerCascader,
    headerCheckbox,
    headerDatePicker,
    headerInput,
    headerRadio,
    headerSelect,
    headerSwitch,
    headerAutocomplete
  },
  props: {
    fields: {
      type: Array,
      default: () => []
    },
    formProps: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      showQuery: false,
      formClone: '',
      elSpan: 8
    }
  },
  computed: {
    elRow () {
      return Math.floor(24 / this.elSpan)
    },
    rowFields () {
      var result = []
      for (var i = 0; i < this.fields.length; i += this.elRow) {
        result.push(this.fields.slice(i, i + this.elRow))
      }
      // 拷贝数据
      if (!this.formClone) {
        const formClone = {}
        this.fields.forEach((item) => {
          formClone[item.key] = item.value
        })
        this.formClone = _.cloneDeep(formClone)
      }
      return result
    },
    remainSpan () {
      return 24 - (this.fields.length % this.elRow) * this.elSpan
    },
    finalFields () {
      if (this.showQuery) {
        return this.rowFields
      } else {
        return [this.rowFields[0]]
      }
    }
  },
  mounted () {},
  methods: {
    // Form-Item Attributes的动态属性
    eleProps: function (itemProps) {
      const defaultProps = {
        labelWidth: '100px'
      }
      return Object.assign({}, defaultProps, itemProps)
    },
    // 动态组件
    eleName: function (type) {
      return `header-${type}`
    },
    // 获取数据
    getData () {
      const params = {}
      this.fields.forEach((item) => {
        params[item.key] = item.value
      })
      return params
    },
    // 更新数据
    updateData () {
      const params = this.getData()
      this.$emit('updateData', { query: params, fields: this.fields })
    },
    // 重置数据
    resetForm () {
      this.fields.forEach((item) => {
        const _value = this.formClone[item.key]
        item.value = typeof _value !== 'undefined' ? _value : ''
      })

      const params = this.getData()
      this.$emit('resetData', { query: params, fields: this.fields })
      this.$emit('updateData', {
        query: params,
        fields: this.fields,
        from: 'resetData'
      })

      if (this.$dcsElement.sensors && this.$dcsElement.sensors.track) {
        const eventName = getSensorsName('filtrate')
        const eventData = getSensorsData({
          title: '重置'
        })
        this.$dcsElement.sensors.track(eventName, eventData)
      }
    }
  }
})
</script>

<style scoped lang="scss">
.table-header {
  display: flex;
  align-items: flex-start;
  background: $--color-white;

  .el-form {
    width: 90%;
  }

  .el-row {
    margin-bottom: 16px;

    .el-form-item {
      height: 32px;
      line-height: 32px;
      font-size: 14px;
      margin-bottom: 0;
    }
  }

  .hanle {
    display: flex;
    justify-content: flex-end;
    flex: 1;
    padding-top: 4px;

    .el-button {
      position: relative;
      display: flex;
      align-items: center;
      height: 32px;
      padding: 0 16px;
      border-radius: 4px;
      color: #5C5F66;

      &.toggle-up::after,
      &.toggle-down::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(-180deg);
        width: 16px;
        height: 16px;
        background: url("//dev-dcs-pre.baidao.com/images/down-arrow.png")
          no-repeat center/cover;
        transition: all 0.3s;
      }

      &.toggle-down::after {
        transform: translate(-50%, -50%) rotate(0deg);
      }

      &.toggle-down:hover::after,
      &.toggle-up:hover::after {
        // background: url("//dev-dcs-pre.baidao.com/images/down-arrow-active.png")
        //   no-repeat center/cover;
      }

      &:focus {
        background: #fff;
        border-color: #D7D8DB;
        color: #5C5F66;
      }

      &:hover {
        background: #F3F4F5;
        border-color: #D7D8DB !important;
        color: #5C5F66 !important;
        // border-color: #409eff;
        // color: #409eff;
      }
      &:active {
        background: #E8E9EB;
        border-color: #D7D8DB !important;
        color: #5C5F66 !important;
      }
    }
  }
}
</style>
