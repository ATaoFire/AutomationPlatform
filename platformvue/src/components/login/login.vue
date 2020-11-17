<template>
  <div>
    <!--flex弹性盒子模型，justify-content：主抽 -->
    <div style="display: flex;justify-content: center;margin-top: 150px">
      <el-card style="width: 400px">
        <div slot="header" class="clearfix">
          <span>登录</span>
        </div>
        <table>
          <tr>
            <td>用户名</td>
            <td>
              <el-input placeholder="请输入用户名" v-model="user.username" clearable></el-input>
            </td>
          </tr>
          <tr>
            <td>密码</td>
            <td>
              <el-input placeholder="请输入密码" v-model="user.password" show-password></el-input>
            </td>
          </tr>
          <tr>
            <!-- 占两行-->
            <td colspan="2">
              <!-- 点击事件的两种不同的写法v-on:click和 @click-->
              <!--<el-button style="width: 300px" type="primary" v-on:click="doLogin">登录</el-button>-->
              <el-button style="width: 300px" type="primary" @click="doLogin">登录</el-button>
            </td>
          </tr>
        </table>
      </el-card>
    </div>
  </div>
</template>
<script>
const axios = require('axios')
export default {
  name: 'login',
  data() {
    return {
      user: {
        username: 'test1',
        password: '123456'
      }
    }
  },
  methods: {
    doLogin() {
      var _this = this
      axios.post('http://127.0.0.1:8000/user/login', {
        'username': _this.user.username,
        'password': _this.user.password
      },
      {
        headers: {'Content-Type': 'application/json'}
      })
        .then(function(response) {
          // console.log(response),
          _this.$message(response.data.msg)
        })
        .catch(function(error) {
          console.log(error)
          // _this.$message('这是一条消息提示')
        })
    }
  }
}
</script>
