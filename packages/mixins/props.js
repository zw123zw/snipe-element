export default function () {
  return {
    props: {
      originalValue: String | Array | Object | Boolean | Function
    },
    model: {
      prop: 'originalValue',
      event: 'change'
    },
    data () {
      return {
        modelValue: ''
      }
    },
    computed: {
      configs: function () {
        return Object.assign(
          {},
          this.$dcsElement.options.configs,
          this.defaultConfigs,
          this.$attrs
        )
      },
      classList: function () {
        const allClass = []
        const getClass = (elClass) => {
          if (typeof elClass !== 'undefined') {
            if (Array.isArray(elClass)) {
              allClass.push(...elClass)
            } else {
              allClass.push(elClass)
            }
          }
        }
        getClass(this.$options.name)
        getClass(this.$dcsElement.options.class)
        return allClass
      }
    },
    watch: {
      originalValue: {
        handler: function (val) {
          this.modelValue = val
        },
        immediate: true,
        deep: true
      }
    },
    methods: {
      handleChange () {
        this.$emit('change', this.modelValue)
      }
    }
  }
}
