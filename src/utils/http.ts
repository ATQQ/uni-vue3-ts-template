// @ts-ignore
import buildURL from 'axios/lib/helpers/buildURL'

export const getFullURL: (
  baseURL: string | undefined,
  url: string | undefined,
  params: Object,
  paramsSerializer: any
) => string = (baseURL, url, params, paramsSerializer) => {
  let fullURL = ''
  if (url!.startsWith('http')) {
    fullURL = buildURL(url, params, paramsSerializer)
  } else {
    const patternStart = /^\//
    const patternEnd = /\/$/
    const newBaseURL = patternEnd.test(baseURL!) ? baseURL!.replace(patternEnd, '') : baseURL
    const newURL = patternStart.test(url!) ? url : `/${url}`
    fullURL = newBaseURL! + newURL!
  }

  return fullURL
}
