<template>
  <div class="app-sidebar">
    <el-menu :default-active="active">
      <el-submenu
        :index="index.toString()"
        v-for="(item, index) in allRouteList"
        class="menu-title"
        :key="index"
      >
        <template slot="title">
          <span slot="title">{{ item.meta.title }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            class="menu-text"
            :index="`${index}-${cIndex}`"
            v-for="(cItem, cIndex) in item.children"
            :key="cIndex"
            @click="pageChange(cItem, item)"
            >{{ cItem.meta.title }}</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'AppSidebar',
  props: {},
  data () {
    return {
      active: '0',
      allRouteList: []
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {
    this.allRouteList = JSON.parse(localStorage.getItem('routeList'))
  },
  methods: {
    // 切换页面
    pageChange (cItem, item) {
      this.$router.push(item.path + '/' + cItem.path)
    }
  }
}
</script>

<style scoped lang="scss">
.app-sidebar {
  position: fixed;
  top: 60px;
  left: 0;
  height: calc(100vh - 60px);
  width: 220px;
  overflow: hidden;
  transition: all 0.3s;
  z-index: 40;

  .el-menu {
    height: 100%;
    overflow: auto;

    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    &::-webkit-scrollbar-track {
      background: #fff;
      border-radius: 5px;
      box-shadow: none;
    }
    &::-webkit-scrollbar-thumb {
      background: #e1e3eb;
      border-radius: 5px;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
    }

    .menu-title {
      font-size: 16px;
      color: #333;
      font-weight: bold;

      .menu-text {
        display: block;
        color: #444;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: 400;
      }
    }
  }
}
</style>
