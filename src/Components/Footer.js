import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import './App.scss';

// Pages
import Home from './Pages/Home.js';

class App extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    
    fetch('http://localhost:8888/wp-api/wp-json/wp/v2/posts')
    .then((res) => res.json())
    .then((posts) => {
      this.setState({ posts });
      console.log(posts);
    });

  }

  render() {
    return (
      <Router history={history}>
        <div id="App">
        <Route path="/" component={Home}/>
        {/* <Route path="/Release/:id" component={ReleasePage}/> */}
        {/* <Route path="/Release/:id" component={ReleasePage}/> */}
         {/* <Route path="/Release/:id" component={ReleasePage}/> */}
        </div>
      </Router>
    );
  }
}

export default App;
