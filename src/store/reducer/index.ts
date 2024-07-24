import { combineReducers } from "redux";

import auth from "./auth";
import user from "./user";
import userArtist from "./userArtist";

export default combineReducers({
  auth,
  user,
  userArtist,
});
