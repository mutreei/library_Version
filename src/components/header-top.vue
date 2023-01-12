<!-- header-top 首页顶端 -->
<template>
<div class="header-top">
    <div class="content">
        <div class="left-content">欢迎来到网上图书商城</div>
        <div class="right-content">
            <span class="login" @click="login">登录</span>
            <span class="register" @click="register">注册</span>
            <span class="account" @click="myAcount">我的账户</span>
        </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'headerTop',
  data() {
    return {
    };
  },
  methods: {
    login() {
      this.$router.push('/user/login');
    },
    register() {
      this.$router.push('/user/register');
    },
    myAcount() {
      this.$router.push('/account');
    },
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.header-top {
    position:relative;
    width: 100%;
    height: .1875rem;
    border-bottom: 1px solid #e5e5e5;
    font-size: 13px;
    color: #717171;
}

.content {
    position: absolute;
    left: 50%;
    margin: 0, 50%, 0;
    transform: translateX(-50%);
    width: 6.0938rem;
    height: .1458rem;
    line-height: .1875rem;
}

.left-content {
    float: left;
}
.right-content {
    float: right;
}
.right-content span {
    float: right;
    margin: auto .0781rem;
    cursor: pointer;
}

.right-content span:hover{
    color: #e62263
}
</style>
