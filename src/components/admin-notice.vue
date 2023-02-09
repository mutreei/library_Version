<!-- 公告管理 -->
<template>
<div class="notice">
    <div class="feat">
      <span>公告管理</span>
      <el-button type="primary" @click="dialogFormVisible=true">发布新公告</el-button>
    </div>
    <el-descriptions class="margin-top" :column="3" border
    v-for="(v,i) in allNotice" :key="i">
      <!-- <template slot="extra">
        <el-button type="primary" size="small">操作</el-button>
      </template> -->
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          发布者
        </template>
        {{v.publisherName}}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-time"></i>
          发布时间
        </template>
        {{v.time}}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-tickets"></i>
          标题
        </template>
        {{ v.title }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          详细内容
        </template>
        {{ v.content }}
      </el-descriptions-item>
  </el-descriptions>

  <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
    <el-form :model="submitNotice">
      <el-form-item label="活动名称" :label-width="formLabelWidth">
        <el-input v-model="submitNotice.title" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" :label-width="formLabelWidth">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="submitNotice.content">
        </el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="ensureSubmit">确 定</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
import getData from '../request/_ajax';

export default {
  async mounted() {
    const { data: res } = await getData.post('/getAllNotice');
    console.log('res', res);
    this.allNotice = res;
  },
  data() {
    return {
      allNotice: [],
      dialogFormVisible: false,
      formLabelWidth: '120px',
      submitNotice: {
        title: '',
        content: '',
      },
    };
  },
  methods: {
    ensureSubmit() {
      this.dialogFormVisible = false;
      getData.post('/publish', this.submitNotice)
        .then(
          (res) => {
            console.log(res);
            this.$message.success('成功发布公告');
          },
        )
        .catch((err) => {
          console.log('err', err);
          this.$message.error('失败！未能发布公告');
        });
    },
  },
};
</script>
<style scoped lang="less">
/* @import url(); 引入css类 */
.notice {
  .feat {
    width: 4.875rem;
    margin: 0 auto;
    span {
      float: right;
      font-size: 16px;
    }
    el-button {
      float: left;
    }
  }
  .el-descriptions{
    margin: .0781rem 1.0417rem;
  }
}
</style>
