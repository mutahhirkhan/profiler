import { SET_PROFILE } from './ProfileConstants';

export var fetchProfiles = () => async (dispatch) => {
    var data = await fetch("https://jsonplaceholder.typicode.com/users");
    var profiles = await data.json();
    //dispatch aik function he jis se jo bhi cheez return kawaogy tw wo reducer ke pass chali jaegi
    dispatch({
        type: SET_PROFILE,
        payload: {
            profiles,
        }
    })
}