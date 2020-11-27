module.exports = {
  lintOnSave: false,
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    // 代理
    proxy: {
      '/ajax': {
        target: 'https://m.maoyan.com',
        // ws: true,
        changeOrigin: true
      }

    }

  }
}
