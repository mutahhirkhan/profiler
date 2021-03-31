import { SET_PROFILE } from "./ProfileConstants"

var initialState = []
var ProfileReducer = (state = initialState, action) => {
    var {type, payload} = action

    switch (type) {
        case SET_PROFILE:
            return [...payload.profiles]
    
        default:
            return state
    }

    return state
}

export default ProfileReducer;