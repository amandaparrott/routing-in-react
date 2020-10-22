import React, { Component } from 'react';


class FilmId extends Component {
    constructor(props) {
        super(props);
        this.state = {
            film: ''
        }
    }
    
    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films/" + this.props.match.params.id)
        .then(res => res.json())
        .then(film => {this.setState({ film: film })})
        .then(film => console.log(film));
    }

    render() {
        return(
            <div>
                <div className="container justify-content-center">
            <div className="card row my-4 shadow">
              <div className="card-header text-center">{this.state.film.title}</div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <section className="text-center">
                      <h5>Synopsis:</h5>
                      <p>{this.state.film.description}</p>
                      <h5>Director:</h5>
                      <p>{this.state.film.director}</p>
                      <h5>Producer:</h5>
                      <p>{this.state.film.producer}</p>
                      <h5>Release Date:</h5>
                      <p>{this.state.film.release_date}</p>
                      <h5>Rotten Tomatoes Score:</h5>
                      <p>{this.state.film.rt_score}</p>
                  </section>
                </blockquote>
              </div>
            </div>
            </div>
          </div>
           
        )
    }

}

export default FilmId;