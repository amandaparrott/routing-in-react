import React from 'react'
import { Link } from "react-router-dom";

const PeopleCard = (props) => {
    return (
      <div>
        <div className="card row col-12 my-4 shadow d-block">
          <div className="card-header text-center">{props.person.name}</div>
          <div className="card-body text-center mx-4">
            <blockquote className="blockquote mb-0">
              <p>Gender: {props.person.gender}</p>
              <p>Age: {props.person.age}</p>
              <Link to={`/person/${props.person.id}`}>
                  <button type="button" className="btn btn-info shadow m-5">Full Description</button>
              </Link>
            </blockquote>
          </div>
        </div>
      </div>
    );
  };


export default PeopleCard;