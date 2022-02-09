import { User } from "../../models/user.model";
import UserState from "../states/User.state";

const setUserReducer = (state: UserState = new UserState(), action: {type: string, user: User}) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }
    default:
      return state;
  }
}

export default setUserReducer