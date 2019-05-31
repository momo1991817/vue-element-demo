<template>
<!--      <Header title="新闻"/>-->
      <el-main class="container">
        <el-tag type="success" v-show="!(newsList.length>0)">还没有任何新闻。。。</el-tag>
        <router-link :to="{name: 'detail', query: { newId: index }}"
                     v-for="(item, index) in newsList"
                     :key="index">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>{{item.title}}</span>
              <el-button style="float: right; padding: 3px 0" type="text">查看详情</el-button>
            </div>
            <div class="text item">{{item.content}}</div>
          </el-card>
        </router-link>
        <el-button type="success" round class="add-new-btn" @click="goto()">添加新闻</el-button>
      </el-main>
</template>

<script>
import store from '@/store'
export default {
  name: 'List',
  store,
  components: { },
  data () {
    return {
      newsList: store.state.newsList
    }
  },
  // computed: {
  //   newsList () {
  //     return store.state.newsList
  //   }
  // },
  methods: {
    goto () {
      this.$router.push('/news/add')
    }
  }
}
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
  .box-card{
    width: auto;
    margin: 20px;
  }
  .container{
    padding: 60px 0;
    height: -webkit-fill-available;
  }
  .add-new-btn{
    display: block;
    margin: auto;
    width: 90%;
  }
  .el-tag{
    display: block;
    margin: 20px auto;
    width: 80%;
    text-align: center;
  }
</style>
