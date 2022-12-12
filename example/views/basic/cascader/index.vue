<template>
  <div>
    <source-warp>
      <template #main>
        <el-row>
          <snipe-el-cascader
            v-model="value"
            :options="options"
            @change="handleChange"
          ></snipe-el-cascader>
        </el-row>
        <el-row>
          <snipe-el-cascader
            v-model="value1"
            :options="options"
            @change="handleChange"
            :props="props"
          ></snipe-el-cascader>
        </el-row>
        <el-row>
          <snipe-el-cascader :options="options">
            <template slot-scope="{ node, data }">
              <span>{{ data.label }}</span>
              <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
            </template>
          </snipe-el-cascader>
        </el-row>
      </template>
    </source-warp>
  </div>
</template>

<script>
let id = 0
export default {
  name: 'Cascader',
  data () {
    return {
      props: {
        lazy: true,
        lazyLoad (node, resolve) {
          const { level } = node
          setTimeout(() => {
            const nodes = Array.from({ length: level + 1 }).map((item) => ({
              value: ++id,
              label: `选项${id}`,
              leaf: level >= 2
            }))
            // 通过调用resolve将子节点数据返回，通知组件数据加载完成
            resolve(nodes)
          }, 1000)
        }
      },
      value: [],
      value1: [],
      options: [
        {
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致'
                },
                {
                  value: 'fankui',
                  label: '反馈'
                }
              ]
            }
          ]
        },
        {
          value: 'daohang',
          label: '导航',
          children: [
            {
              value: 'cexiangdaohang',
              label: '侧向导航'
            },
            {
              value: 'dingbudaohang',
              label: '顶部导航'
            }
          ]
        }
      ]
    }
  },
  mounted () {},
  methods: {
    handleChange (value) {
      console.log(value)
    },
    pint (data) {
      console.log(data)
      return '000'
    }
  }
}
</script>
