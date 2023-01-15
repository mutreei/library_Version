<!-- 标题栏 -->
<template>
<div class="topBar">
    <h1>图书商城</h1>
    <div class="search">
      <input type="text" placeholder="请输入书名搜索书籍">
      <button>
        <img src="../assets/icon/search.svg" alt="">
      </button>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.topBar {
    position: relative;
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
  height: 100%;
  width: .2031rem;
}
.search button img {
  height: 100%;
  width: .2031rem;
}
</style>
