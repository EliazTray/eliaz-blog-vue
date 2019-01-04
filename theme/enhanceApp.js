import {ContentLoader} from 'vue-content-loader'
// Markdown demo-block 需要使用runtimeCompiler. 所以config.js还修改了 vue.runtime.esm.js => vue.esm.js
// TODO: react 或者跟多 demo block需要被添加
const babel = require('@babel/standalone')
export default ctx => {
  const {
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData,
    isServer // 站点元数据
  } = ctx
  // 这个文件是被服务端以及客户端同时作用的,但 window 只有客户端才具有
  if (!isServer) {
    window.Vue = Vue
    window.Babel = babel
  }
  Vue.component(ContentLoader.name, ContentLoader)
}
