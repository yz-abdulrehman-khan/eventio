import {axios} from '../'
import {storeAuthToken, storeRefreshToken} from '../../context/local-storage'
import {User, Auth} from './types'

export default {
  async signIn(email: string, password: string): Promise<Auth> {
    const response = await axios.post(`/auth/native`, {email, password})
    const authToken = response.headers['authorization']
    const refreshToken = response.headers['refresh-token']
    //store token in local storage
    if (authToken) storeAuthToken(authToken)
    if (refreshToken) storeRefreshToken(refreshToken)
    return {
      user: response.data as User,
      // accessToken: authToken as string,
      // refreshToken: refreshToken as string,
    }
  },

  async signInRefresh(refreshToken: string): Promise<Auth> {
    const response = await axios.post(`/auth/native`, {refreshToken})
    const authToken = response.headers['authorization']
    if (authToken) storeAuthToken(authToken)
    return {
      user: response.data as User,
      // accessToken: response.headers['authorization'] as string,
    }
  },
}
