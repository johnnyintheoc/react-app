import React from 'react';
import Nav from './components/Nav';
import Tesla from './components/Tesla';
//import TeslaDetails from './components/TeslaDetails';
import Tech from './components/Tech';
//import TechDetails from './components/TechDetails';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tesla" exact component={Tesla} />
            <Route path="/tech" exact component={Tech} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
