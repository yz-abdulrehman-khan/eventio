import {useContext, lazy, Suspense, useEffect, useState} from 'react'
import {AuthContext} from '../context/authContext'
import {getRefreshToken} from '../context/local-storage'
import Api from '../api/index'
import PageLoader from '../components/shared/FullPageLoader'
import {ACTIONS} from '../context/constants'

const AuthenticatedApp = lazy(() => import(/* webpackPrefetch: true */ './authenticated-app'))
const UnauthenticatedApp = lazy(() => import('./unauthenticated-app'))

const App = (): JSX.Element => {
  const [toRender, setToRender] = useState(false)
  const {
    dispatch,
    state: {isLogged},
  } = useContext(AuthContext)

  const refreshToken = getRefreshToken()
  useEffect(() => {
    const fetchLogin = async () => {
      if (refreshToken) {
        const userData = await Api.auth.signInRefresh(refreshToken)

        dispatch({type: ACTIONS.LOGIN, user: userData})
      }

      setToRender(true)
    }

    if (!toRender) {
      fetchLogin()
    }
  }, [toRender, dispatch, refreshToken])

  return (
    <>
      {toRender ? (
        <Suspense fallback={<PageLoader />}>
          {isLogged ? <AuthenticatedApp /> : <UnauthenticatedApp />}
        </Suspense>
      ) : (
        <PageLoader />
      )}
    </>
  )
}

export default App
