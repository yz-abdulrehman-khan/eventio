import React, {FC, createContext, useReducer} from 'react'
import {userInitialState} from './initialState'
import userReducer from './authReducer'

// TODO: i am not sure about this one
const AuthContext = createContext<{
  state: typeof userInitialState
  dispatch: React.Dispatch<any>
}>({
  state: userInitialState,
  dispatch: () => null,
})

/**
 * Context for user
 */
const AuthProvider: FC = props => {
  const [state, dispatch] = useReducer(userReducer, userInitialState)

  return <AuthContext.Provider value={{state, dispatch}} {...props} />
}

export {AuthContext, AuthProvider}
