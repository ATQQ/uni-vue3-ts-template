import { test, expect } from 'vitest'
import { getFullURL } from '../src/utils/http'

test('getFullURL1', () => {
  expect(getFullURL('', '/api', {})).toBe('/api')
  expect(getFullURL('/', '/api/user', {})).toBe('/api/user')

  expect(getFullURL('/api', 'user', {})).toBe('/api/user')
  expect(getFullURL('/api', '/user', {})).toBe('/api/user')
  expect(getFullURL('/api', '/user/login', {})).toBe('/api/user/login')
  expect(getFullURL('/api', 'user/login', {})).toBe('/api/user/login')

  expect(getFullURL('/api/', 'user', {})).toBe('/api/user')
  expect(getFullURL('/api/', '/user', {})).toBe('/api/user')
  expect(getFullURL('/api/', '/user/login', {})).toBe('/api/user/login')
  expect(getFullURL('/api/', 'user/login', {})).toBe('/api/user/login')

  expect(getFullURL('api/', 'user', {})).toBe('api/user')
  expect(getFullURL('api/', '/user', {})).toBe('api/user')
  expect(getFullURL('api/', '/user/login', {})).toBe('api/user/login')
  expect(getFullURL('api/', 'user/login', {})).toBe('api/user/login')

  expect(getFullURL('http://www.xxx.com', 'user', {})).toBe(
    'http://www.xxx.com/user'
  )
  expect(getFullURL('http://www.xxx.com', '/user', {})).toBe(
    'http://www.xxx.com/user'
  )
  expect(getFullURL('http://www.xxx.com/', 'user', {})).toBe(
    'http://www.xxx.com/user'
  )
  expect(getFullURL('http://www.xxx.com/', '/user', {})).toBe(
    'http://www.xxx.com/user'
  )
  expect(getFullURL('http://www.xxx.com/', '/user/login', {})).toBe(
    'http://www.xxx.com/user/login'
  )
  expect(
    getFullURL('http://www.xxx.com/', 'http://www.xxx.com/user2/login', {})
  ).toBe('http://www.xxx.com/user2/login')

  expect(getFullURL('api/', 'user/getList', { id: 1 })).toBe(
    'api/user/getList?id=1'
  )
  expect(getFullURL('api/', 'user/getList?id=2', { age: 18 })).toBe(
    'api/user/getList?id=2&age=18'
  )
  expect(getFullURL('api/', 'user/getList?id=2', { id: 2 })).toBe(
    'api/user/getList?id=2&id=2'
  )
  expect(getFullURL('api/', 'user/getList?id=2&age=3', { sex: 1 })).toBe(
    'api/user/getList?id=2&age=3&sex=1'
  )
  expect(getFullURL('api/', 'user/getList?id=2&age=3', { sex: 1 })).toBe(
    'api/user/getList?id=2&age=3&sex=1'
  )

  expect(getFullURL('api/', 'user/getList?id=2&age=3#123', {})).toBe(
    'api/user/getList?id=2&age=3#123'
  )
})
