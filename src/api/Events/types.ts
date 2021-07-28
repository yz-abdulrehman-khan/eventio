import {User} from '../Auth/types'

export interface EventItem {
  id: string
  title: string
  description: string
  startsAt: string
  capacity: number
  owner: User
  attendees: User[]
  updatedAt: string
  createdAt: string
}
export interface CreateEventData {
  title: string
  description: string
  startsAt: string
  capacity: number
}
