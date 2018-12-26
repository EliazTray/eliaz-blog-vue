<template>
  <div id="disqus_thread"></div>
</template>
<script>
// Copy from https://github.com/ktquez/vue-disqus/blob/master/src/vue-disqus.vue

/* eslint: camelcase: 0 */
export default {
  name: 'vue-disqus',
  props: {
    shortname: {
      type: String,
      required: false
    },
    identifier: {
      type: String,
      required: false
    },
    url: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    remote_auth_s3: {
      type: String,
      required: false
    },
    api_key: {
      type: String,
      required: false
    },
    sso_config: {
      type: Object,
      required: false
    },
    language: {
      type: String,
      required: false
    }
  },
  mounted() {
    if (window.DISQUS) {
      this.reset(window.DISQUS)
      return
    }
    this.init()
  },
  methods: {
    reset(dsq) {
      const self = this
      dsq.reset({
        reload: true,
        config: function () {
          self.setBaseConfig(this)
        }
      })
    },
    init() {
      const self = this
      window.disqus_config = function () {
        self.setBaseConfig(this)
      }
      setTimeout(() => {
        /* eslint-disable-next-line */
        const shortname = this.shortname ? this.shortname : DISQUS_CONFIG.shortname
        if (!shortname) {
          throw Error('Please provide your shortname!')
        }
        let d = document

        let s = d.createElement('script')
        s.setAttribute('id', 'embed-disqus')
        s.setAttribute('data-timestamp', Number(new Date()))
        s.type = 'text/javascript'
        s.async = true
        s.src = `//${shortname}.disqus.com/embed.js`
        s.onerror = (self, error) => {
          console.log(self, error)
          this.$emit('error', self, error)
        }
        (d.head || d.body).appendChild(s)
      }, 0)
    },
    setBaseConfig(disqusConfig) {
      disqusConfig.page.identifier = (this.identifier || this.$route.path || window.location.pathname)
      disqusConfig.page.url = (this.url || this.$el.baseURI)
      if (this.title) {
        disqusConfig.page.title = this.title
      }
      if (this.remote_auth_s3) {
        disqusConfig.page.remote_auth_s3 = this.remote_auth_s3
      }
      if (this.api_key) {
        disqusConfig.page.api_key = this.api_key
      }
      if (this.sso_config) {
        disqusConfig.sso = this.sso_config
      }
      if (this.language) {
        disqusConfig.language = this.language
      }

      disqusConfig.callbacks.onReady = [() => {
        this.netError = false
        this.$emit('ready')
      }]

      disqusConfig.callbacks.onNewComment = [comment => {
        this.$emit('new-comment', comment)
      }]
    }
  }
}
</script>

<style>
.disqus-net-error {
  color: #ccc;
  font-size: 20px;
  text-align: center;
}
</style>

