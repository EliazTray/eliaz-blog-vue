module.exports = ctx => ({
  title: 'Lunariours',
  dest: 'dist',
  theme: 'theme/index.js',
  plugins: {
    'plugin/index.js': true
  },
  themeConfig: {
    algolia: {
      apiKey: '7961ff9ab102aebd35a29d80c37a6802',
      indexName: 'lunariours_blog'
    }
  }
})
