import http from '../http';

function login(account: string, pwd: string) {
  return http.post('user/login', {
    account,
    pwd,
  });
}

export default {
  login,
};
