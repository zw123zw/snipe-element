<template>
  <div>
    <el-button @click="openMessage('success')">成功</el-button>
    <el-button @click="openMessage('warning')">警告</el-button>
    <el-button @click="openMessage('info')">消息</el-button>
    <el-button @click="openMessage('error')">错误</el-button>
    <el-button @click="openMessage('', 'el-message__icon el-icon-loading')">加载</el-button>
    <div>
      <i class="iconfont icon-fuxuanjinyong"></i>
      <i class="iconfont icon-excel"></i>
      <i class="iconfont icon-daoxu"></i>
      <i class="iconfont icon-jia"></i>
      <i class="iconfont icon-mianxingjiabinguanli"></i>
      <i class="iconfont icon-mianxingjisuan"></i>
      <i class="iconfont icon-mianxingyingyong"></i>
      <i class="iconfont icon-shuju"></i>
      <i class="iconfont icon-xianxingtianjia"></i>
      <i class="iconfont icon-zhibo"></i>
      <i class="iconfont icon-zuhe"></i>
      <i class="iconfont icon-xianxingfeiyongguanli"></i>
      <i class="iconfont icon-xinzengshuliang"></i>
      <i class="iconfont icon-tubiao"></i>
    </div>
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
        duration: 0,
        showClose: true,
        iconClass: iconClass
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.test {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &:before {
    content: "\e687";
  }
}
div {
  margin: 10px 0;
}
.iconfont{
  font-size: 30px;
}
</style>
