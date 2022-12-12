export default function () {
  return {
    props: {
      elData: String | Array | Object
    },
    model: {
      prop: 'elData',
      event: 'change'
    },
    data () {
      return {
        text: ''
      }
    },
    computed: {
      configs: function () {
        return Object.assign(
          {},
          this.attributes,
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
      elData: {
        handler: function (val) {
          this.text = val
        },
        immediate: true,
        deep: true
      }
    },
    methods: {
      handleChange () {
        this.$emit('change', this.text)
      }
    }
  }
}
