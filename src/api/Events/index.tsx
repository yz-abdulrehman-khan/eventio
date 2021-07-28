import axios from 'axios'
import {EventItem, CreateEventData} from './types'

export default {
  async getAll(): Promise<Array<EventItem>> {
    const response = await axios.get(`/events`)
    return response.data as EventItem[]
  },

  async create(data: CreateEventData, accessToken: string): Promise<EventItem> {
    const response = await axios.post(`/events`, data, {
      headers: {Authorization: accessToken},
    })
    return response.data as EventItem
  },

  async join(eventId: string, accessToken: string): Promise<EventItem> {
    const response = await axios.post(
      `/events/${eventId}/attendees/me`,
      {},
      {
        headers: {Authorization: accessToken},
      },
    )
    return response.data as EventItem
  },

  async leave(eventId: string, accessToken: string): Promise<EventItem> {
    const response = await axios.delete(`/events/${eventId}/attendees/me`, {
      headers: {Authorization: accessToken},
    })
    return response.data as EventItem
  },
}
