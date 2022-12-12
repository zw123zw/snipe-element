<template>
  <div>
    <source-warp>
      <template #main>
        <el-row>
          <snipe-el-select v-model="value" placeholder="请选择" @change="change">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </snipe-el-select>
        </el-row>
      </template>
    </source-warp>
  </div>
</template>

<script>
export default {
  name: 'Select',
  data () {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: ''
    }
  },
  mounted () {},
  methods: {
    change (value) {
      console.log(value)
    }
  }
}
</script>
