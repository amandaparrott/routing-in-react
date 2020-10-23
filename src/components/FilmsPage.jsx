import React, { Component } from "react";
import FilmCard from "./FilmCard.jsx";
import './index.css';


class FilmsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((films) => this.setState({ films: films }));
    // .catch(err => console.log(err))
  }

  render() {
    return (
      
      <main>
        <section className="container my-2 justify-content-center">
          {this.state.films.map((film, id) => (
            <FilmCard key={id} film={film} />
          ))}
        </section>
      </main>
    
    );
  }
}

export default FilmsPage;
