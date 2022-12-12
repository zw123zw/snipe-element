import components from 'components/index'
import 'styles/index.scss'
import utils from 'utils/index'

const install = function (Vue, options = {}) {
  components.map((component) => {
    Vue.component(component.name, component)
  })

  Vue.prototype.$dcsElement = {
    options: {
      ...options
    },
    ...utils,
    components: components,
    sensors: options.sensors
  }
}

const dcsElement = {
  install
}
export default dcsElement
