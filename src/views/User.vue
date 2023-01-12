<!-- 用户登录或注册 -->
<template>
<div class="bg">
  <div class="user">
    <h1 @click="backIndex" style="cursor:pointer">碧野图书馆</h1>
    <el-menu
    :default-active="activeIndex"
    class="lorr"
    mode="horizontal"
    @select="handleSelect">
      <el-menu-item index="1" @click="login">登录</el-menu-item>
      <el-menu-item index="2" @click="register">注册</el-menu-item>
    </el-menu>
    <router-view/>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    register() {
      this.$router.push('/user/register');
    },
    login() {
      this.$router.push('/user/login');
    },
    backIndex() {
      this.$router.push('/');
    },
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.bg {
  height: 100%;
  width: 100%;
  background: url('../assets/images/userbgc.png');
}
.user {
  position: absolute;
  width: 2.3438rem;
  height: 2.6042rem;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.user h1 {
  font-size: 38px;
  font-weight: 700;
}
</style>
