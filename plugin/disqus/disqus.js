const {
  path
} = require('@vuepress/shared-utils')

module.exports = options => ({
  alias: {
    '@disqus': path.resolve(__dirname, 'disqus.vue')
  },
  define: {
    DISQUS_CONFIG: options.disqus_config || {}
  }
})
