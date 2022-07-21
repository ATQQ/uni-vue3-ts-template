import http from '../http'

function login(account: string, pwd: string) {
  return http.post('user/login', {
    account,
    pwd
  })
}

/**
 * 获取验证码
 * @param phone 手机号
 */
function getCode(phone: string): Promise<{ num: number }> {
  return http.get('random/code', {
    params: {
      phone
    }
  })
}
export default {
  login,
  getCode
}
