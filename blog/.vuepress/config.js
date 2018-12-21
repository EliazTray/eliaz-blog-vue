module.exports = ctx => ({
  title: 'Lunariours',
  dest: 'dist',
  theme: 'theme/index.js',
  plugins: {
    'plugin/index.js': true
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Lunariours',
      description: 'Free Coding & 🍺'
    }
  },
  // Algolia 查询时依赖这个 facetFilters
  themeConfig: {
    algolia: {
      appId: '0VBNLFZN6R',
      apiKey: '7961ff9ab102aebd35a29d80c37a6802',
      indexName: 'lunariours_blog'
    }
  }
})
