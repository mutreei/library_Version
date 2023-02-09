<!-- 幻灯片 -->
<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="http://localhost:3001/public/images/三国演义.jpeg" alt="" class="bookCover">
              <p class="tit">三国演义</p>
            </div>
            <div class="swiper-slide">
              <img src="http://localhost:3001/public/images/西游记.jpeg" alt="" class="bookCover">
              <p class="tit">西游记</p>
            </div>
            <div class="swiper-slide">
              <img src="http://localhost:3001/public/images/水浒传.jpeg" alt="" class="bookCover">
              <p class="tit">水浒传</p>
            </div>
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

export default {
  async created() {
    this.$store.dispatch('saveBooks')
      .then((books) => {
        console.log(books);
      })
      .catch((err) => {
        console.log(err);
      });
  },
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
<style scoped lang="less">
/* @import url(); 引入css类 */
.swiper-container {
    width:100%;
    height: 3.099rem;
}
.bookCover {
  height: 100%;
  margin-left: 1.0417rem;
}
.swiper-slide {
  position:relative;
}
.tit {
  display: inline-block;
  position:absolute;
  top: 50%;
  right: 1.0417rem;
  font-size: 40px;
  margin-bottom: 200px;
}
</style>
