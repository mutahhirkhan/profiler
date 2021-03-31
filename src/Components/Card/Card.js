import React from "react";
import { Link, withRouter } from "react-router-dom";

// I N C O M P L E T E ----------------------------------------------------
const Card = (props) => {
  // console.log(props)
  var {
    profile: { name, email, id }, match:{params:{ProfileId}}
  } = props;
  // console.log(ProfileId)
  return (
    <div>
      ----------------------------------------------------------------
      <h1> {id}:-{name} </h1>
      <h1>{email}</h1>
      {ProfileId ? null : <Link to={`/profiles/${id}`}> <button>Details</button> </Link> }
    </div>
  );
};

export default withRouter(Card);
