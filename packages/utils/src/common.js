/**
 * 判断是否为空
 */
export function validatenull (val) {
  if (typeof val === 'boolean') {
    return false
  }
  if (typeof val === 'number') {
    return false
  }
  if (val instanceof Array) {
    if (val.length === 0) return true
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === '{}') return true
  } else {
    if (
      val === 'null' ||
      val == null ||
      val === 'undefined' ||
      val === undefined ||
      val === ''
    ) {
      return true
    }
    return false
  }
  return false
}

// 校验文件类型
export function checkFile (file, arr = []) {
  const typeList = [...arr]
  const fileName = file.name
  const extension = fileName.substr(fileName.lastIndexOf('.') + 1)
  const isRT = typeList.includes(extension)
  return isRT
}

export const getObjType = (obj) => {
  var toString = Object.prototype.toString
  var map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  }
  if (obj instanceof Element) {
    return 'element'
  }
  return map[toString.call(obj)]
}
/**
 *判断是否为json对象
 */

export const isJson = (str) => {
  if (Array.isArray(str)) {
    if (str[0] instanceof Object) {
      return true
    } else {
      return false
    }
  } else if (str instanceof Object) {
    return true
  }
  return false
}

/**
 * GET请求下载文件，并修改文件名
 * @param  {String} url
 * @param  {String} filename 想要保存的文件名称
 */
export function downloadUrl (url, filename, next, fail) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.responseType = 'blob'
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 && xhr.response) {
        if (typeof next === 'function') {
          next()
        }
        const blob = xhr.response
        if (window.navigator.msSaveOrOpenBlob) {
          navigator.msSaveBlob(blob, filename)
        } else {
          var link = document.createElement('a')
          var body = document.querySelector('body')
          link.href = window.URL.createObjectURL(blob)
          link.download = filename
          // fix Firefox
          link.style.display = 'none'
          body.appendChild(link)
          link.click()
          body.removeChild(link)
          window.URL.revokeObjectURL(link.href)
        }
      } else {
        if (typeof next === 'function') {
          fail()
        }
      }
    }
  }
  xhr.send()
}

/**
 * POST请求下载文件，并修改文件名
 * @param  {Blob} blob
 * @param  {String} filename 想要保存的文件名称
 */
export function downloadBlob (data, filename) {
  if (!data || !data.size) return console.error('导出失败')
  const blob = new Blob([data])
  if (filename) {
    filename = decodeURIComponent(filename.replace(/\+/g, '%20'))
  }
  if (window.navigator.msSaveOrOpenBlob) {
    navigator.msSaveBlob(blob, filename)
  } else {
    const link = document.createElement('a')
    const body = document.querySelector('body')
    link.href = window.URL.createObjectURL(blob)
    link.download = filename
    // fix Firefox
    link.style.display = 'none'
    body.appendChild(link)
    link.click()
    body.removeChild(link)
    window.URL.revokeObjectURL(link.href)
  }
}

export function generateUUID () {
  var d = new Date().getTime()
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    function (c) {
      var r = (d + Math.random() * 16) % 16 | 0
      d = Math.floor(d / 16)
      return (c === 'x' ? r : (r & 0x7) | 0x8).toString(16)
    }
  )
  return uuid
}

export const requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 0)
    }
  )
})()

export const on = (function () {
  if (document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
        return () => {
          off(element, event, handler)
        }
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
        return () => {
          off(element, event, handler)
        }
      }
    }
  }
})()

export const off = (function () {
  if (document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler)
      }
    }
  }
})()
