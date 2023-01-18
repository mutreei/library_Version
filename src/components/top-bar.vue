<!-- 标题栏 -->
<template>
<div class="topBar">
    <slot></slot>
    <div class="search">
      <input type="text" placeholder="请输入关键字搜索书籍" v-model="keyword">
      <button @click="search">
        <img src="../assets/icon/search.svg" alt="">
      </button>
    </div>
    <div class="borrowCar" @mouseenter="showBorrow">
      <img src="../assets/icon/searchcart.svg" alt="">
      <span>已租借</span>
      <div class="listBorrow">
        <div class="singleBook" v-for="(v,i) in borrowBooks" :key="i">
          <p>{{ v.bookName }}</p>
          <el-button @click="reverd(v.bookID)">归还</el-button>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import getData from '../request/_ajax';

export default {
  data() {
    return {
      borrowBooks: [],
      keyword: '',
    };
  },
  methods: {
    async showBorrow() {
      const { data: books } = await getData.post('/findBorrow');
      this.borrowBooks = books;
      console.log(this.borrowBooks);
    },
    // 还书
    async reverd(bookid) {
      const { data: res } = await getData.post('/returnBook', { bookID: bookid });
      if (res.statusCode === 200) {
        this.$message.success(`成功还书，借阅时间:${res.day}天`);
      } else {
        this.$message.error('还书失败，请检查余额');
      }
    },
    // 搜索书籍将结果存储到vuex中
    search() {
      this.$router.push('/search');
      this.$store.dispatch('searchBooks', { keyword: this.keyword })
        .then((res) => {
          console.log('res', res);
          console.log('搜索到的结果：', this.$store.state.searchBooks);
        })
        .catch((err) => {
          throw err;
        });
    },
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.topBar {
    position: relative;
    margin-bottom: .151rem;
    display: inline-block;
    /* transform: translateX(-50%); */
    margin: 0, auto;
    height: .599rem;
    width: 6.0938rem;
    background-color: #e2e2e2;
    text-align: center;
}
h1 {
    font-size: 30px;
    color: #222;
    line-height: .5938rem;
}
.search {
  position:absolute;
  right: 0;
  top: .1563rem;
  width: 1.3542rem;
  height: .2083rem;
}
.search input {
  height: 100%;
  width: 1.1458rem;
  vertical-align: top;
}
.search button {
  cursor: pointer;
  height: 100%;
  width: .2031rem;
}
.search button img {
  height: 100%;
  width: .2031rem;
}

.topBar .borrowCar {
  position:absolute;
  top: .2135rem;
  left: 0px;
  width: .9167rem;
  height: .2188rem;
  border: 1px solid #e5e5e5;
  background-color: #fff;
  padding: .0521rem .0625rem;
}

.topBar .borrowCar img {
  width: .1042rem;
  vertical-align:middle;
  margin-right: .026rem;
}

.topBar .borrowCar .listBorrow {
  position: absolute;
  top: .2135rem;
  left: 0px;
  border: 1px solid #f1f1f1;
  background-color: #fff;
  width: 1.9792rem;
  height: 1.4583rem;
  z-index: 100;
  display: none;
  padding: 0 .0833rem;
  overflow: scroll;
  overflow-x: hidden;
}
.topBar .borrowCar:hover .listBorrow {
  display: block;
}

.listBorrow .singleBook {
  width: 100%;
  height: .5208rem;
  border-bottom: 1px solid #f1f1f1;
  padding: 0 .2083rem;
}
.listBorrow .singleBook>* {
  float: left;
}
.listBorrow .singleBook p{
  font-size: .1042rem;
  font-weight: 700;
  line-height: .5208rem;
}
.listBorrow .singleBook .el-button {
  float: right;
  margin-top: .2604rem;
  transform: translate(0, -50%);
}
</style>
