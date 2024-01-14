import Svg from './Svg/index.vue'
import { App, Component } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const globalComponent: Record<string, Component> = {
  Svg,
}

export default {
  install(app: App): void {
    Object.keys(globalComponent).forEach((key) => {
      app.component(key, globalComponent[key])
    })
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
