import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import FilmsPage from "./FilmsPage.jsx";
import PeoplePage from "./PeoplePage.jsx";
import HomePage from "./HomePage.jsx";
import Header from "./Header.jsx";
import FilmId from "./FilmId.jsx";
import PeopleId from "./PeopleId.jsx";
import './index.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <React.Fragment>
              <div className="container justify-content-center">
            <div className="row col-12 justify-content-center">
            <Link to="/">
                <button type="button" className="btn btn-info shadow m-5">
                    Home
                </button>
            </Link>
            <Link to="/films">
              <button type="button" className="btn btn-info shadow m-5">
                Load Films
              </button>
            </Link>
            <Link to="/people">
              <button type="button" className="btn btn-info shadow m-5">
                Load Characters
              </button>
            </Link>
            </div>
            </div>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/films" component={FilmsPage} />
              <Route exact path="/films/:id" component={FilmId} />
              <Route path="/people" component={PeoplePage} />
              <Route exact path="/person/:id" component={PeopleId} />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}
export default App;
