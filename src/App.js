import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Giveaways from './components/Giveaways';
import News from './components/News';
import NewsDetails from './components/NewsDetails';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Switch>
            <Route path="/giveaways" component={Giveaways} />
            <Route path="/news" exact component={News} />
            <Route path="/news/:id" component={NewsDetails} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
