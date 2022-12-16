<template>
  <div class="source-warp">
    <div class="card-title">基础用法</div>
    <el-card class="box-card">
      <slot name="main">
        <a
          class="link"
          href="https://element.eleme.cn/#/zh-CN/component/input"
          target="_blank"
          >参考Element</a
        >
      </slot>
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="显示代码" name="1">
          <pre><code>{{source}}</code></pre>
        </el-collapse-item>
      </el-collapse>
    </el-card>
    <div class="card-title">属性</div>
    <el-card class="box-card">
      <slot name="attrContext">
        <el-table :data="attrList" v-if="attrList && attrList.length" style="width: 100%">
          <el-table-column
            :prop="item.prop"
            :label="item.label"
            v-for="(item, index) in columns"
            :key="index"
          >
            <template slot-scope="scope">
              {{ scope.row[item.prop] || "-" }}
            </template>
          </el-table-column>
        </el-table>
        <a
          class="link"
          href="https://element.eleme.cn/#/zh-CN/component/input"
          target="_blank"
          v-else
          >参考Element</a
        >
      </slot>
    </el-card>
    <div class="card-title">事件</div>
    <el-card class="box-card">
      <slot name="eventContext">
        <el-table :data="eventsList" v-if="eventsList && eventsList.length" style="width: 100%">
          <el-table-column
            :prop="item.prop"
            :label="item.label"
            v-for="(item, index) in columnsEvent"
            :key="index"
          >
            <template slot-scope="scope">
              {{ scope.row[item.prop] || "-" }}
            </template>
          </el-table-column>
        </el-table>
        <a
          class="link"
          href="https://element.eleme.cn/#/zh-CN/component/input"
          target="_blank"
          v-else
          >参考Element</a
        >
      </slot>
    </el-card>
    <div class="card-title">方法</div>
    <el-card class="box-card">
      <slot name="methodContext">
        <el-table :data="methodsList" v-if="methodsList && methodsList.length" style="width: 100%">
          <el-table-column
            :prop="item.prop"
            :label="item.label"
            v-for="(item, index) in columnsMethods"
            :key="index"
          >
            <template slot-scope="scope">
              {{ scope.row[item.prop] || "-" }}
            </template>
          </el-table-column>
        </el-table>
        <a
          class="link"
          href="https://element.eleme.cn/#/zh-CN/component/input"
          target="_blank"
          v-else
          >参考Element</a
        >
      </slot>
    </el-card>
    <div class="card-title">插槽</div>
    <el-card class="box-card">
      <slot name="methodContext">
        <el-table :data="slotsList" v-if="slotsList && slotsList.length" style="width: 100%">
          <el-table-column
            :prop="item.prop"
            :label="item.label"
            v-for="(item, index) in columnsSlots"
            :key="index"
          >
            <template slot-scope="scope">
              {{ scope.row[item.prop] || "-" }}
            </template>
          </el-table-column>
        </el-table>
        <a
          class="link"
          href="https://element.eleme.cn/#/zh-CN/component/input"
          target="_blank"
          v-else
          >参考Element</a
        >
      </slot>
    </el-card>
    <slot></slot>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'sourceWarp',
  props: {},
  data () {
    return {
      activeName: '0',
      source: '',
      attrList: [],
      eventsList: [],
      methodsList: [],
      slotsList: [],
      columns: [
        {
          prop: 'label',
          label: '参数'
        },
        {
          prop: 'description',
          label: '说明'
        },
        {
          prop: 'type',
          label: '类型'
        },
        {
          prop: 'value',
          label: '默认值'
        },
        {
          prop: 'fields',
          label: '可选值'
        }
      ],
      columnsEvent: [
        {
          prop: 'label',
          label: '事件名'
        },
        {
          prop: 'description',
          label: '说明'
        },
        {
          prop: 'params',
          label: '回调参数'
        }
      ],
      columnsMethods: [
        {
          prop: 'label',
          label: '方法名'
        },
        {
          prop: 'description',
          label: '说明'
        },
        {
          prop: 'params',
          label: '参数'
        }
      ],
      columnsSlots: [
        {
          prop: 'label',
          label: 'name'
        },
        {
          prop: 'description',
          label: '说明'
        }
      ]
    }
  },
  computed: {},
  created () {},
  mounted () {
    const name = this.$route.path.split('/').filter((item) => item !== '')
    this.getSource(name)
  },
  methods: {
    getSource (name) {
      try {
        axios(`/source/${name[0]}/${name[1]}/index.vue`, {
          responseType: 'text'
        }).then((res) => {
          this.source = res.data
        })
        axios(`/source/${name[0]}/${name[1]}/description.json`, {
          responseType: 'text'
        }).then((res) => {
          if (res.data) {
            this.attrList = res.data.attrs
            this.eventsList = res.data.events
            this.methodsList = res.data.methods
            this.slotsList = res.data.slots
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.card-title {
  margin-bottom: 20px;
}
.box-card {
  margin-bottom: 40px;
}
.el-collapse {
  margin-top: 40px;
}
</style>
