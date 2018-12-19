<template>
  <!-- 所有界面都应该基于layout -->
  <div class="theme-main">
    <div class="current-read" :style="{transform: `translate3d(${offsetProgress}%, 0, 0)`}"></div>
    <div class="scroll-main">
      <div
        class="theme-container"
        :class="pageClasses"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
        ref="container"
      >
          <!-- 头部 -->
          <AppHeader v-if="true"/>

          <!-- 正文 -->
          <slot>
            <Home v-if="$frontmatter.home"></Home>
            <Content v-else-if="$page.key" :page-key="$page.key"></Content>
          </slot>
          <!-- back-to-top -->
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import nprogress from 'nprogress'
import initQuicklink from '../utils/quicklink.js'

export default {
  computed: {
    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass
      return [userPageClass]
    },
    contentMounted() {
      return this.$vuepress.$get('contentMounted')
    }
  },
  data() {
    return {
      offsetProgress: -100
    }
  },

  mounted() {
    // Configure progress bar
    nprogress.configure({showSpinner: false})

    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path && !Vue.component(to.name)) {
        nprogress.start()
      }
      next()
    })

    this.$router.afterEach(() => {
      nprogress.done()
    })

    this.registerSmoothScroll()
    this.$scrollReveal.reveal('.post-content', {
      reset: true
    })
  },

  beforeDestroy() {
    this.removeSmoothScroll()
  },

  methods: {
    // Side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    },
    async registerSmoothScroll() {
      try {
        const [{default: Scrollbar}, {default: OverscrollPlugin}] = await Promise.all([import('smooth-scrollbar'), import('smooth-scrollbar/plugins/overscroll')])
        const options = {
          alwaysShowTracks: false, // 保持滚动条轨迹可见。
          continuousScrolling: false, // 设置为true允许外部滚动条在当前滚动条到达边缘时继续滚动。
          renderByPixels: true, // 以整数像素值渲染每一帧，设置true为提高滚动性能
          damping: 0.2, // 阻尼系数，浮动值之间(0, 1)。值越低，滚动越平滑（绘制帧越多）。
          thumbMinSize: 20, // 滚动条拇指的最小尺寸。
          plugins: {
            overscroll: {
              effect: 'glow',
              maxOverscroll: 150,
              damping: 0.2,
              glowColor: '#222a2d'
            }
          }
        }
        this._scrollbar = Scrollbar
        Scrollbar.use(OverscrollPlugin)
        this._scroll = Scrollbar.init(document.querySelector('.scroll-main'), options)
        this._scroll.addListener(status => {
          this.offsetProgress = (status.offset.y * 100 / status.limit.y) - 100
        })
      } catch (error) {
        console.error(error)
      }
    },
    // 移除事件监听
    removeSmoothScroll() {
      if (this._scrollbar && this._scroll) {
        this._scrollbar.destroy(this._scroll)
      }
    }
  },
  watch: {
    // 当文章加载完成时, 调用qiucklink
    contentMounted: {
      immediate: true,
      handler(val) {
        console.log(val, 'contentloaded')
        if (val === true) {
          initQuicklink(document)
        }
      }
    }
  }
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style lang="stylus" src="@parent-theme/styles/theme.styl"></style>
<style lang="scss">
@import '../styles/theme.scss';
@import url('https://fonts.googleapis.com/css?family=Cookie');

@font-face {
  font-family: 'Oswald-Regular';
  src: url('/Oswald-Regular.ttf');
}

.theme-main {
  height: 100%;

  .current-read {
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 3px;
    background-color: rgba(0, 143, 104, 0.95);
    transform: translate3d(-100%, 0, 0);
  }

  .scroll-main {
    height: 100%;
  }
}

.font-cookie {
  font-family: 'Cookie', cursive;
  font-style: italic;
  font-weight: 400;
}

.custom-font {
  font-family: 'Oswald-Regular', cursive;
  font-weight: 200;
}
</style>
