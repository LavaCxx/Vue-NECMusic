module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://47.115.46.80:3000",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
