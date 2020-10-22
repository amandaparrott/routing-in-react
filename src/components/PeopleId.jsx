import React, { Component } from 'react';


class PeopleId extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: ''
        }
    }
    
    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/people/" + this.props.match.params.id)
        .then(res => res.json())
        .then(person => {this.setState({ person: person })})
        .then(person => console.log(person));
    }

    render() {
        return(
            <div>
                <div className="container justify-content-center">
            <div className="card row my-4 shadow">
              <div className="card-header text-center">{this.state.person.name}</div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <section className="text-center">
                      <h5>Age:</h5>
                      <p>{this.state.person.age}</p>
                      <h5>Gender:</h5>
                      <p>{this.state.person.gender}</p>
                      <h5>Eye Color:</h5>
                      <p>{this.state.person.eye_color}</p>
                      <h5>Hair Color:</h5>
                      <p>{this.state.person.hair_color}</p>
                      <h5>Films:</h5>
                      <p>{this.state.person.films}</p>
                      <h5>Species:</h5>
                      <p>{this.state.person.species}</p>
                      <h5>Link:</h5>
                      <p>{this.state.person.url}</p>
                  </section>
                </blockquote>
              </div>
            </div>
            </div>
          </div>
           
        )
    }

}

export default PeopleId;