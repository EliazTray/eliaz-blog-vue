<template>
  <div class="post-comments">
    <disqus
      @ready="handleReady"
      @new-comment="handleNewComment"
      @error="handleLoadError"
      ></disqus>

      <div class="loading-wrapper" v-if="isLoading && !isNetError">
        <div class="ball-clip-rotate-multiple">
          <div></div>
          <div></div>
        </div>
      </div>

      <div class="disqus-net-error" v-if="isNetError">
        <p>There was a slight problem with the comment system.<br/>
          Please make sure you can access the site <a href="hppts://disqus.com">hppts://disqus.com</a>.
        </p>
      </div>
  </div>
</template>

<script>
import disqus from '@disqus'
export default {
  name: 'comments',
  components: {
    disqus
  },
  data() {
    return {
      isLoading: true,
      isNetError: false
    }
  },
  methods: {
    handleReady() {
      this.isLoading = false
    },
    handleNewComment(comment) {
      // TODO: 做消息通知
      console.log(comment)
    },
    handleLoadError() {
      this.isNetError = true
    }
  }
}
</script>

<style>
.post-comments {
  max-width: 740px;
  padding: 2rem 2.5rem;
  margin: 0 auto;
  border-top: 1px solid #f8c555;
}

.loading-wrapper {
  display: flex;
  max-height: 100px;
  align-items: center;
  justify-content: center;
  text-align: center;
}

</style>
