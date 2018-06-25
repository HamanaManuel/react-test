import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from '../axios';


class MovieDetail extends Component {

  state = {
    movie: {
      title: ''
    }
  }

  componentDidMount(){
    console.log('hola');
    axios.get(`movies/${this.props.match.params.id}`).then(res => {
      console.log(res);
      this.setState({ movie: res.data });
    });
  }


  render() {
    return (
      <div className="mt-5 container">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">{this.state.movie.title}</h2>
            <p className="card-text">{this.state.movie.description}</p>
            <Link to="/" className="btn btn-primary">Go Back</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetail;
