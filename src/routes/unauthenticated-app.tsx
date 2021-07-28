import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CoverImageLayout from '../components/layout/CoverImageLayout'
import Login from '../screens/Auth/Login'
import NotFoundScreen from '../screens/Errors/404'

const UnauthenticatedApp = (): JSX.Element => (
  <CoverImageLayout>
    <PublicRoutes />
  </CoverImageLayout>
)

const PublicRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" children={<Login />} />
        <Route path="/login" children={<Login />} />
        <Route path="*" children={<NotFoundScreen />} />
        {/* Todo Register Screen Route */}
      </Switch>
    </Router>
  )
}

export default UnauthenticatedApp
