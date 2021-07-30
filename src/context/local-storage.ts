import {TOKEN} from './constants'

export const isBrowser = (): boolean => {
  return typeof window !== 'undefined'
}

const storeAuthToken = (authToken: string): any => {
  if (isBrowser()) {
    window.localStorage.setItem(TOKEN.AUTH_TOKEN, authToken)
  }
}

const getAuthToken = (): any =>
  isBrowser() ? window.localStorage.getItem(TOKEN.AUTH_TOKEN) || '' : ''

const storeRefreshToken = (refreshToken: string): any => {
  if (isBrowser()) {
    window.localStorage.setItem(TOKEN.REFRESH_TOKEN, refreshToken)
  }
}

const getRefreshToken = (): any =>
  isBrowser() ? window.localStorage.getItem(TOKEN.REFRESH_TOKEN) || '' : ''

export {storeAuthToken, getAuthToken, storeRefreshToken, getRefreshToken}
