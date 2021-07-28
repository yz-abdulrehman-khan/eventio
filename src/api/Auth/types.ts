export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
}

export interface Auth {
  user: User
  accessToken?: string
  refreshToken?: string
}
