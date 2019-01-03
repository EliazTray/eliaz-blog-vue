const {
  path
} = require('@vuepress/shared-utils')

module.exports = options => ({
  name: 'vuepress-plugin-disqus',
  alias: {
    '@disqus': path.resolve(__dirname, 'disqus.vue')
  },
  define: {
    DISQUS_CONFIG: options.disqus_config || {}
  }
})
