<template>
  <el-container>
    <Header title="注册"/>
    <el-main class="container">
      <el-form :label-position="labelPosition" label-width="60px" :model="formLabelAlign" class="login_form" size="medium">
        <el-form-item label="用户名">
          <el-input v-model="formLabelAlign.username" class="form_item_input" name="username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="formLabelAlign.password" name="password"></el-input>
        </el-form-item>
        <el-form-item class="reg_link">
          <router-link to="/">返回登录</router-link>
        </el-form-item>
        <el-button type="success" size="medium" class="login_btn" round @click="register()">注册</el-button>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
import Header from '../components/Header'
var self = {}
export default {
  name: 'register',
  components: { Header },
  data () {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        username: '',
        password: ''
      }
    }
  },
  // 当this指向别的组件时，使得this指向Vue对象
  beforeCreate () {
    self = this
  },
  methods: {
    register () {
      localStorage.setItem('username', this.formLabelAlign.username)
      localStorage.setItem('password', this.formLabelAlign.password)
      if (this.formLabelAlign.username !== '' && this.formLabelAlign.password !== '') {
        this.$message({
          message: '注册成功,请登录',
          type: 'success',
          duration: 1000,
          onClose: function () {
            self.formLabelAlign.username = ''
            self.formLabelAlign.password = ''
            self.$router.push('/')
          }
        })
      } else {
        this.$message({
          message: '用户名和密码不能为空',
          type: 'warning',
          duration: 1000
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
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
