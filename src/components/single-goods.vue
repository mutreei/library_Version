<!-- 单个书 -->
<template>
<div class="singleGoods">
    <slot></slot>
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
.singleGoods {
    height: 2.1094rem;
    width: 1.5104rem;
    border: 1px solid #e5e5e5;
}
</style>
