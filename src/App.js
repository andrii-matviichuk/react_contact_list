import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Contacts />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
