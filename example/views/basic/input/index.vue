<template>
  <div>
    <source-warp>
      <template #main>
        <el-row>
          <div class="demo-title">普通状态</div>
          <dcs-el-input v-model="name"></dcs-el-input>
        </el-row>
        <el-row>
          <div class="demo-title">禁用状态</div>
          <dcs-el-input v-model="name1" :disabled="true"></dcs-el-input>
        </el-row>
      </template>
    </source-warp>
  </div>
</template>

<script>
export default {
  name: 'dcsInput',
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
