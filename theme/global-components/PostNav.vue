<template>
  <!-- prev & next -->
  <div class="post-nav" v-if="prev || next">
    <!-- TODO: add tooltip & animation -->
    <div class="post-prev" v-if="prev"><a :href="prev.path">{{prev.title || prev.path}}</a></div>
    <div class="post-next" v-if="next"><a :href="next.path">{{next.title || next.path}}</a></div>
  </div>
</template>

<script>
import get from 'lodash-es/get'
export default {
  name: 'PostNav',
  methods: {
    resolvePost(path, offset) {

    },
    resolvePrev(path) {
      return this.find(path, -1)
    },
    resolveNext(path) {
      return this.find(path, 1)
    },
    //
    find(path, offset) {
      return this.postFilter[this.postFilter.findIndex(post => post.path === decodeURIComponent(path)) + offset]
    }
  },
  computed: {
    postFilter() {
      return get(this.$site, 'pages', []).filter(page => page.type === 'post').sort(this.sortByTime)
    },
    next() {
      const next = this.$frontmatter.next
      if (next === false) {
        return undefined
      }
      if (next) {
        // TODO:
        return undefined
      }
      return this.resolveNext(this.$page.path)
    },
    prev() {
      const prev = this.$frontmatter.prev
      if (prev === false) {
        return undefined
      }
      if (prev) {
        // TODO:
        return undefined
      }
      return this.resolvePrev(this.$page.path)
    },
    cur() {
      return this.postFilter.find(item => item.path === decodeURIComponent(this.$page.path))
    }
  }
}
</script>

<style lang="scss">
@import '../styles/mixin.scss';

.post-nav {
  overflow: hidden;
  max-width: 740px;
  padding: 1rem 0;
  margin: 0 auto;
}

.post-prev {
  @include textOverFlow();

  max-width: 200px;
  float: left;
}

.post-next {
  float: right;
}
</style>
