<template>
  <Layout>
    <div class="custom-page-post">
      <nav class="breadcrumbs">
        <div class="page-size">
          <span>文章字数约:</span>
          <span>{{$frontmatter.pageSize}} words</span>
          <span class="page-pre">预计阅读:</span>
          <span>{{$frontmatter.readTime}} min</span>
        </div>
        <ul class="rec-list is-category" v-if="categoryList.length">
          <li class="item" v-for="(category, index) in categoryList" :key="index">
            <router-link :to="category.path">
              #{{category.key | upper}}
            </router-link>
          </li>
        </ul>
        <!-- <ul class="rec-list is-tag" v-if="tagList.length">
          <li class="item" v-for="(tag, index) in tagList" :key="index">
            <a :href="tag.path">
              #{{tag.key | upper}}
            </a>
          </li>
        </ul> -->
      </nav>
      <Content class="post-content" />
      <!-- prev & next -->
      <div class="post-nav" v-if="prev || next">
        <div class="prev" v-if="prev"><a :href="prev.path">⬅️ {{prev.title || prev.path}}</a></div>
        <div class="next" v-if="next"><a :href="next.path">➡️ {{next.title || next.path}}</a></div>
      </div>
      <!-- comments component-->
      <comments />
    </div>
  </Layout>
</template>

<script>
import get from 'lodash-es/get'
import dayjs from 'dayjs'
export default {
  name: 'Post',
  filters: {
    upper(value) {
      return value.toUpperCase().replace('.', '')
    }
  },
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
    },
    // 取每个页面 frontmatter 定义的创建时间(date), 无定义的话取每个页面的 git 记录上的时间戳，再无则取当前时间
    // 按最新时间排列
    sortByTime(a, b) {
      const aTime = dayjs(get(a.frontmatter, 'date', get(a, 'lastUpdated', Date.now()))).valueOf()
      const bTime = dayjs(get(b.frontmatter, 'date', get(b, 'lastUpdated', Date.now()))).valueOf()
      return bTime - aTime
    }
  },
  computed: {
    categoryList() {
      return Object.entries(this.$categories._metaMap).reduce((result, item) => {
        const key = item[0]
        let value = get(item[1], 'posts')
        if (value.find(post => post.path === this.$route.path)) {
          result.push({
            key,
            path: get(item[1], 'path')
          })
        }
        return result
      }, [])
    },
    tagList() {
      return Object.entries(this.$tags._metaMap).reduce((result, item) => {
        const key = item[0]
        let value = get(item[1], 'posts')
        if (value.find(post => post.path === this.$route.path)) {
          result.push({
            key,
            path: get(item[1], 'path')
          })
        }
        return result
      }, [])
    },
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
    }
  }
}

</script>

<style src="prismjs/themes/prism-tomorrow.css">
</style>
<style lang="stylus" src="@parent-theme/styles/theme.styl">
</style>
<style lang="scss">
@import '../styles/theme.scss';
</style>

<style lang="scss">
.breadcrumbs {
  padding: 0 10px;
  margin-left: 50%;
  border-bottom: 1px solid rgba(114, 186, 94, 0.55);
  border-left: 1px solid rgba(114, 186, 94, 0.55);
  background-color: rgba(114, 186, 94, 0.05);

  ul,
  li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
}

.rec-list {
  display: flex;
  align-items: center;
  padding: 6px 0;
  font-size: 0.8rem;

  .item + .item {
    margin-left: 10px;
  }

  a {
    display: block;
    height: 100%;
    transition: all 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
}

.page-size {
  padding: 6px 0;
  color: #3eaf7c;
  font-size: 0.8rem;

  span:nth-child(2n) {
    color: #efbb35;
  }

  .page-pre {
    margin-left: 10px;
  }
}

.post-nav {
  display: flex;
  max-width: 740px;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
}
</style>

