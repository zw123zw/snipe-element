<template>
  <div>
    <div
      class="fixed-scroll"
      id="fixedScroll"
      @scroll="fixedScrollHandler.handleScroll()"
      :style="{ width: `${screenWidth + 'px'}` }"
      v-if="fixedScroll"
    >
      <div
        :style="{ width: `${scrollWidth + 'px'}` }"
        style="height: 5px"
      ></div>
    </div>
  </div>
</template>

<script>
import { requestAnimFrame, on } from 'utils/src/common'

export default {
  name: 'FixedScroll',
  props: {
    fixedScroll: {
      type: Boolean,
      default: false
    }
  },
  inject: {
    dcsElTable: {
      default: ''
    }
  },
  data () {
    return {
      fixedScrollHandler: {},
      screenWidth: 0,
      scrollWidth: 0
    }
  },
  watch: {
    fixedScroll: {
      handler: function (newVal) {
        if (newVal) {
          this.scrollBarInit()
        }
      },
      immediate: true
    }
  },
  methods: {
    // 悬浮滚动条初始化
    scrollBarInit () {
      const eventListener = []
      this.fixedScrollHandler = {
        //  初始化
        init: () => {
          this.$nextTick(() => {
            // 初始化前先移除监听器
            this.fixedScrollHandler.removeListener()

            // 动态设置悬浮滚动条的样式
            const setScrollStyle = () => {
              requestAnimFrame(() => {
                const elTable = this.dcsElTable.$el.querySelector('.el-table')
                this.screenWidth = elTable.offsetWidth
                this.scrollWidth =
                  this.dcsElTable.$el.querySelector('.el-table tr').offsetWidth ||
                  0
                if (this.scrollWidth < this.screenWidth) {
                  this.scrollWidth = this.screenWidth
                }
              })
            }
            setScrollStyle()

            // 监听屏幕尺寸变化
            eventListener.push(on(window, 'resize', setScrollStyle))
          })
        },
        // 悬浮滚动条滚动同步表格滚动条
        handleScroll: () => {
          requestAnimFrame(() => {
            this.dcsElTable.$el.getElementsByClassName(
              'el-table__body-wrapper'
            )[0].scrollLeft =
              this.dcsElTable.$el.querySelector('#fixedScroll').scrollLeft
          })
        },
        // 移除监听器
        removeListener: () => {
          eventListener.forEach((fn) => fn())
        }
      }
      this.fixedScrollHandler.init()
    }
  },
  beforeDestroy () {
    if (this.fixedScroll) {
      this.fixedScrollHandler.removeListener()
    }
  }
}
</script>

<style scoped lang="scss">
.fixed-scroll {
  height: 8px;
  position: fixed;
  bottom: 5px;
  overflow-x: auto;
  overflow-y: hidden;
  z-index: 12;
  cursor: pointer;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 5px;
    box-shadow: none;
  }
  &::-webkit-scrollbar-thumb {
    background: #e1e3eb;
    border-radius: 5px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
  }
}
</style>
