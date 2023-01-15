<!-- 主页面 -->
<template>
    <div class="all">
        <headerTop/>
        <div class="top">
          <topBar/>
        </div>
        <slidersShow/>
        <goods/>
    </div>
</template>

<script>
import headerTop from '../components/header-top.vue';
import topBar from '../components/top-bar.vue';
import slidersShow from '../components/sliders-show.vue';
import goods from '../components/goods.vue';

export default {
  data() {
    return {

    };
  },
  methods: {
  },
  components: {
    headerTop,
    topBar,
    slidersShow,
    goods,
  },
};
</script>

<style scoped>
/* @import url(); 引入css类 */
.all {
  width: 100%;
  height: auto;
}
.top {
  position: relative;
  width: 100%;
  height: auto;
  text-align: center;
}
</style>
