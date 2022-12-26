<template>
  <div>
    <source-warp>
      <template #main>
        <el-row>
          <snipe-el-button @click="openMessage('success')">成功</snipe-el-button>
          <snipe-el-button @click="openMessage('warning')">警告</snipe-el-button>
          <snipe-el-button @click="openMessage('info')">消息</snipe-el-button>
          <snipe-el-button @click="openMessage('error')">错误</snipe-el-button>
          <snipe-el-button
            @click="openMessage('', 'el-message__icon el-icon-loading')"
            >加载</snipe-el-button
          >
        </el-row>
      </template>
    </source-warp>
  </div>
</template>

<script>
export default {
  name: 'dcsMessage',
  data () {
    return {}
  },
  mounted () {},
  methods: {
    openMessage (type, iconClass) {
      this.$message({
        message: '消息内容消息内容',
        type: type || '',
        showClose: true,
        iconClass: iconClass
      })
    }
  }
}
</script>
<style lang="scss" scoped>
div {
  margin: 10px 0;
}
.iconfont {
  font-size: 30px;
}
</style>
