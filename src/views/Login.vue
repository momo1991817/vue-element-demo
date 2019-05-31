<template>
  <el-container>
    <Header title="登录"/>
    <el-main class="container">
      <el-form :label-position="labelPosition" label-width="60px" :model="formLabelAlign" class="login_form" size="medium">
        <el-form-item label="用户名">
          <el-input v-model="formLabelAlign.username" class="form_item_input"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formLabelAlign.password"></el-input>
        </el-form-item>
        <el-form-item class="reg_link">
          <router-link to="/register">没有账号？点击注册</router-link>
        </el-form-item>
        <el-button type="success" size="medium" class="login_btn" round @click="login()">登录</el-button>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
import Header from '../components/Header'
export default {
  name: 'Login',
  components: { Header },
  data () {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      }
    }
  },
  methods: {
    login () {
      if (this.formLabelAlign.username === localStorage.getItem('username') && this.formLabelAlign.password === localStorage.getItem('password')) {
        this.$router.push('/news/list')
      } else {
        this.$message({
          message: '用户名和密码不正确',
          type: 'warning'
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
  body {
    padding: 0;
    margin: 0;
  }
  .container{
    padding: 60px 0;
    height: -webkit-fill-available;
  }
.login_form{
  padding: 20px;
}
  .reg_link{
    text-align: right;
    a{
      color:#E6A23C
    }
  }
  .login_btn{
    width: 100%;
  }
</style>
