<template>
  <div>
    <source-warp>
      <template #main>
        <el-row>
          <snipe-el-input-number
            v-model="num"
            @change="handleChange"
            :min="1"
            :max="10"
            label="描述文字"
          ></snipe-el-input-number>
        </el-row>
      </template>
    </source-warp>
  </div>
</template>

<script>
export default {
  name: 'InputNumber',
  data () {
    return {
      num: 1
    }
  },
  mounted () {},
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>
