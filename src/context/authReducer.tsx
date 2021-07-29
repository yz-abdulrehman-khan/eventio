import {useHistory} from 'react-router-dom'
import {storeRefreshToken, storeAuthToken} from './local-storage'
import {userInitialState} from './initialState'
import {ACTIONS} from './constants'
import {UserInterface, User} from './initialState'
/**
 * Auth reducer
 *
 * @function
 * @param {object} state
 * @param {object} action
 */
const authReducer = (
  state: typeof userInitialState,
  {user: {user} = {}, type}: {user: UserInterface; type: ACTIONS},
): User => {
  const history = useHistory()
  switch (type) {
    case ACTIONS.LOGIN: {
      const {id, firstName, lastName, email} = user || {}

      return {
        ...state,
        id: id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        isLogged: true,
      }
    }

    case ACTIONS.LOGOUT:
      storeRefreshToken('')
      storeAuthToken('')
      history.push('/')
      return {
        ...state,
        ...userInitialState,
      }

    default:
      return state
  }
}

export default authReducer
