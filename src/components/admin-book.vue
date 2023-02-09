<!-- 图书管理 -->
<template>
<div class="book">
    <div>
      图书管理
      <el-button @click="()=>this.$router.push('/admin/book/addBook')">添加图书</el-button>
    </div>
    <el-table :data="currentBook" stripe style="width: 100%">
      <el-table-column prop="bookCover" label="封面" width="220">
        <template slot-scope="scope">
         <img :src="scope.row.bookCover" alt="">
        </template>
      </el-table-column>
      <el-table-column prop="bookname" label="书名" width="180">
      </el-table-column>
      <el-table-column prop="author" label="作者" width="180">
      </el-table-column>
      <el-table-column prop="price" label="价格" width="180">
      </el-table-column>
      <el-table-column prop="borrowPrice" label="借阅价格" width="180">
      </el-table-column>
      <el-table-column prop="surplus" label="剩余" width="180">
      </el-table-column>
      <el-table-column prop="bookType" label="类型" width="180">
      </el-table-column>
      <el-table-column prop="bookid" label="ID" width="320">
      </el-table-column>
    </el-table>

    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="6"
      @current-change="currentChange"
      :total="this.allBook.length">
    </el-pagination>
</div>
</template>

<script>

import getData from '../request/_ajax';

export default {
  async mounted() {
    const { data: res } = await getData.post('/getAllBook');
    console.log('res', res);
    this.allBook = res;
    this.currentBook = this.allBook.slice(0, 5);
  },
  data() {
    return {
      allBook: [],
      currentBook: [],
    };
  },
  methods: {
    currentChange(currentPage) {
      console.log('currentPage', currentPage);
      this.currentBook = this.allBook.slice((currentPage - 1) * 6, (currentPage - 1) * 6 + 6);
    },
  },
};
</script>
<style scoped lang="less">
/* @import url(); 引入css类 */
.book {
  img {
    width:auto;
    height:.5208rem
  }
}
</style>
