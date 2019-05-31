<template>
  <el-header class="header">{{title}}</el-header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  }
}
</script>

<style scoped lang="scss">
  .header{
    position: fixed;
    top:0;
    left: 0;
    z-index: 999;
    width: 100%;
    text-align: center;
    line-height: 60px;
    background: #F56C6C;
    color: aliceblue;
  }
</style>
