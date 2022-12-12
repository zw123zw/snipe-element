<template>
  <div>
    <source-warp>
      <template #main>
        <el-row>
          <snipe-el-button>默认按钮</snipe-el-button>
          <snipe-el-button type="primary">主要按钮</snipe-el-button>
          <snipe-el-button type="success">成功按钮</snipe-el-button>
          <snipe-el-button type="info">信息按钮</snipe-el-button>
          <snipe-el-button type="warning">警告按钮</snipe-el-button>
          <snipe-el-button type="danger" :loading="true">危险按钮</snipe-el-button>
          <el-button-group>
            <snipe-el-button type="warning">警告按钮</snipe-el-button>
            <snipe-el-button type="danger">危险按钮</snipe-el-button>
          </el-button-group>
        </el-row>
      </template>
    </source-warp>
  </div>
</template>

<script>
export default {
  name: 'Button',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {}
}
</script>
