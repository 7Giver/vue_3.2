import request from './request'

export function login(data) {
  return request({
    url: '/login',
    method: 'POST',
    data
  })
}
