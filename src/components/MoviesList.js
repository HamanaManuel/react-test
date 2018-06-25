import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from '../axios';
class MoviesList extends Component {

  state = {
    movies: []
  }

  componentDidMount(){
    console.log('hola');
    axios.get('movies').then(res => {
      console.log(res);
      this.setState({ movies: res.data });
    });
  }

  renderMovies() {
    return this.state.movies.map(m => (
      <Link key={m._id} to={`/${m._id}`} className="list-group-item list-group-item-action">{m.title}</Link>
    ));
  }

  render() {
    return (
      <div className="mt-5 container">
        <h2>Movies</h2>
        <div className="list-group">
          {this.renderMovies()}
        </div>
      </div>
    );
  }
}

export default MoviesList;
