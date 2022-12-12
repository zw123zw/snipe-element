<template>
  <div class="app-header">
    <p>数字化平台组件库</p>
    <div class="header-right">
      <el-dropdown>
        <span class="el-dropdown-link">
          换肤<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黑色</el-dropdown-item>
          <el-dropdown-item>红色</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  methods: {},
  components: {}
}
</script>

<style scoped lang="scss">
.app-header {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  right: 0;
  width: 100%;
  height: 60px;
  background: #fff;
  color: #0e1621;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.1);
  font-size: 18px;
  font-weight: 500;
  padding: 0 20px;
  z-index: 50;

  .header-right{
    .el-dropdown{
    color: #1989fa;
    }
  }
}
</style>
