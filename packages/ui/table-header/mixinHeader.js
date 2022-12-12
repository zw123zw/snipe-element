import { getSensorsData, getSensorsName } from '../../global/common'

export default {
  props: {
    fieldData: String | Array,
    label: String,
    eleKey: String,
    options: {
      type: Array,
      default: () => []
    },
    events: {
      type: Object,
      default: () => ({})
    }
  },
  model: {
    prop: 'fieldData',
    event: 'change'
  },
  data () {
    return {
      fieldValue: '',
      fieldOptions: []
    }
  },
  computed: {
    configs: function () {
      return Object.assign({}, this.defaultConfigs, this.$attrs)
    }
  },
  watch: {
    options: {
      handler: function (val) {
        this.fieldOptions = val
      },
      immediate: true
    },
    fieldData: {
      handler: function (val) {
        this.fieldValue = val
      },
      immediate: true
    }
  },
  methods: {
    syncToChange () {
      const next = (newValue) => {
        this.fieldValue =
          typeof newValue !== 'undefined' ? newValue : this.fieldValue
        this.$emit('change', this.fieldValue)
        this.$emit('updateData')
        this.handleSensors()
      }
      if (typeof this.events.asyncChange === 'function') {
        this.events.asyncChange(next, this.fieldValue)
      } else {
        next()
      }
    },
    // 埋点
    handleSensors () {
      if (this.$dcsElement.sensors && this.$dcsElement.sensors.track) {
        const eventName = getSensorsName('filtrate')
        const eventData = getSensorsData({
          title: `${this.label}`
        })
        this.$dcsElement.sensors.track(eventName, eventData)
      }
    }
  }
}
