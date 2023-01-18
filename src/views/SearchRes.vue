<!-- 搜索结果 -->
<template>
<div class="searchRes">
    <headerTop/>
    <topBar>
        <h1><span @click="backhome">碧野图书馆</span>/搜索结果</h1>
    </topBar>
    <div class="box">
        <singleBook :books="this.$store.state.searchBooks"/>
    </div>
</div>
</template>

<script>
import headerTop from '../components/header-top.vue';
import singleBook from '../components/single-book.vue';
import topBar from '../components/top-bar.vue';

export default {
  data() {
    return {

    };
  },
  methods: {
    backhome() {
      this.$router.push('/');
    },
  },
  components: {
    singleBook,
    headerTop,
    topBar,
  },
};
</script>
<style scoped>
.topBar {
    margin-left: 1.9063rem;
}
span  {
    cursor: pointer;
}
span:hover  {
    color: #e62263;
}
</style>
