<template>
  <div class="table-container">
    <el-table
      :id="id"
      v-loading="loading"
      :data="tableData"
      :default-sort="defaultSort"
      style="width: 100%"
      :class="['dcs-table', fixedScroll && 'table-fixed-scroll']"
      highlight-current-row
      ref="tableContainer"
      :row-key="rowKey"
      border
      @selection-change="handleSelectionChange"
      @current-change="handleCurrentChange"
      @sort-change="sortChange"
      @cell-mouse-enter="cellMouseEnter"
      @cell-mouse-leave="cellMouseLeave"
      @header-dragend="headerDragend"
      v-bind="tablePropsAll"
      v-on="tableEvents"
      :key="key"
    >
      <div slot="empty" v-if="customEmpty">
        <div class="noData">
          <img
            src="//dev-dcs-pre.baidao.com/images/noreport-data.png"
            class="noreport-data"
            alt=""
            srcset=""
          />
          <div class="noreportData1">暂无数据</div>
        </div>
      </div>

      <el-table-column
        type="index"
        label="序号"
        width="50"
        v-if="showIndex"
      ></el-table-column>
      <el-table-column
        type="selection"
        width="55"
        v-if="showSelection"
      ></el-table-column>

      <!-- 多级表头 -->
      <slot name="columnMore" v-if="$scopedSlots.columnMore"></slot>

      <!-- 普通表头 -->
      <el-table-column
        v-for="item in filedsReal"
        :key="item.key"
        :prop="item.key"
        :label="item.label"
        :align="item.align"
        :min-width="item.width || tableProps.columnWidth"
        :sortable="item.sortable"
        :class-name="item.sortable ? 'padding-r-24' : ''"
        :sort-orders="sortOrders"
        v-bind="columnProps(item)"
        v-else
      >
        <!-- header插槽 -->
        <template v-if="item.slotHeader">
          <template slot="header">
            <slot :name="item.slotHeader" :header="item">
              <span>{{ item.label }}</span>
            </slot>
          </template>
        </template>

        <!-- 自定义列插槽 -->
        <template slot-scope="scope">
          <div
            v-if="$scopedSlots[item.key]"
            :class="[item.key === 'handle' && 'table-handle']"
          >
            <slot
              :name="item.key"
              :row="scope.row"
              :index="scope.$index"
            ></slot>
          </div>
          <template v-else>
            <span>
              {{
                scope.row[item.key] || scope.row[item.key] === 0
                  ? scope.row[item.key]
                  : defaultVal
              }}
            </span>
          </template>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      v-if="showPagination"
      background
      :hide-on-single-page="hideOnSinglePage"
      @current-change="pageChange"
      @size-change="pageChange"
      :pager-count="pagerCount"
      :current-page.sync="pagination.page"
      :page-size.sync="pagination.pageSize"
      :page-sizes="pagination.pageSizes || [10, 20, 50, 100]"
      :layout="pagination.layout || 'total, prev, pager, next, sizes, jumper'"
      :total="pagination.total"
    >
    </el-pagination>

    <!-- 悬浮滚动条 -->
    <fixed-scroll :fixedScroll="fixedScroll" ref="fixedScroll"></fixed-scroll>

    <!-- 工具栏 -->
    <div class="table-toolbar">
      <!-- 配置表头 -->
      <deploy-table-header
        :deployTableHeader="deployTableHeader"
        :fileds="fileds"
        @updateFileds="updateFileds"
      ></deploy-table-header>
    </div>
  </div>
</template>

<script>
import create from 'core/create'
import FixedScroll from './components/fixed-scroll.vue'
import DeployTableHeader from './components/deploy-table-header.vue'

export default create({
  name: 'table-container',
  components: {
    FixedScroll,
    DeployTableHeader
  },
  props: {
    id: {
      type: String,
      default: ''
    },
    tableData: {
      type: Array,
      default: () => []
    },
    fileds: {
      type: Array,
      default: () => []
    },
    showIndex: {
      type: Boolean,
      default: false
    },
    defaultSort: {
      type: Object,
      default: () => ({})
    },
    showPagination: {
      type: Boolean,
      default: true
    },
    hideOnSinglePage: {
      type: Boolean,
      default: false
    },
    showSelection: {
      type: Boolean,
      default: false
    },
    pagerCount: {
      type: Number,
      default: 7
    },
    rowKey: {
      type: String,
      default: 'id'
    },
    pagination: {
      type: Object,
      default: () => {
        return {
          total: 0,
          page: 1,
          pageSize: 10
        }
      }
    },
    loading: {
      type: Boolean,
      default: true
    },
    tableProps: {
      type: Object,
      default: () => ({})
    },
    tableEvents: {
      type: Object,
      default: () => ({})
    },
    height: {
      type: String | Number,
      default: ''
    },
    defaultVal: {
      type: String,
      default: '-'
    },
    fixedScroll: {
      type: Boolean,
      default: false
    },
    deployTableHeader: {
      type: Boolean,
      default: false
    },
    customEmpty: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      sortOrders: ['descending', 'ascending', null],
      newFileds: [],
      key: 1
    }
  },
  provide () {
    return {
      dcsElTable: this
    }
  },
  computed: {
    tablePropsAll: function () {
      const propsData = {
        ...this.tableProps
      }
      if (this.height) propsData.height = this.height

      return propsData
    },
    hashName: function () {
      return window.location.hash
    },
    filedsReal: function () {
      return this.deployTableHeader ? this.newFileds : this.fileds
    }
  },
  watch: {
    fileds: {
      handler: function (newVal) {
        this.updateFiledsWidth()
      },
      immediate: true
    }
  },
  mounted () {},
  methods: {
    handleSelectionChange (val) {
      this.$emit('handleSelectionChange', val)
    },
    setCurrent (row) {
      this.$refs.tableContainer.setCurrentRow(row)
    },
    handleCurrentChange (currentRow, oldCurrentRow) {
      if (currentRow) {
        this.$emit('handleCurrentChange', currentRow)
      }
    },
    cellMouseEnter (row, column, cell, event) {
      this.$emit('cellMouseEnter', row, column, cell, event)
    },
    cellMouseLeave (row, column, cell, event) {
      this.$emit('cellMouseLeave', row, column, cell, event)
    },
    sortChange (val) {
      this.$emit('sortChange', val)
    },
    pageChange () {
      this.$emit('pageChange', this.pagination)
    },
    // 拖拽表头宽度
    headerDragend (newWidth, oldWidth, column) {
      const name = this.hashName
      const columnName = column.property
      const width = newWidth
      let val = window.localStorage.getItem('dcs_table_column_width')
      val = val ? JSON.parse(val) : {}

      if (!val[name]) {
        val[name] = {}
      }

      if (!val[name][this.id]) {
        val[name][this.id] = {}
      }

      val[name][this.id][columnName] = width
      window.localStorage.setItem(
        'dcs_table_column_width',
        JSON.stringify(val)
      )
    },
    // 更新表头宽度
    updateFiledsWidth () {
      let val = window.localStorage.getItem('dcs_table_column_width')
      val = val ? JSON.parse(val) : {}
      const name = this.hashName
      const columnWidth = val[name]
        ? val[name][this.id]
          ? val[name][this.id]
          : {}
        : {}

      this.fileds.forEach((item) => {
        if (columnWidth[item.key]) {
          item.width = columnWidth[item.key]
        }
      })
    },
    // 更新表头
    updateFileds (data) {
      const res = data.map((v, i) => {
        return {
          key: v.key,
          show: v.deployShow
        }
      })
      this.$emit('headerChange', res)

      // 更新普通表头
      this.newFileds = data.filter((v) => v.deployShow)
      this.key++
      this.$refs.fixedScroll.scrollBarInit()
    },
    // 处理column的属性
    columnProps (column) {
      const props = column.props || {}

      // 设置悬浮列
      if (column.label === '操作' || column.fixed) {
        props.fixed = column.fixed || 'right'
      }

      // 设置内容过长隐藏
      if (column.showTooltip) {
        props['show-overflow-tooltip'] = column.showTooltip
      }

      return props
    }
  }
})
</script>

<style lang="scss" scoped>
.table-container {
  position: relative;
  height: 100%;
  width: 100%;

  ::v-deep .el-table {
    height: calc(100% - 42px);
    overflow-y: auto;
    border-color: transparent;

    &::before {
      height: 0;
      background-color: #fff;
    }

    .padding-r-24 {
      padding-right: 24px !important;
    }

    .is-sortable {
      padding-right: 0px !important;
    }

    &.el-table--border::after {
      display: none;
    }

    &.table-fixed-scroll {
      .el-table__body-wrapper {
        overflow: hidden;
      }
    }

    thead {
      tr {
        height: 40px;

        th {
          background: #f3f4f5;
          padding: 0;
          font-weight: normal;
          border-right-color: transparent;
          user-select: auto;

          &:hover {
            border-right-color: #e8e9eb;
          }

          &:first-child {
            border-radius: 4px 0 0px 0px;
          }

          &:last-child {
            border-radius: 0 4px 0px 0px;
          }
        }
      }
    }
    tr {
      // &.hover-row {
      //   td {
      //     background: none;
      //     animation: myfirst 0.8s;

      //     @keyframes myfirst {
      //       0% {
      //         background: #f5f7fa;
      //       }
      //       70% {
      //         background: #f5f7fa;
      //       }
      //       100% {
      //         background: none;
      //       }
      //     }
      //   }
      // }

      td {
        padding: 8px 0;
        box-sizing: border-box;
        border-right-color: transparent;

        .table-handle {
          .el-button{
            padding-top: 0;
            padding-bottom: 0;
          }
        }
      }

      &:last-child {
        // td {
        //   border: none;
        // }
      }
    }

    .el-table__fixed-right {
      height: 100% !important;

      &::before {
        background-color: #fff;
      }
    }

    .el-table__fixed {
      height: 100% !important;
    }

    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #fff;
      border-radius: 5px;
      box-shadow: none;
    }
    ::-webkit-scrollbar-thumb {
      background: #e1e3eb;
      border-radius: 5px;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
    }

    .noData {
      position: relative;
      height: 300px;
      .noreport-data {
        width: 144px;
        height: 152px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .noreportData1 {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #909399;
        line-height: 22px;
        margin-top: 81px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }

  .el-pagination {
    margin-top: 10px;
    text-align: right;
    color: #595959;
    font-weight: 400;
  }

  ::v-deep .el-pagination.is-background {
    .btn-next {
      background-color: #fff;
    }
    .btn-prev {
      background-color: #fff;
    }
    // .el-pager {
    //   li {
    //     background-color: #fff;
    //     color: #5C5F66;
    //   }
    //   li:not(.disabled).active {
    //     background: #EDF3FF;
    //     color: $--color-primary;
    //   }
    // }
  }

  .table-toolbar {
    position: absolute;
    right: 0;
    top: -20px;
  }
}
</style>
