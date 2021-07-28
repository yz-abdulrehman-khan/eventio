import {BrowserRouter as Router} from 'react-router-dom'
import {AuthProvider} from './authContext'

function AppProviders({children}): JSX.Element {
  return (
    <Router>
      <AuthProvider>{children}</AuthProvider>
    </Router>
  )
}

export {AppProviders}
