import React from "react";
import Card from "../../Components/Card/Card";

class Details extends React.Component {
  state = {
    profile: {},
  };
  componentDidMount = async () => {
      var id = this.props.match.params.ProfileId
    var data = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    var profile = await data.json();
    this.setState({
      profile,
    });
  };
  render() {
    return (
      <div>
        <h1>Details</h1>
        <Card profile={this.state.profile} /> 
      </div>
    );
  }
}

export default Details;
