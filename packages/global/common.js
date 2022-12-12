// 格式化埋点名称
export function getSensorsName (eventName) {
  const hashName = window.location.hash.split('/').pop()
  return `${hashName}_${eventName}`
}

// 格式化埋点数据
export function getSensorsData (props = {}, data = {}) {
  if (typeof data === 'function') {
    return data
  }
  return {
    ...props,
    ...data
  }
}
