<template>
  <div>
    <source-warp>
      <template #main>
        <el-row>
          <snipe-el-radio v-model="radio" label="1" border
            >备选项</snipe-el-radio
          >
          <snipe-el-radio v-model="radio" label="2" border
            >备选项</snipe-el-radio
          >
          <snipe-el-radio v-model="radio" label="3" disabled border
            >备选项</snipe-el-radio
          >
        </el-row>

        <el-row>
          <el-radio-group v-model="radio1" @input="change">
            <snipe-el-radio label="11">备选项</snipe-el-radio>
            <snipe-el-radio label="12">备选项</snipe-el-radio>
          </el-radio-group>
        </el-row>

        <el-row>
          <el-radio-group v-model="radio2" size="small">
            <snipe-el-radio-button label="上海"></snipe-el-radio-button>
            <snipe-el-radio-button label="北京"></snipe-el-radio-button>
            <snipe-el-radio-button label="广州"></snipe-el-radio-button>
            <snipe-el-radio-button label="深圳"></snipe-el-radio-button>
          </el-radio-group>
        </el-row>
      </template>
    </source-warp>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  data () {
    return {
      radio: '',
      radio1: '',
      radio2: '上海'
    }
  },
  mounted () {},
  methods: {
    change () {
      console.log(this.radio1)
    }
  }
}
</script>
