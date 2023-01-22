<!-- admin管理页面 -->
<template>
<div class="admin">
  <headerTop/>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo navigation"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
        <el-menu-item index="1" @click="()=>this.$router.push('/admin/user')">
            <i class="el-icon-user-solid"></i>
            <span>用户管理</span>
        </el-menu-item>
        <el-menu-item index="2" @click="()=>this.$router.push('/admin/assets')">
            <i class="el-icon-menu"></i>
            <span>资产管理</span>
        </el-menu-item>
        <el-menu-item index="3" @click="()=>this.$router.push('/admin/notice')">
            <i class="el-icon-s-finance"></i>
            <span>公告管理</span>
        </el-menu-item>
        <el-menu-item index="4" @click="()=>this.$router.push('/admin/book')">
            <i class="el-icon-notebook-1"></i>
            <span>图书管理</span>
        </el-menu-item>
      </el-menu>
    <router-view class="content"/>
</div>
</template>

<script>
import headerTop from '../components/header-top.vue';

export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // toUser() {
    //   ;
    // },
  },
  components: {
    headerTop,
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.admin {
  position: relative;
  width: 100%;
  height: 100%;
}
.navigation {
  width: 1.0938rem;
  height: 100%;
}
.content {
  position: absolute;
  top: .2604rem;
  left: 1.1979rem;
}

</style>
