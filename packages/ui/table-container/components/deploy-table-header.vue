<template>
  <div class="deploy-table-header">
    <el-tooltip
      class="item"
      effect="dark"
      content="配置表头"
      placement="top"
      v-if="deployTableHeader"
    >
      <el-popover placement="bottom-end" width="200" trigger="click">
        <i class="el-icon-setting" slot="reference"></i>

        <div class="tableheader-checkbox">
          <el-checkbox
            :indeterminate="isIndeterminate"
            @change="handleCheckAllChange"
            v-model="checkAll"
            >全选
          </el-checkbox>

          <div class="reset" @click="reset">重置</div>

          <div class="checkbox-solid"></div>

          <div class="noData" v-if="!newFileds.length">
            <div class="noreportData1">暂无数据</div>
          </div>

          <el-checkbox-group
            v-if="newFileds.length"
            v-model="checkFileds"
            text-color="#292C33"
            @change="handleCheckedChange"
          >
            <draggable
              v-model="newFileds"
              @update="datadragEnd"
              :options="{ animation: 500 }"
            >
              <transition-group>
                <el-checkbox
                  v-for="item in newFileds"
                  :label="item.label"
                  :key="item.key"
                >
                  <div class="checkbox-text">
                    <span>{{ item.label }}</span>
                  </div>
                </el-checkbox>
              </transition-group>
            </draggable>
          </el-checkbox-group>
        </div>
      </el-popover>
    </el-tooltip>
  </div>
</template>

<script>
import _ from 'lodash'
import draggable from 'vuedraggable'

export default {
  name: 'DeployTableHeader',
  components: {
    draggable
  },
  props: {
    deployTableHeader: {
      type: Boolean,
      default: false
    },
    fileds: {
      type: Array,
      default: () => []
    }
  },
  inject: {
    snipeElTable: {
      default: ''
    }
  },
  data () {
    return {
      isIndeterminate: false,
      checkAll: false,
      newFileds: [],
      checkFileds: []
    }
  },
  watch: {
    fileds: {
      handler: function (newVal) {
        if (this.deployTableHeader) {
          this.newFileds = _.cloneDeep(newVal)
          const oldData = this.getStorage()

          if (!oldData) {
            //   当没有缓存表头信息时默认全部选中
            this.checkFileds = this.newFileds.map((v) => v.label)
            this.isIndeterminate = false
            this.checkAll = true
          } else {
            const dataReal = []
            // 设置显示隐藏标记
            oldData.forEach((v) => {
              const item = this.newFileds.find((r) => r.key === v.key)
              if (item) {
                item.deployShow = v.deployShow
                dataReal.push(item)
              }
            })

            // 新增的列表项
            this.newFileds.forEach((v, index) => {
              const item = oldData.find((r) => r.key === v.key)
              if (!item) {
                v.deployShow = true
                dataReal.splice(index, 0, v)
              }
            })

            this.newFileds = dataReal
            // 同步选择器的值
            this.checkFileds = this.newFileds
              .filter((v) => v.deployShow)
              .map((v) => v.label)
          }
          this.handleCheckedChange(this.checkFileds)
        }
      },
      immediate: true
    }
  },
  methods: {
    reset () {
      this.checkAll = true
      this.handleCheckAllChange(true)
    },
    handleCheckAllChange (val) {
      this.checkFileds = val ? this.newFileds.map((v) => v.label) : []
      this.isIndeterminate = false
      this.updateFileds()
    },
    handleCheckedChange (value) {
      const checkedCount = value.length
      this.checkAll = checkedCount === this.newFileds.length
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.newFileds.length
      this.updateFileds()
    },
    datadragEnd (e) {
      this.updateFileds()
      e.preventDefault()
    },
    // 获取保留的表头信息
    getStorage () {
      let val = window.localStorage.getItem('dcs_table_header_deploy')
      val = val ? JSON.parse(val) : {}
      const name = this.snipeElTable.hashName
      const res = val[name]
        ? val[name][this.snipeElTable.id]
          ? val[name][this.snipeElTable.id]
          : undefined
        : undefined
      return res
    },
    // 设置表头信息
    setStorage () {
      let oldData = window.localStorage.getItem('dcs_table_header_deploy')
      oldData = oldData ? JSON.parse(oldData) : {}
      const name = this.snipeElTable.hashName

      if (!oldData[name]) {
        oldData[name] = {}
      }

      oldData[name][this.snipeElTable.id] = this.newFileds.map((v) => {
        return {
          key: v.key,
          deployShow: v.deployShow
        }
      })
      window.localStorage.setItem(
        'dcs_table_header_deploy',
        JSON.stringify(oldData)
      )
    },
    // 更新表头
    updateFileds () {
      // 设置显示隐藏
      this.newFileds.forEach((item) => {
        const index = this.checkFileds.findIndex((name) => name === item.label)
        item.deployShow = index !== -1
      })

      // this.setStorage() //先不存储表格信息
      this.$emit(
        'updateFileds',
        this.newFileds
      )
    }
  }
}
</script>

<style lang="scss">
.sortable-chosen {
  background: #c4e3ff;
  border-bottom: 1px dashed #1a66ff;
}
.tableheader-checkbox {
  .noData {
    position: relative;
    height: 200px;
    .noreportData1 {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      line-height: 22px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  border-radius: 4px;
  .el-checkbox__input.is-checked .el-checkbox__inner,
  .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #1a66ff !important;
    border-color: #1a66ff !important;
  }
  .el-checkbox__input .el-checkbox__label {
    color: #606266;
  }
  .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #606266;
  }
  .el-checkbox-group {
    height: 200px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    &::-webkit-scrollbar-track {
      background: #fff;
      border-radius: 5px;
      box-shadow: none;
    }
    &::-webkit-scrollbar-thumb {
      background: #e1e3eb;
      border-radius: 5px;
    }
    .el-checkbox {
      &::before {
        //content: '\e6ae';
        font-family: "iconfont";
        margin-right: 10px;
        // content: '#xe6d0';
      }
    }
  }
  .el-checkbox {
    width: 100%;
    margin-right: 0;
    margin-bottom: 10px;
    .el-checkbox__label {
      .checkbox-text {
        display: flex;
        align-items: center;

        span {
          max-width: 135px;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
  .checkbox-tip {
    font-size: 16px;
    font-weight: 400;
    color: #343434;
    line-height: 24px;
    margin-bottom: 16px;
  }
  .checkbox-solid {
    position: relative;
    height: 1px;
    background: #f0f0f0;
    margin-bottom: 10px;
  }
  .reset {
    position: absolute;
    right: 24px;
    top: 10px;
    width: 28px;
    height: 22px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #1966ff;
    line-height: 22px;
    cursor: pointer;
  }
}
</style>
<style scoped lang="scss">
.deploy-table-header {
  cursor: pointer;
}
</style>
