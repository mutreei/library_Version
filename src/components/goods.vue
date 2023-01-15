<!-- 商品详情 -->
<template>
<div class="goods">
    <div class="book" v-for="(item, index) in this.$store.state.books" :key="index">
        <div class="inner">
            <img :src="item.bookCover" alt="" class="bookCover">
            <p class="title">{{ item.bookname }}</p>
            <p class="price">
                <span>租借：&nbsp;￥{{ item.borrowPrice }}/周</span>
                <br>
                <span>购买：&nbsp;￥{{ item.price }}</span>
            </p>
            <el-button>租借</el-button>
            <el-button>购买</el-button>
            <!-- {{ item }} -->
        </div>
    </div>
</div>
</template>

<script>
// import singleGoods from './single-goods.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    // singleGoods,
  },
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
