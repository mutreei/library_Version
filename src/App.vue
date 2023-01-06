<template>
  <div id="app">
    app
    <button @click="login">请求</button>
  </div>
</template>

<script>
import getData from './request/_ajax';

export default {
  name: 'app',
  methods: {
    async login() {
      const { data: rep } = await getData.post('/login', {
        username: 'admin',
        password: 'admin',
      });
      console.log(rep);
    },
  },
};
</script>

<style>
</style>
