<template>
<!--   <Header title="详情"/>-->
    <el-main class="container">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>{{newDetail.title}}</span>
        </div>
        <div class="text item">
          {{newDetail.content}}
        </div>
      </el-card>
    </el-main>
</template>

<script>
import store from '@/store'
export default {
  name: 'Detail',
  store,
  components: { },
  data () {
    return {
      newDetail: store.state.newsList[this.$route.query.newId]
    }
  }
}
</script>

<style scoped lang="scss">
  .container{
    padding: 60px 0;
    height: -webkit-fill-available;
  }
  .el-card{
    margin: 10px;
  }
</style>
