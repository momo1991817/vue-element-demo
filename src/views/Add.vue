<template>
  <el-main class="container">
    <el-form label-width="60px" :model="form" :label-position="labelPosition">
      <el-form-item label="标题：">
        <el-input placeholder="请输入内容"
                  v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="内容：">
        <el-input type="textarea"
                  :autosize="{ minRows: 2, maxRows: 8}"
                  placeholder="请输入内容"
                  v-model="form.content"></el-input>
      </el-form-item>
      <el-button type="primary" round @click="submit()">添加</el-button>
    </el-form>
  </el-main>
</template>

<script>
  import store from '@/store'

  export default {
    name: 'Add',
    store,
    data() {
      return {
        labelPosition: 'left',
        form: {
          title: '',
          content: ''
        }
      }
    },
    methods: {
      submit() {
        if (this.form.title !== '' && this.form.content !== '') {
          store.commit('addNews', this.form)
          this.$router.go(-1)
        } else {
          this.$message({
            message: '请输入标题和内容',
            type: 'error'
          })
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .container {
    padding: 60px 0;
    height: -webkit-fill-available;
  }

  .el-form {
    margin: 20px;
  }

  .el-button {
    display: block;
    margin: 30px auto;
    width: 100%;
  }
</style>
