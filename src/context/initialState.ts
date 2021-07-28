/**
 * Initial user state for reducer
 */

export type User = {
  id: string | null
  firstName: string
  lastName: string
  email: string
  isLogged: boolean
}

export const userInitialState: User = {
  id: null,
  firstName: 'Darth',
  lastName: 'Vader',
  email: 'darth@darkside.com',
  isLogged: false,
}
