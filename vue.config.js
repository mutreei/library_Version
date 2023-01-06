module.exports = {
  devServer: {
    port: 3000,
    open: true,
    proxy: 'http://localhost:3001',
  },
};
