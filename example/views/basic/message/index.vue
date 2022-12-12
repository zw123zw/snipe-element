<template>
  <div>
    <el-button @click="openMessage('success')">成功</el-button>
    <el-button @click="openMessage('warning')">警告</el-button>
    <el-button @click="openMessage('info')">消息</el-button>
    <el-button @click="openMessage('error')">错误</el-button>
    <el-button @click="openMessage('', 'el-message__icon el-icon-loading')">加载</el-button>
    <div class="test"></div>
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
        message:
          '消息内容消息内容',
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
.iconfont{
  font-size: 30px;
}
</style>
