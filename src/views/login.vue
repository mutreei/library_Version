<!-- 登录 -->
<template>
    <div class="login">
        <el-form  label-width="80px" :model="userMsg">
            <el-form-item label="用户名">
                <el-input v-model="userMsg.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="userMsg.password" type="password" placeholder="请输入密码" show-password></el-input>
            </el-form-item>
        </el-form>
        <el-button @click="login">登录</el-button>
        <el-button @click="reset">重置</el-button>
    </div>
</template>

<script>
import getData from '../request/_ajax';

export default {
  data() {
    return {
      userMsg: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    // 登录
    async login() {
      // console.log(this.userMsg);
      const { data: res } = await getData.post('/login', {
        username: this.userMsg.username,
        password: this.userMsg.password,
      });
      if (!res.token) {
        this.$alert('<p style="color: red; font-size: 15px;">登录失败，请检查登录信息</p>', '出现错误了', {
          dangerouslyUseHTMLString: true,
        });
        console.log(res);
      } else if (res.rights === 'administer') {
      // 成功登录后判断权限 用户基本数据存储到vuex内，用户token信息存到sessionStorage中
        console.log(res.rights);
        window.sessionStorage.setItem('token', res.token);
        this.$router.push('/admin');
      } else if (res.rights === 'reader') {
        console.log(res);
        window.sessionStorage.setItem('token', res.token);
        this.$store.commit('addUserMsg', res);
        this.$router.push('/');
      }
    },
    reset() {
      this.userMsg.password = '';
      this.userMsg.username = '';
    },
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.login {
    padding: .1458rem;
}
</style>
