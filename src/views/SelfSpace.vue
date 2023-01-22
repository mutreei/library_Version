<!-- 个人资料文件 -->
<template>
<div>
  <headerTop/>
  <p>
    <span @click="backindex">碧野图书馆</span>
    /个人信息
  </p>
  <el-form ref="form" :model="form" label-width="80px" class="formSpace">
    <el-form-item label="用户名">
      <el-input v-model="form.userName"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item label="性别">
      <el-select v-model="form.sex" placeholder="请选择性别">
        <el-option label="男" value="male"></el-option>
        <el-option label="女" value="female"></el-option>
        <el-option label="保密" value="unknow"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="邮箱">
      <el-input v-model="form.email"></el-input>
    </el-form-item>
    <el-form-item label="地址">
      <el-input v-model="form.address"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="cancel">取消</el-button>
      <el-button type="success" @click="ensure">确认修改</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
import headerTop from '../components/header-top.vue';
import getData from '../request/_ajax';

export default {
  data() {
    return {
      form: {
        userName: '',
        password: '',
        sex: '',
        email: '',
        address: '',
      },
    };
  },
  methods: {
    cancel() {
      console.log('cancel');
      this.$router.push('/');
    },
    async ensure() {
      console.log('ensure');
      console.log('this.form', this.form);
      const res = await getData.post('/modifyUser', this.form);
      console.log('res', res);
    },
    backindex() {
      this.$router.push('/');
    },
  },
  components: {
    headerTop,
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.formSpace {
  width: 2.0833rem;
  margin: .2604rem auto;
}
p {
  font-size: .1563rem;
  text-align: center;
  margin-top: .0781rem;
  cursor: pointer;
}
p span:hover {
  color: #e92263;
}
</style>
