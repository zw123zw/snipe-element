const requireModule = require.context('./src', false, /\.js$/)
const utils = {}
requireModule.keys().forEach((filename) => {
  const moduleName = filename
    .split('/')
    .pop()
    .replace(/\.\w+$/, '')
  utils[moduleName] = { ...requireModule(filename) }
})

export default utils
