import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MoviesList from './components/MoviesList';
import MovieDetail from './components/MovieDetail';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={MoviesList} />
          <Route path="/:id" component={MovieDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
