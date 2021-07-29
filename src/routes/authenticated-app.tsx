import CreateEvent from '../screens/Events/CreateEvent'
import Events from '../screens/Events/Events'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

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
        {/* Todo Edit Event Screen Route */}
        {/* Todo Event Details Screen Route */}
      </Switch>
    </Router>
  )
}

export default AuthenticatedApp
