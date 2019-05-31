<template>
   <el-footer class="footer">
     <ul>
       <li><router-link :to="{name: 'list'}" :class="{'active':$route.meta.active === '/news'}"><i class="el-icon-document"></i>新闻列表</router-link></li>
       <li><router-link :to="{name:'user'}" :class="{'active':$route.meta.active === 'user'}"><i class="el-icon-s-custom"></i>个人中心</router-link></li>
     </ul>
   </el-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
  ul,li{
    list-style: none;
  }
  .footer{
    padding: 0;
    position: fixed;
    bottom:0;
    left: 0;
    z-index: 999;
    width: 100%;
    text-align: center;
    line-height: 60px;
    background: darkgrey;
    color: black;
    display: flex;                /*设置为flex布局*/
    justify-content: center;   /*水平居中*/
    align-items: center;     /*垂直居中*/
    ul{
      display: flex;
      width: 100%;
    }
    ul li{
     flex: 1;
      text-align: center;
      line-height: 60px;
      a{
        display: block;
        width: 100%;
        height: 60px;
        color: aliceblue;
        text-decoration: none;
        &.active{
          background: #F56C6C;
          color:aliceblue;
        }
      }
    }
  }

  .container{
    padding: 60px 0;
    height: -webkit-fill-available;
  }
</style>
