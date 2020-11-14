<template>
  <div>
    <div class="nav">
      <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">类别</template>
        <el-menu-item index="2-1">新闻</el-menu-item>
        <el-menu-item index="2-2">视频</el-menu-item>
        <el-menu-item index="2-3">博客 </el-menu-item>
      </el-submenu>
      <!-- <el-menu-item index="3">
        <a href="https://www.ele.me" target="_blank">我的</a>
        </el-menu-item> -->
      <el-submenu index="3">
        <template slot="title">我的</template>
        <el-menu-item index="3-1">个人中心</el-menu-item>
        <el-menu-item index="3-2">设置</el-menu-item>
        <el-menu-item index="3-3">登录</el-menu-item>
      </el-submenu>
    </el-menu>
    </div>
    <div class="content">
            <a href="/login">aa</a>

      <div v-for="item in infolist" :key=item.name>
        <el-container>
          <!-- <el-header class="el-header">{{item.name}}</el-header> -->
          <el-container>歌手名字：{{item.name}}介绍：{{item.content}}</el-container>
      </el-container>
      </div>
    </div>
    <div class="footer">
    </div>
  </div>
</template>
<script>
// Make a request for a user with a given ID
const axios = require('axios')
export default {
  name: 'index',
  data() {
    return {
      msg: 'Hello World',
      infolist: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      var that = this
      axios.get('http://127.0.0.1:8000/user/login')
        .then(function(response) {
          console.log(response.data)
          let res = response.data
          that.infolist = res.data
          // 能获取到数据
          console.log(that.infolist)
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav {
    width: 100%;
    height: 100%;
  }
  .el-header {
    height: 20px;
    margin: 0%;
  }
</style>
