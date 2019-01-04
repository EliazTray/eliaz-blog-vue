import './style.scss'
import webController from './web-controller'
import {
  SETTINGS_KEY
} from './constants'

export default {
  // 根节点的mounted的时机
  mounted() {
    window[SETTINGS_KEY] = SETTINGS
    webController(this)
  },

  updated() {
    webController(this)
  }
}
