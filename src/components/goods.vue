<!-- 商品详情 -->
<template>
<div>
    <SB :books="this.$store.state.books"/>
</div>
</template>

<script>
import singleBook from './single-book.vue';

export default {
  components: {
    SB: singleBook,
  },
  data() {
    return {
    };
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
