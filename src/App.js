import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import './App.scss';

// Pages
import Home from './Pages/Home.js';
import Page from './Pages/Page.js';
import Archive from './Pages/Archive.js';
import Single from './Pages/Single.js';

//Components
import Header from './Components/Header.js';

class App extends Component {

  render() {

    const SinglePage = ({ match }) => <Single match={match} />

    return (
      <Router history={history}>
        <div id="App">
          <Header />
          <Route exact path="/" component={Home}/>
          <Route path="/Page" component={Page}/>
          <Route path="/Archive" component={Archive}/>
          <Route path="/Single/:id" component={SinglePage}/>
        </div>
      </Router>
    );
  }
}

export default App;
