import authApi from './Auth'
import eventsApi from './Events'
import Axios from 'axios'
import {API_URL, API_KEY} from '../utils/config'

export const axios = Axios.create({
  baseURL: API_URL,
  headers: {APIKey: API_KEY},
})

const Api = {
  auth: authApi,
  events: eventsApi,
}

export default Api
