<!-- 幻灯片 -->
<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
// import { EffectFade, Controller } from 'swiper';

export default {
  data() {
    return {

    };
  },
  mounted() {
    /* eslint-disable no-new */
    new Swiper('.swiper-container', {
    //   direction: 'vertical', // 垂直切换选项/
      loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
.swiper-container {
    width:100%;
    height: 3.099rem;
}
</style>
