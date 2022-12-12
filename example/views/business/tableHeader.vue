<template>
  <div>
    <dcs-table-header
      :fields.sync="fields"
      @updateData="formChange"
      ref="tableHeader"
    >
    </dcs-table-header>
  </div>
</template>

<script>
export default {
  name: 'tableHeader',
  props: {},
  components: {},
  data () {
    return {
      inputVal: '',
      fields: [
        {
          label: '账号名称',
          type: 'input',
          key: 'name',
          value: ''
        },
        {
          label: '平台',
          type: 'cascader',
          key: 'channelType',
          value: '',
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
            }
          ]
        },
        {
          label: '运营状态',
          type: 'checkbox',
          key: 'status',
          value: [],
          options: [
            {
              label: '全部',
              value: '0'
            },
            {
              label: '数据1',
              value: '1'
            },
            {
              label: '数据2',
              value: '2'
            }
          ]
        },
        {
          label: '事业部',
          type: 'select',
          key: 'buList',
          value: [],
          options: [
            {
              label: '全部',
              value: '',
              select: 'all'
            },
            {
              label: '数据1',
              value: '1'
            },
            {
              label: '数据2',
              value: '2'
            },
            {
              label: '数据3',
              value: '3'
            }
          ],
          props: {
            multiple: true,
            'collapse-tags': true
          }
        },
        {
          label: '业务',
          type: 'select',
          key: 'businessCode11',
          value: '',
          options: [
            {
              label: '全部',
              value: ''
            },
            {
              label: '数据3',
              value: '3'
            }
          ],
          events: {
            asyncChange: (next, val) => {
              console.log(val)
              next()
            }
          }
        },
        {
          label: '账号状态',
          type: 'radio',
          key: 'monitorStatus',
          value: '',
          options: [
            {
              label: '全部',
              value: ''
            },
            {
              label: '数据3',
              value: '3'
            }
          ]
        },
        {
          label: '最近一次直播',
          type: 'date-picker',
          key: 'time',
          value: '',
          props: {
            type: 'datetimerange'
          }
        },
        {
          label: '启动',
          type: 'switch',
          key: 'start',
          value: false
        },
        {
          label: '账号名称',
          type: 'autocomplete',
          key: 'actonName',
          value: '',
          props: {
            'fetch-suggestions': (queryString, cb) => {
              // eslint-disable-next-line standard/no-callback-literal
              cb([
                { value: '三全鲜食（北新泾店）', address: '长宁区新渔路144号' },
                {
                  value: 'Hot honey 首尔炸鸡（仙霞路）',
                  address: '上海市长宁区淞虹路661号'
                }
              ])
            }
          },
          events: {
            select: (item) => {
              console.log(item)
            }
          }
        }
      ]
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    formChange ({ query, fields }) {
      console.log(query)
      // console.log(fields)
    },
    headerChange () {
      this.$refs.tableHeader.updateData()
    }
  }
}
</script>

<style scoped lang="scss"></style>
