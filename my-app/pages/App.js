import { BrowserRouter as Router, Switch, Route, Redirect, } from 'react-router-dom';

import Home from "./components/Home";
import Cards from "./components/Cards";
import Numbers from './components/Numbers';

function App() {
  return (
    <> 
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/cards" component={Cards}/>
          <Route path="/numbers" component={Numbers}/>
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;