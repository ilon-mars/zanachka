module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/zanachka/'
    : '',

  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'ZANACHKA - калькулятор бюджета'
        return args
      })
  }
}
