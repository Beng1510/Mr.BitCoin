import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader/AppHeader'
import { About } from './pages/About/About'
import { ContactPage } from './pages/ContactPage/ContactPage'
import { ContactEdit } from './pages/ContactEdit/ContactEdit'
import { StatisticPage} from './pages/StatisticPage/StatisticPage'
import BitCoinApp from './pages/BitCoinApp';
import './assets/scss/global.scss';
import ContactDetailsPage from './pages/ContactDetailsPage/ContactDetailsPage'
import { SignupPage } from './pages/SignupPage/SignupPage'

function App() {
  return (
    <div className="App">
      <Router>
        <AppHeader />
        <Switch>
          <Route path="/contact/edit/:id?" component={ContactEdit} />
          <Route path="/contact/:id" render={props => <ContactDetailsPage {...props} />} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/about" component={About} />
          <Route path="/stats" component={StatisticPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/" component={BitCoinApp} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
