import CreateEvent from '../screens/Events/CreateEvent'
import Events from '../screens/Events/Events'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NotFoundScreen from '../screens/Errors/404'
import CoverImageLayout from '../components/layout/CoverImageLayout'

const AuthenticatedApp = (): JSX.Element => {
  return (
    <>
      <PrivateRoutes />
    </>
  )
}

const PrivateRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" children={<Events />} />
        <Route path="/events" children={<Events />} />
        <Route path="/create/event" children={<CreateEvent />} />
        <Route
          path="*"
          children={
            <CoverImageLayout>
              <NotFoundScreen />
            </CoverImageLayout>
          }
        />
        {/* Todo Edit Event Screen Route */}
        {/* Todo Event Details Screen Route */}
      </Switch>
    </Router>
  )
}

export default AuthenticatedApp
