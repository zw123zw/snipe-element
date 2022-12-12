<template>
  <div>
    <source-warp>
      <template #main>
        <el-row>
          <snipe-el-link href="https://element.eleme.io" target="_blank">默认链接</snipe-el-link>
          <snipe-el-link type="primary">主要链接</snipe-el-link>
          <snipe-el-link type="success">成功链接</snipe-el-link>
          <snipe-el-link type="warning">警告链接</snipe-el-link>
          <snipe-el-link type="danger">危险链接</snipe-el-link>
          <snipe-el-link type="info" :underline="false">信息链接</snipe-el-link>
        </el-row>
      </template>
    </source-warp>
  </div>
</template>

<script>
export default {
  name: 'Link',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {}
}
</script>
