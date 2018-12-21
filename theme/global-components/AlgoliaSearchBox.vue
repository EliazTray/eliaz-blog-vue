<template>
  <form
    id="search-form"
    class="algolia-search-wrapper"
  >

    <input id="search-box" class="search-box" />
    <label for="search-box">
      <span class="search-icon"></span>
    </label>
  </form>
</template>

<script>
export default {
  props: ['options'],

  mounted() {
    this.initialize(this.options, this.$lang)
  },

  methods: {
    initialize(userOptions, lang) {
      Promise.all([
        import(/* webpackChunkName: "docsearch" */ 'docsearch.js/dist/cdn/docsearch.min.js'),
        import(/* webpackChunkName: "docsearch" */ 'docsearch.js/dist/cdn/docsearch.min.css')
      ]).then(([docsearch]) => {
        docsearch = docsearch.default
        const {algoliaOptions = {}} = userOptions
        docsearch(Object.assign(
          {},
          userOptions,
          {
            inputSelector: '#search-box',
            // #697 Make docsearch work well at i18n mode.
            algoliaOptions: Object.assign({
              facetFilters: [`lang:${lang}`].concat(algoliaOptions.facetFilters || [])
            }, algoliaOptions)
          }
        ))
      })
    },

    update(options, lang) {
      this.$el.innerHTML = `<input id="search-box" class="search-box" />
    <label for="search-box">
      <span class="search-icon"></span>
    </label>`
      this.initialize(options, lang)
    }
  },

  watch: {
    $lang(newValue) {
      this.update(this.options, newValue)
    },

    options(newValue) {
      this.update(newValue, this.$lang)
    }
  }
}
</script>

<style lang="scss" scoped>
// https://codepen.io/EliazTray/pen/EGWKQO froked from others
$tl: 0.6s;

.algolia-search-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: flex-end;
}

.search-box {
  width: 40px;
  height: 40px;
  border: none;
  background: rgba(107, 183, 86, 0.95);
  border-radius: 20px;
  cursor: pointer;
  transition: width $tl, border-radius $tl, background $tl, box-shadow $tl;
  & + label .search-icon { color: white; }

  &:hover {
    background: rgb(200, 200, 200);
    box-shadow: 0 0 0 5px rgb(61, 71, 82);
    color: white;
    & + label .search-icon { color: white; }
  }

  &:focus {
    width: 300px;
    padding-left: 15px;
    border: none;
    background: rgb(235, 235, 235);
    border-radius: auto;
    box-shadow: none;
    color: black;
    cursor: text;
    outline: none;
    transition: width $tl cubic-bezier(0, 1.22, 0.66, 1.39), border-radius $tl, background $tl;
    & + label .search-icon { color: black; }
  }
  &:not(:focus) { text-indent: -5000px; } // for more-graceful falling back (:not browsers likely support indent)
}

#algolia-search-input {
  position: relative;
  left: -5000px;
}

.search-icon {
  position: relative;
  top: 2px;
  left: -34px;
  display: inline-block;
  width: 30px;
  height: 30px;
  background: url('../images/search.svg') no-repeat center center;
  background-size: 1rem;
  cursor: pointer;
}

</style>
