<template>
  <div>
    <source-warp>
      <template #main>
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
        <div class="test"></div>
      </template>
    </source-warp>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  data () {
    return {}
  },
  mounted () {},
  methods: {
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
