<template>
  <Layout>
    <div class="custom-page-post">
      <nav class="breadcrumbs">
        <div class="page-meta">
          <span>文章字数约:</span>
          <span>{{$frontmatter.pageSize}} words</span>
          <span class="page-pre">预计阅读:</span>
          <span>{{$frontmatter.readTime}} min</span>
        </div>
        <div class="page-meta">
          <span>文章创建于:</span>
          <span>{{getCreateTime(cur)}}</span>
          <span class="page-pre">最后修改:</span>
          <span>{{getModifyTime(cur)}}</span>
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
    </div>
  </Layout>
</template>

<script>
import get from 'lodash-es/get'
import dayjs from 'dayjs'
const FORMAT_TEMPLATE = 'YYYY-MM-DD hh:mm:ss'
import Layout from './Layout.vue'
export default {
  name: 'Post',
  components: {
    Layout
  },
  filters: {
    upper(value) {
      return value.toUpperCase().replace('.', '')
    }
  },
  methods: {
    // Get time format with `FORMAT_TEMPLATE`
    getCreateTime(post) {
      return dayjs(get(post.frontmatter, 'date', this.getModifyTime(post))).format(FORMAT_TEMPLATE)
    },
    getModifyTime(post) {
      return dayjs(get(post, 'lastUpdated', dayjs())).format(FORMAT_TEMPLATE)
    },
    // 按创建的最新时间排列
    sortByTime(a, b) {
      const aTime = dayjs(this.getCreateTime(a)).valueOf()
      const bTime = dayjs(this.getCreateTime(b)).valueOf()
      return bTime - aTime
    }
  },
  computed: {
    categoryList() {
      return Object.entries(this.$categories._metaMap).reduce((result, item) => {
        const key = item[0]
        let value = get(item[1], 'posts')
        if (value.find(post => post.path === decodeURIComponent(this.$page.path))) {
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
        if (value.find(post => post.path === decodeURIComponent(this.$page.path))) {
          result.push({
            key,
            path: get(item[1], 'path')
          })
        }
        return result
      }, [])
    }
  }
}

</script>

<style src="prismjs/themes/prism-tomorrow.css">
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

.page-meta {
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

</style>

