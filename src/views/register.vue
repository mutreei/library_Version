<!-- 注册 -->
<template>
    <div class="register">
        <el-form  label-width="80px" :model="userMsg">
            <el-form-item label="用户名">
                <el-input v-model="userMsg.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="userMsg.password" type="password" placeholder="请输入密码" show-password></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
                <el-input v-model="userMsg.checkPassword" type="password" placeholder="请确认入密码" show-password></el-input>
            </el-form-item>
            <p class="verifyPwd" style="color:red"></p>
            <el-form-item label="权限">
                <el-radio v-model="userMsg.rights" label="administer">普通用户</el-radio>
                <el-radio v-model="userMsg.rights" label="reader">管理员</el-radio>
            </el-form-item>
        </el-form>
        <el-button @click="register">注册</el-button>
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
        checkPassword: '',
        rights: '',
      },
    };
  },
  methods: {
    register() {
      // 注册的时候对输入框进行验证
      if (this.userMsg.password === '' || this.userMsg.checkPassword === '' || this.userMsg.rights === '' || this.userMsg.username === '') {
        document.querySelector('.verifyPwd').textContent = '请填写完整信息';
      } else if (this.userMsg.password !== this.userMsg.checkPassword) {
        document.querySelector('.verifyPwd').textContent = '两次输入密码不一致';
      } else {
        document.querySelector('.verifyPwd').textContent = '';
        console.log(this.userMsg);
      }
    },
    reset() {
      this.userMsg.checkPassword = '';
      this.userMsg.password = '';
      this.userMsg.username = '';
      this.userMsg.rights = '';
    },
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.register {
    padding: .1458rem;
}
</style>
