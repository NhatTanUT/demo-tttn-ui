module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
 
    // options...
    devServer: {
          proxy: 'https://demo-tttn.herokuapp.com/*',
      }
}
