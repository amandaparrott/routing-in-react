import React, { Component } from 'react'
import PeopleCard from './PeopleCard.jsx'


class PeoplePage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        people: [],
      };
    }
  
    componentDidMount() {
      fetch("https://ghibliapi.herokuapp.com/people")
        .then((res) => res.json())
        .then((people) => this.setState({ people: people }));
      // .catch(err => console.log(err))
    }
  
    render() {
      return (
        <main className="container">
            <header className="d=flex"></header>
            <section className="row my-2 justify-content-center">
            {this.state.people.map((person, id) => <PeopleCard key={id} person={person} />)}
            </section>
            </main>
      );
    }
  }
export default PeoplePage;