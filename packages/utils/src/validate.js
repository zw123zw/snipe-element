/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
   * @param {string} str
   * @returns {Boolean}
   */
export function validUsername (str) {
  const validMap = ['admin', 'editor']
  return validMap.indexOf(str.trim()) >= 0
}

/**
   * 匹配Email地址
   */
export function isEmail (str) {
  if (str === null || str === '') return '邮箱格式不正确'
  var result = str.match(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)
  if (result === null) return '邮箱格式不正确'
  return false
}

/**
   * 判断数值类型，包括整数和浮点数
   */
export function isNumber (str) {
  if (isDouble(str) || isInteger(str)) return true
  return false
}

/**
   * 只能输入数字[0-9]
   */
export function isDigits (str) {
  if (str === null || str === '') return false
  var result = str.match(/^\d+$/)
  if (result === null) return false
  return true
}

/**
   * 匹配money
   */
export function isMoney (str) {
  if (str === null || str === '') return false
  var result = str.match(/^(([1-9]\d*)|(([0-9]{1}|[1-9]+)\.[0-9]{1,2}))$/)
  if (result === null) return false
  return true
}

/**
   * 匹配phone
   */
export function isPhone (str) {
  if (str === null || str === '') return false
  var result = str.match(
    // eslint-disable-next-line no-useless-escape
    /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/
  )
  if (result === null) return '手机号码不正确'
  return false
}

/**
   * 匹配mobile
   */
export function isMobile (str) {
  if (str === null || str === '') return false
  var result = str.match(/^1[345678]\d{9}$/)
  if (result === null) return '电话号码不正确'
  return false
}

/**
   * 联系电话(手机/电话皆可)验证
   */
export function isTel (text) {
  if (isMobile(text) || isPhone(text)) return false
  return '手机/电话号码不正确'
}

/**
   * 匹配qq
   */
export function isQq (str) {
  if (str === null || str === '') return false
  var result = str.match(/^[1-9]\d{4,12}$/)
  if (result === null) return false
  return true
}

/**
   * 匹配english
   */
export function isEnglish (str) {
  if (str === null || str === '') return false
  var result = str.match(/^[A-Za-z]+$/)
  if (result === null) return false
  return true
}

/**
   * 匹配integer
   */
export function isInteger (str) {
  if (str === null || str === '') return '数据类型只能是数字'
  // eslint-disable-next-line no-useless-escape
  var result = str.match(/^[-\+]?\d+$/)
  if (result === null) return '数据类型只能是数字'
  return false
}

/**
   * 匹配double或float
   */
export function isDouble (str) {
  if (str === null || str === '') return false
  // eslint-disable-next-line no-useless-escape
  var result = str.match(/^[-\+]?\d+(\.\d+)?$/)
  if (result === null) return false
  return true
}

/**
   * 匹配邮政编码
   */
export function isZipCode (str) {
  if (str === null || str === '') return false
  var result = str.match(/^[0-9]{6}$/)
  if (result === null) return false
  return true
}

/**
   * 匹配URL
   */
export function isUrl (str) {
  if (str === null || str === '') return false
  var result = str.match(
    // eslint-disable-next-line no-useless-escape
    /^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\’:+!]*([^<>\"])*$/
  )
  if (result === null) return false
  return true
}

/**
   * 匹配密码，以字母开头，长度在6-12之间，只能包含字符、数字和下划线。
   */
export function isPwd (str) {
  if (str === null || str === '') return false
  var result = str.match(/^[a-zA-Z]\\w{6,12}$/)
  if (result === null) return false
  return true
}

/**
   * 判断是否为合法字符(a-zA-Z0-9-_)
   */
export function isRightfulString (str) {
  if (str === null || str === '') return false
  var result = str.match(/^[A-Za-z0-9_-]+$/)
  if (result === null) return false
  return true
}

/**
   * 匹配身份证号码
   */
export function isIdCardNo (code) {
  // 身份证号前两位代表区域
  const city = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江 ',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北 ',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏 ',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外 '
  }
  const idCardReg =
      /^[1-9]\d{5}(19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i // 身份证格式正则表达式
  // eslint-disable-next-line no-unused-vars
  let errorMessage = '' // 错误提示信息
  let isPass = true // 身份证验证是否通过（true通过、false未通过）

  // 如果身份证不满足格式正则表达式
  if (!code) {
    errorMessage = '请输入身份证号码'
    isPass = false
  } else if (!code.match(idCardReg)) {
    errorMessage = '请输入正确的身份证号码'
    isPass = false
  } else if (!city[code.substr(0, 2)]) {
    // 区域数组中不包含需验证的身份证前两位
    errorMessage = '请输入正确的身份证号码'
    isPass = false
  } else if (code.length === 18) {
    // 18位身份证需要验证最后一位校验位
    code = code.split('')
    // ∑(ai×Wi)(mod 11)
    // 加权因子
    const factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
    // 校验位
    const parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
    let sum = 0
    let ai = 0
    let wi = 0
    for (let i = 0; i < 17; i++) {
      ai = parseInt(code[i])
      wi = factor[i]
      sum += ai * wi // 开始计算并相加
    }
    const last = parity[sum % 11] // 求余
    if (last.toString() !== code[17]) {
      errorMessage = '请输入正确的身份证号码'
      isPass = false
    }
  }

  return isPass
}

/**
   * 匹配汉字
   */
export function isChinese (str) {
  if (str === null || str === '') return false
  var result = str.match(/^[\u4e00-\u9fa5]+$/)
  if (result === null) return false
  return true
}

/**
   * 匹配中文(包括汉字和字符)
   */
export function isChineseChar (str) {
  if (str === null || str === '') return false
  var result = str.match(/^[\u0391-\uFFE5]+$/)
  if (result === null) return false
  return true
}

/**
   * 字符验证，只能包含中文、英文、数字、下划线等字符。
   */
export function stringCheck (str) {
  if (str === null || str === '') return false
  var result = str.match(/^[a-zA-Z0-9\u4e00-\u9fa5-_]+$/)
  if (result === null) return false
  return true
}

/**
   * 过滤中英文特殊字符，除英文"-_"字符外
   */
export function stringFilter (str) {
  var pattern = new RegExp(
    "[`~!@#$%^&*()+=|{}':;',\\[\\].<>/?~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？]"
  )
  var rs = ''
  for (var i = 0; i < str.length; i++) {
    rs = rs + str.substr(i, 1).replace(pattern, '')
  }
  return rs
}

/**
   * 判断是否包含中英文特殊字符，除英文"-_"字符外
   */
export function isContainsSpecialChar (str) {
  if (str === null || str === '') return false
  var reg = RegExp(
    // eslint-disable-next-line no-useless-escape
    /[(\ )(\`)(\~)(\!)(\@)(\#)(\$)(\%)(\^)(\&)(\*)(\()(\))(\+)(\=)(\|)(\{)(\})(\')(\:)(\;)(\')(',)(\[)(\])(\.)(\<)(\>)(\/)(\?)(\~)(\！)(\@)(\#)(\￥)(\%)(\…)(\&)(\*)(\（)(\）)(\—)(\+)(\|)(\{)(\})(\【)(\】)(\‘)(\；)(\：)(\”)(\“)(\’)(\。)(\，)(\、)(\？)]+/
  )
  return reg.test(str)
}
