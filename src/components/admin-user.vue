<!-- 用户管理
address
balance
email
loginTime
-->
<template>
<div class="adminbox">
    用户管理
    <el-table
      :data="allUser"
      style="width: 100%">
      <el-table-column
        prop="username"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="userID"
        label="用户ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="rights"
        label="权限"
        width="180">
      </el-table-column>
      <el-table-column
        prop="registerTime"
        label="注册时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="loginTime"
        label="上次登录时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="email"
        label="电子邮箱"
        width="180">
      </el-table-column>
      <el-table-column
        prop="balance"
        label="余额"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="180">
      </el-table-column>
      <el-table-column
        label="操作"
        width="180">
        <template slot-scope="scope">
          <el-button type="danger" @click="del(scope.row.userID)">删除</el-button>
          <el-button type="success" @click="mod(scope.row.userID)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 弹出框 -->
    <el-dialog title="信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="form.userName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth">
          <el-radio v-model="form.sex" label="male">男</el-radio>
          <el-radio v-model="form.sex" label="female">女</el-radio>
          <el-radio v-model="form.sex" label="unknow">不明</el-radio>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="ensure">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 分页 -->
    <el-pagination
      :page-size="10"
      :pager-count="11"
      layout="prev, pager, next"
      :total="Math.ceil(this.allUser.length/10)">
    </el-pagination>
</div>
</template>

<script>
import getData from '../request/_ajax';

export default {
  async mounted() {
    const { data: res } = await getData.post('/findAllUser');
    console.log('全部用户数据', res);
    this.allUser = res;
  },
  data() {
    return {
      allUser: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      selectorID: '', // 选中的人的ID
      form: {
        userName: '',
        email: '',
        sex: '',
        address: '',
      },
      formLabelWidth: '120px',
    };
  },
  methods: {
    // 需要重写接口
    async del(userID) {
      this.$confirm('此操作将永久删除该用户, 是否继续?', '警告', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(async () => {
          const res = await getData.post('/delUser', {
            userID,
          });
          if (res.status === 200) {
            this.$message.success('已成功删除该用户');
            console.log('删除用户res', res);
          } else {
            this.$message.error('删除失败');
          }
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除',
          });
        });
    },
    mod(userID) {
      console.log('userID', userID);
      this.dialogFormVisible = true;
      this.selectorID = userID;
    },
    // 修改用户数据
    async ensure() {
      const res = await getData.post('/modifyReader', {
        ...this.form,
        userID: this.selectorID,
      });
      console.log('修改用户信息res:', res);
      this.dialogFormVisible = false;
    },
  },
  computed: {
  },
  // 监听数据
  watch: {
    // name: {
    //   immediate: true,
    //   deep: true, // 尽量不使用deep
    //   handler(newValue, oldValue) {
    //     console.log('watch', oldValue, newValue);
    //   },
    // },
  },
};
</script>
<style lang="less" scoped >
/* @import url(); 引入css类 */
.el-pagination {
  margin: 19px;
  text-align: center;
}
</style>
