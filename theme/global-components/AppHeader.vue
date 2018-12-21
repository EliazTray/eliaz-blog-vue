<template>
  <header class="app-header">
    <div class="home-logo" v-if="!$frontmatter.home">
      <router-link to="/" class="lunariours-logo">
        <img src="../../blog/images/logo.jpeg" alt="">
      </router-link>
    </div>
    <ul class="category-ul" v-if="Object.keys($categories._metaMap).length">
      <li class="category-li" v-for="(value, key) of $categories._metaMap" :key="key">
      <router-link :to="value.path" class="category-link">
        {{key}}
      </router-link>
        <!-- => <a style="color:red;" v-for="(post, index) in value.posts" :key="index" :href="post.path">{{post.title}}</a> -->
      </li>
    </ul>
    <AlgoliaSearchBox
      v-if="isAlgoliaSearch"
      :options="algolia">
    </AlgoliaSearchBox>
    <div v-else>
      default category bar
    </div>
  </header>
</template>

<script>
import get from 'lodash-es/get'
export default {
  name: 'AppHeader',
  components: {
  },
  computed: {
    algolia() {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
    },

    isAlgoliaSearch() {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  }
}
</script>

<style lang="scss">
$mrl: 140px;

.app-header {
  display: flex;
  background: linear-gradient(to right, rgba(107, 183, 86, 0.95), #008f68);

  ul,
  li {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .category-ul {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  .category-li {
    line-height: 3.7rem;
  }

  .category-link {
    display: flex;
    align-items: center;
    padding: 0 1.25rem;
    color: #fff;
    font-size: 0.9rem;
    transition: all 0.3s;

    &:hover {
      opacity: 0.8;
    }

    &.router-link-exact-active {
      background: rgba(0, 0, 0, 0.1);
    }
  }
}

.home-logo {
  position: relative;
  width: $mrl;
}

.lunariours-logo {
  position: absolute;
  top: 0;
  left: 50%;
  overflow: hidden;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  transform: translate(-50%, 50%);
  transition: transform 0.1s cubic-bezier(0, 1.8, 1, 1.8);

  &:hover {
    transform: translate(-50%, 50%) rotate(-5deg) scale(1.15);
  }

  img {
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
