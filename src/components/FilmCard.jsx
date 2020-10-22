import React from 'react';

import { Link } from "react-router-dom";


let FilmCard = (props) => {
    return (
      <div>
        <div className="card row my-4 shadow">
          <div className="card-header text-center">{props.film.title}</div>
          <div className="card-body justify-content-center">
            <blockquote className="blockquote mb-0">
              <p>{props.film.description}</p>
              
              <Link to={`/films/${props.film.id}`}>
                  <button type="button" className="btn btn-info shadow m-5">More Info</button>
              </Link>
             
            </blockquote>
          </div>
        </div>
      </div>
    );
  };

export default FilmCard;