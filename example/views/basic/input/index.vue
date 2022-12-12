<template>
  <div>
    <source-warp>
      <template #main>
        <el-row>
          <div class="demo-title">普通状态</div>
          <snipe-el-input v-model="name">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </snipe-el-input>
        </el-row>
        <el-row>
          <div class="demo-title">禁用状态</div>
          <snipe-el-input v-model="name1" :disabled="true">
            <i slot="suffix" class="el-input__icon el-icon-date"></i>
          </snipe-el-input>
        </el-row>
        <el-row>
          <div class="demo-title">自定义插槽</div>
          <snipe-el-input v-model="name1" :disabled="true">
            <template v-slot:customBefore>自定义前置插槽</template>
            <template v-slot:customAfter>自定义后置插槽</template>
          </snipe-el-input>
        </el-row>
      </template>
    </source-warp>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data () {
    return {
      name: '',
      name1: ''
    }
  },
  mounted () {
  },
  methods: {}
}
</script>
