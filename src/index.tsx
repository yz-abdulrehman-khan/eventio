import ReactDOM from 'react-dom'
import {AppProviders} from '../src/context/index'
import GlobalStyle from './styles/globalStyles'
import App from './routes'

ReactDOM.render(
  <AppProviders>
    <GlobalStyle />
    <App />
  </AppProviders>,
  document.getElementById('root'),
)
