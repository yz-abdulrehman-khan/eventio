import {EventItem} from '../api/Events/types'
import {ButtonColor} from '../components/shared/Button'

/* Format Date */

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const formatDate = (isoString: string): string => {
  const date = new Date(isoString)

  const month = MONTHS[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()
  const time = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  })

  return `${month} ${day}, ${year} - ${time}`
}

// Ends

/* Event Button Config */

interface ButtonConfig {
  text: string
  color: ButtonColor
  action: 'join' | 'leave' | 'edit'
}

export const getEventButtonConfig = (
  {owner, attendees}: EventItem,
  userId: string,
): ButtonConfig => {
  // User owns Event
  if (owner.id === userId) {
    return {
      text: 'EDIT',
      color: 'grey',
      action: 'edit',
    }
  }

  // User attends Event
  if (attendees.find(attendee => attendee.id === userId)) {
    return {
      text: 'LEAVE',
      color: 'red',
      action: 'leave',
    }
  }

  // User can join Event
  return {
    text: 'JOIN',
    color: 'green',
    action: 'join',
  }
}

// Ends

/* Filter Events By Category  */

export type EventCategory = 'all' | 'past' | 'future'
export type EventListViewMode = 'grid' | 'list'

export const filterEventsByCategory = (
  events: EventItem[],
  category: EventCategory,
): EventItem[] => {
  if (category === 'all') return events

  const currentDate = new Date()

  return events.filter(event => {
    const startDate = new Date(event.startsAt)
    return category === 'past' ? startDate <= currentDate : startDate >= currentDate
  })
}

/* Creating date */

export const createDate = (date: string, time: string): Date => {
  const [year, month, day] = date.split('-').map(item => Number(item))
  const [hour, minute] = time.split(':').map(item => Number(item))

  return new Date(year, month - 1, day, hour, minute)
}

export const getUserInitials = (firstName = '', lastName = ''): string => {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`
}
