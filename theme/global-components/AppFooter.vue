<template>
  <footer class="app-footer">
    <h2 class="logo"></h2>
    <p>EliazTray的朋友们：
      lucas wang
    </p>
    <p>
      Power by Vuepress
    </p>
  </footer>
</template>

<script>
import get from 'lodash-es/get'
export default {
  name: 'AppFooter',
  components: {
  }
}
</script>

<style lang="scss">
.app-footer {
  max-width: 740px;
  margin: 0 auto;

  p {
    color: rgba(0, 0, 0, 0.54);
    font-size: 0.75rem;
    line-height: 1rem;
    text-align: center;

    &:last-child {
      padding-bottom: 1rem;
    }
  }
}
</style>
