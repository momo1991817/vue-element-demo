<template>
   <el-container>
     <Header title="个人中心"/>
     <el-main class="container">
       <el-button type="success" @click="exit()">退出登录</el-button>
     </el-main>
     <Footer/>
   </el-container>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
export default {
  name: 'User',
  components: { Footer, Header },
  methods: {
    exit () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped lang="scss">
  .container{
    padding: 60px 0;
    height: -webkit-fill-available;
  }
  .el-button{
    display: block;
    width:90%;
    margin: 20px auto;
  }
</style>
