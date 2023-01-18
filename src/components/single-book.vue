<!-- 单本书籍 -->
<template>
    <div class="goods">
        <div class="book" v-for="(item, index) in books" :key="index">
            <div class="inner">
                <img :src="item.bookCover" alt="" class="bookCover">
                <p class="title">{{ item.bookname }}</p>
                <p class="price">
                    <span>租借：&nbsp;￥{{ item.borrowPrice }}/周</span>
                    <br>
                    <span>购买：&nbsp;￥{{ item.price }}</span>
                </p>
                <el-button @click="borrow(item.bookid)">租借</el-button>
                <el-button @click="buy(item.bookid)">购买</el-button>
                <!-- {{ item }} -->
            </div>
        </div>
    </div>
</template>

<script>
import getData from '../request/_ajax';

export default {
  data() {
    return {

    };
  },
  methods: {

    async borrow(bookid) {
      console.log(bookid);
      const { data: res } = await getData.post('/borrowBook', { bookID: bookid });
      console.log('res', res);
      if (res.statusCode === 200) {
        this.$message.success('成功借阅，请按时归还');
      } else {
        this.$message.error('失败！请检查余额');
      }
    },
    async buy(bookid) {
      console.log(bookid);
      const { data } = await getData.post('/buyBook', { bookID: bookid });
      if (data.statusCode === 200) {
        this.$message.success('成功完成购买');
      } else {
        this.$message.warning('购买失败,可能是余额不足');
      }
    },
  },
  props: ['books'],
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.goods {
    margin: .1042rem auto;
    width: 6.0417rem;
    height: auto;
}
.book {
    float: left;
    height: 2.1094rem;
    width: 1.5104rem;
    padding: 0 .0521rem;
    margin-bottom: 20px;
}

.book .inner {
    width: 1.4063rem;
    height: 2.1094rem;
    border: 1px solid #e5e5e5;
    text-align: center;
}

.book .inner .bookCover {
    width: 1.3958rem;
    height: 1.3958rem;
}
.book .inner .title {
    margin-bottom: .0156rem;
    padding-top: .0521rem;
    font-size: .0781rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
    color: #333;
}
.book .inner .price {
    padding-bottom: .0781rem;
    font-size: .0781rem;
    color: #e62263;
    font-weight: 600;
}

</style>
