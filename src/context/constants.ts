/**
 * API resources
 * @constant
 */
export const RESOURCES = {
  EVENTS: 'events',
  AUTH: 'auth/native',
  ATTEND_EVENT: 'attendees/me',
}

/**
 * Event list filter params
 * @constant
 */
export const FILTER = {
  ALL: ' all',
  PAST: 'past',
  FUTURE: 'future',
}

/**
 * Basic http status code
 * @constant
 */
export const HTTP_STATUS = {
  OK: 200,
  UNAUTHORIZED: 401,
  CREATED: 201,
}

/**
 * Authorization token
 */
export const TOKEN = {
  AUTH_TOKEN: 'authorization-token',
  REFRESH_TOKEN: 'refresh-token',
}

/**
 * Reducer actions
 */
export enum ACTIONS {
  LOGIN,
  LOGOUT,
}
