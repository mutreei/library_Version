<template>
  <div id="app">
    <!-- app
    <button @click="login">请求</button>
    <div class="testd"></div> -->
    <router-view/>
  </div>
</template>

<script>
// import getData from './request/_ajax';

export default {
  name: 'app',
  methods: {
    // async login() {
    //   const { data: rep } = await getData.post('/login', {
    //     username: 'admin',
    //     password: 'admin',
    //   });
    //   console.log(rep);
    // },
  },
};
</script>

<style>
.testd {
  width: 5.9375rem;
  height: .2865rem;
  background-color: #000;
}

#app {
  position:relative;
  width: 100%;
  height: 100%;
}
</style>
