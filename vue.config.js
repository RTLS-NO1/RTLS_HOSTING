const path = require('path')

module.exports = {
  transpileDependencies: ['vuetify'],
  outputDir: './dist',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/'),
      },
    },
  },
  css: {
    loaderOptions: {
      scss: {
        // prependData: `
        //   @import "@/assets/style/place.scss";
        // `,
      },
    },
  },
}
