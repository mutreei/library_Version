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
    login() {
      console.log(this.userMsg);
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
