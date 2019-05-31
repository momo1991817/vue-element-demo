<template>
  <el-container>
    <Header title="新闻"/>
    <router-view></router-view>
    <Footer/>
  </el-container>
</template>

<script>
import Footer from '../components/Footer'
import Header from '../components/Header'
export default {
  name: 'News',
  components: { Header, Footer },
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
  .container{
    padding: 60px 0;
    height: -webkit-fill-available;
  }
</style>
