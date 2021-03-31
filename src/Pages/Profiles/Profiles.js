import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Card from "../../Components/Card/Card";
import { fetchProfiles } from "./../../Redux/Profile/ProfileAction";
// import Profiles from './Profiles';

const Profiles = ({ fetchProfiles, profiles }) => {

  useEffect(async () => {
    await fetchProfiles();
  }, []);
  return (
    <div>
      <h1>Profiles</h1>
      {console.log(profiles)}
      {profiles.map((profile) => <Card key={profile.id}  profile={profile}></Card>)}
    </div>
  );
};

var mapState = (state) => ({
  profiles: state.profiles,
});

var actions = {
  fetchProfiles,
};

export default connect(mapState, actions)(Profiles);
