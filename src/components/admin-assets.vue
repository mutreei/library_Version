<!-- 资产管理 -->
<template>
<div class="assets">
  <p class="totalAssets">
    账户总额度：{{ totalAssets }}
  </p>
  <el-table :data="this.current_recharge" style="width: 100%">
    <el-table-column prop="userID" label="用户ID" width="350"></el-table-column>
    <el-table-column prop="userName" label="用户昵称" width="240"> </el-table-column>
    <el-table-column prop="amount" label="充值/消费金额" width="240"> </el-table-column>
    <el-table-column prop="time" label="账户变动时间" width="240"> </el-table-column>
  </el-table>

  <el-pagination
    background
    layout="prev, pager, next"
    @current-change="currentChange"
    :page-size="12"
    :total="this.allRecharge.length">
  </el-pagination>
</div>
</template>

<script>
import getData from '../request/_ajax';

export default {
  async mounted() {
    const { data: res } = await getData.post('/getTotalAssets');
    console.log('res.data', res[0]);
    this.totalAssets = res[0].totalAssets;
    const { data: allRecharge } = await getData.post('/getAllRecharge');
    console.log('allRecharge', allRecharge);
    this.allRecharge = allRecharge;
    console.log('123 ', this.allRecharge.length);
    // 设置默认显示的账户变动数据
    this.current_recharge = this.allRecharge.slice(0, 12);
  },
  data() {
    return {
      totalAssets: 0,
      allRecharge: [],
      current_recharge: [],
    };
  },
  methods: {
    currentChange(currentPage) {
      this.current_recharge = this.allRecharge.slice((currentPage - 1) * 12, (currentPage - 1) * 12 + 12);
    },
  },
};
</script>
<style scoped lang="less">
/* @import url(); 引入css类 */
.assets {
  .totalAssets {
    font-size: 20px;
    font-weight: 700;
  }

  .el-table {
    margin-left: 1rem;
  }

  .el-pagination {
    margin: .0781rem 2.0833rem;
  }
}
</style>
