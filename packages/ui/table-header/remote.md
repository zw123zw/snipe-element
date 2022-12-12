# table-header使用说明

span (number) 响应式的比例

fields (Array)，参数如下：
label: "账号名称", //组件名称
type: "input", //组件类型
key: "account", //字段名
value: "", //初始值
"remote-method": (query, cb) => cb(data) //下拉的远程搜索
itemProps: {}, //el-form-item属性 // https://element.eleme.cn/#/zh-CN/component/form
props: {}, // 组件属性 https://element.eleme.cn/#/zh-CN/component/input