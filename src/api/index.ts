import authApi from './Auth'
import eventsApi from './Events'
import Axios from 'axios'

export const axios = Axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {APIKey: process.env.REACT_APP_API_URL},
})

const Api = {
  auth: authApi,
  events: eventsApi,
}

export default Api
