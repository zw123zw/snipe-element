<template>
  <div>
    <dcs-table-container
      id="test2"
      :tableData="tableData"
      :fileds="tableFieds1"
      showPagination
      :pagination.sync="pagination"
      @sortChange="sortChange"
      @pageChange="pageChange"
      @handleSelectionChange="handleSelectionChange"
      :loading="loading"
      :default-sort="defaultSort"
      fixedScroll
      deployTableHeader
    >
      <template v-slot:title_header="scope">
        <span>{{ scope.header.label + "表头插槽测试" }}</span>
      </template>

      <template v-slot:[customColumn[0].slot]="scope">
        <div>{{ scope.row[customColumn[0].slot] + "test" }}</div>
      </template>

      <template v-slot:type="scope">
        <span>{{ scope.row.type }}测试</span>
      </template>

      <template v-slot:handle>
        <div style="display: flex; align-items: center">
          <el-button class="handle" type="text" size="small">编辑</el-button>
          <el-button class="handle" type="text" size="small">删除</el-button>
        </div>
      </template>
    </dcs-table-container>

    <dcs-table-container
      id="test1"
      :tableData="tableData"
      :fileds="tableFieds"
      showPagination
      :pagination.sync="pagination"
      @sortChange="sortChange"
      @pageChange="pageChange"
      @handleSelectionChange="handleSelectionChange"
      :loading="loading"
      :default-sort="defaultSort"
      defaultVal=""
      :showSelection="false"
      height="500"
      deployTableHeader
      :tableProps="{
        'span-method': arraySpanMethod,
      }"
      @headerChange="headerChange"
    >
      <!-- <template v-slot:columnMore>
        <el-table-column label="配送信息">
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column label="地址">
            <el-table-column prop="province" label="省份" width="120">
            </el-table-column>
          </el-table-column>
        </el-table-column>
      </template> -->

      <template v-slot:title_header="scope">
        <span>{{ scope.header.label + "表头插槽测试" }}</span>
      </template>

      <template v-slot:[customColumn[0].slot]="scope">
        <div>{{ scope.row[customColumn[0].slot] + "test" }}</div>
      </template>

      <template v-slot:type="scope">
        <span>{{ scope.row.type }}</span>
        <span>{{ scope.index }}</span>
      </template>

      <template v-slot:handle>
        <span>zwzwzwzwzwzwzwzw</span>
      </template>
    </dcs-table-container>
  </div>
</template>

<script>
export default {
  name: 'tableContainer',
  props: {},
  components: {},
  data () {
    return {
      loading: false,
      customColumn: [
        {
          slot: 'title'
        }
      ],
      tableData: [],
      tableFieds1: [
        {
          key: 'title',
          label: '视频内容',
          sortable: 'custom',
          width: '355',
          slotHeader: 'title_header',
          fixed: 'left'
        },
        {
          key: 'subject',
          label: '主题',
          width: '220',
          showTooltip: true
        },
        {
          key: 'createTime',
          label: '发布时间',
          sortable: 'custom',
          width: '170'
        },
        {
          key: 'type',
          label: '类型',
          sortable: 'custom',
          width: '100'
        },
        {
          key: 'name',
          label: '账号',
          width: '200',
          sortable: 'custom'
        },
        {
          key: 'bu',
          label: '事业部',
          sortable: 'custom',
          width: '110'
        },
        {
          key: 'channelTypeDesc',
          label: '平台',
          sortable: 'custom',
          width: '90'
        },
        {
          key: 'longHours',
          label: '视频时长',
          sortable: 'custom',
          width: '130',
          align: 'center'
        },
        {
          key: 'handle',
          label: '操作',
          width: '120'
        }
      ],
      tableFieds: [
        {
          key: 'title',
          label: '视频内容',
          sortable: 'custom',
          width: '355',
          slotHeader: 'title_header',
          fixed: 'left'
        },
        {
          key: 'subject',
          label: '主题',
          width: '200'
        },
        {
          key: 'createTime',
          label: '发布时间',
          sortable: 'custom',
          width: '170'
        },
        {
          key: 'type',
          label: '类型',
          sortable: 'custom',
          width: '100'
        },
        {
          key: 'name',
          label: '账号',
          width: '200',
          sortable: 'custom'
        },
        {
          key: 'type1',
          label: '类型1',
          sortable: 'custom',
          width: '100'
        },
        {
          key: 'name1',
          label: '账号1',
          width: '200',
          sortable: 'custom'
        },
        {
          key: 'type2',
          label: '类型2',
          sortable: 'custom',
          width: '100'
        },
        {
          key: 'name2',
          label: '账号2',
          width: '200',
          sortable: 'custom'
        },
        {
          key: 'bu',
          label: '事业部',
          sortable: 'custom',
          width: '110'
        },
        {
          key: 'channelTypeDesc',
          label: '平台',
          sortable: 'custom',
          width: '90'
        },
        {
          key: 'longHours',
          label: '视频时长',
          sortable: 'custom',
          width: '130',
          align: 'center'
        },
        {
          key: 'handle',
          label: '操作',
          width: '120'
        }
      ],
      defaultSort: {
        prop: 'createTime',
        order: 'descending'
      },
      pagination: {
        page: 1,
        pageSize: 10,
        total: 0
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    for (let i = 0; i < 20; i++) {
      this.tableData.push({
        title: '13',
        subject:
          '666613213666613213666613213666613213666613213666613213666613213',
        createTime: '333',
        type: '333',
        name: '333',
        longHours: '333',
        handle: '333'
      })
    }
  },
  methods: {
    sortChange () {
      console.log('排序改变')
    },
    pageChange () {
      console.log('分页改变')
    },
    handleSelectionChange (val) {
      console.log('多选', val)
    },
    arraySpanMethod ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },
    headerChange (data) {
      console.log(data)
    }
  }
}
</script>

<style scoped lang="scss">
.table-container {
  margin-bottom: 50px;
}

.none {
  display: none;
}
</style>
