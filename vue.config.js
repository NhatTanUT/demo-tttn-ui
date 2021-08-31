module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
 
    // options...
    devServer: {
          proxy: 'https://127.0.0.1:3000',
      }
}
