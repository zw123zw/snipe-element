<template>
  <div>
    <source-warp>
      <template #main>
        <el-row>
          <el-checkbox-group v-model="checkList">
            <snipe-el-checkbox label="复选框 A"></snipe-el-checkbox>
            <snipe-el-checkbox label="复选框 B"></snipe-el-checkbox>
            <snipe-el-checkbox label="复选框 C"></snipe-el-checkbox>
            <snipe-el-checkbox label="禁用" disabled></snipe-el-checkbox>
            <snipe-el-checkbox label="选中且禁用" disabled></snipe-el-checkbox>
          </el-checkbox-group>
        </el-row>

        <el-row>
          <el-checkbox-group v-model="checkboxGroup1" size="small">
            <el-checkbox-button
              v-for="city in cities"
              :label="city"
              :key="city"
              >{{ city }}</el-checkbox-button
            >
          </el-checkbox-group>
        </el-row>
      </template>
    </source-warp>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  data () {
    return {
      checkList: ['选中且禁用', '复选框 A'],
      checkboxGroup1: [],
      cities: ['上海', '北京', '广州', '深圳']
    }
  },
  mounted () {},
  methods: {}
}
</script>
