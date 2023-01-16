<!-- 账户 -->
<template>
<div class="account">
    <header-top/>
    <h2><span @click="goIndex">碧野图书馆</span>/我的账户信息</h2>
    <div class="feat">
      <div class="balance">
        <p>账户余额:<span>{{ balance }}</span></p>
        <el-button @click="recharge">充值</el-button>
      </div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="userName" label="用户名" width="180"></el-table-column>
        <el-table-column prop="desc" label="操作" width="180"></el-table-column>
        <el-table-column prop="amount" label="金额" width="180"></el-table-column>
        <el-table-column prop="time" label="时间"></el-table-column>
      </el-table>
    </div>
</div>
</template>

<script>
import headerTop from '../components/header-top.vue';
import getData from '../request/_ajax';

export default {
  async created() {
    const { data: res } = await getData.post('/getSelfAssets');
    this.balance = res.balance;
    const r = await getData.post('/getSelfRecharge');
    this.tableData = r.data;
    this.tableData.map((value) => {
      /* eslint-disable no-param-reassign */
      if (value.amount > 0) {
        value.desc = '充值';
      } else {
        value.desc = '消费';
      }
      return value;
    });
    console.log(this.tableData);
  },
  data() {
    return {
      balance: 0,
      tableData: [
      ],
    };
  },
  methods: {
    goIndex() {
      this.$router.push('/');
    },
    recharge() {
      this.$prompt('请输入充值金额', '提示', {
        confirmButtonText: '充值',
        cancelButtonClass: '取消',
      })
        .then(async ({ value }) => {
        // 充值操作
          const { data } = await getData.post('/recharge', { rechargeAmount: parseInt(value, 0) });
          console.log(data);
          this.$message({
            type: 'success',
            message: `已成功充值${value}元`,
          });
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '取消充值',
          });
        });
    },
  },
  components: {
    headerTop,
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.account {
  text-align: center;
}
.account h2 {
  margin: .1042rem auto;
  font-size: .1563rem;
}
.account h2 span {
  cursor: pointer;
}
.account h2 span:hover {
  color: #e92263;
}
.feat {
  width: 1140px;
  height: 100%;
  margin: 0 auto;
}

.feat .balance {
  width: 100%;
  height: 45.0048px;
}
.feat .balance p{
  float: left;
  margin-left: .1042rem;
  font-size: 18.0096px;
  line-height: 45.0048px;
}
.feat .balance p span {
  color: #e92263;
}
.feat .balance .el-button {
  float: right;
  margin: .0104rem .1042rem;
}
</style>
