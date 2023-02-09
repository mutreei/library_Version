<template>
  <div class="addBook">
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/admin/book' }">图书管理</el-breadcrumb-item>
        <el-breadcrumb-item>添加图书</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="书名">
            <el-input v-model="form.bookName"></el-input>
        </el-form-item>
        <el-form-item label="作者">
            <el-input v-model="form.author"></el-input>
        </el-form-item>
        <el-form-item label="售卖价格">
            <el-input v-model="form.price"></el-input>
        </el-form-item>
        <el-form-item label="借阅价格">
            <el-input v-model="form.borrowPrice"></el-input>
        </el-form-item>
        <el-form-item label="剩余数量">
            <el-input v-model="form.surplus"></el-input>
        </el-form-item>
        <el-form-item label="上传封面">
            <input type="file" style="display:none" ref="uploadBtn" @change="upimg"/>
            <div class="uploadBtn" @click="upload" v-if="this.url===''">+</div>
            <img :src="this.url" alt="" v-else>
        </el-form-item>
        <el-button type="primary" @click="ensureAdd">添加图书</el-button>
        <el-button type="message" @click="()=>this.$router.push('/admin/book')">取消</el-button>
    </el-form>
  </div>
</template>

<script>
import getData from '../request/_ajax';
import transferFormData from '../utils/transferFormData';

export default {
  data() {
    return {
      form: {
        bookName: '',
        author: '',
        price: null,
        borrowPrice: null,
        surplus: null,
      },
      url: '',
    };
  },
  methods: {
    upload() {
      this.$refs.uploadBtn.click();
    },
    upimg(e) {
      console.log('e', e.target.files);
      this.url = URL.createObjectURL(e.target.files[0]);
    },
    ensureAdd() {
      const formData = transferFormData(this.form);
      formData.append('bookCover', this.$refs.uploadBtn.files[0]);
      formData.append('name', '张三');
      console.log(formData.getAll('bookCover'));
      // 上传
      getData.post('/addBook', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((res) => {
        console.log('res', res);
        this.$message.success('成功上传图书');
        this.$router.push('/admin/book');
      }).catch((err) => {
        console.log('err', err);
        this.$message.error('上传失败，请检查环境后重试');
      });
    },
  },
//   watch: {
//     form: {
//       immediate: true,
//       deep: true,
//       handler(newValue, oldValue) {
//         console.log(newValue, oldValue);
//       },
//     },
//   },
};
</script>

<style scoped lang="less">
.addBook{
  width: 100%;
  height: 100%;
    .el-form {
      position: absolute;
      left: 40%;
      top: 40%;
      transform: translate(-50%,-50%);
    }
    .uploadBtn {
        width: .5208rem;
        height: .5208rem;
        border: 1px solid #e5e5e5;
        text-align: center;
        line-height: .5208rem;
        font-size: .2083rem;
        cursor: pointer;
    }
    img {
        width: .5208rem;
        height: .5208rem;

    }
}
</style>
