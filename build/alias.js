const path = require("path");

const resolve = (p) => path.resolve(__dirname, "../", p);

module.exports = {
  packages: resolve("packages"),
  core: resolve("packages/core"),
  global: resolve("packages/global"),
  components: resolve("packages/ui"),
  styles: resolve("packages/styles"),
  utils: resolve("packages/utils"),
  mixins: resolve("packages/mixins"),
  vue$: "vue/dist/vue.esm.js",
  "@": resolve("example"),
};
