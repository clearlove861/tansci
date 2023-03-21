<template>
  <div class="Marketing">
    <el-card>
        <el-row class="search" style="height: 46px;background-color: #EFF4F9">
            <div style="padding-right: 22px"><el-button  type="primary" >添加用户</el-button></div>
            <div style="padding-right: 22px"><el-input  placeholder="请输入用户名称"></el-input></div>
            <div style="padding-right: 22px"><el-button  icon="RefreshRight" circle></el-button></div>
            <div style="padding-right: 22px"><el-button  type="primary" icon="Search">查询</el-button></div>
        </el-row>
        <el-row >
          <Table>
            <el-button  type="text" style="color:var(--edit)">编辑</el-button>
            <el-button type="danger" style="color:var(--delete)"><span style="color: #ffffff">删除</span></el-button>
          </Table>
        </el-row>
    </el-card>

  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const input = ref('')
</script>
<style lang="scss" scoped>
  .Marketing{

    .search{
      padding: 8px;

      display: flex;
      left: 0px;
      height: 46px;

    }
  }
</style>
