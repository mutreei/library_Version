<!-- 主页面 -->
<template>
    <div class="all">
        <headerTop/>
        <div class="top">
          <topBar/>
        </div>
        <slidersShow/>
    </div>
</template>

<script>
import headerTop from '../components/header-top.vue';
import topBar from '../components/top-bar.vue';
import slidersShow from '../components/sliders-show.vue';

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
  },
};
</script>

<style scoped>
/* @import url(); 引入css类 */
.all {
  width: 100%;
  height: 100%;
}
.top {
  position: relative;
  width: 100%;
  height: auto;
  text-align: center;
}
</style>
