import { combineReducers } from "redux";

import auth from "./auth";
import user from "./user";
import userArtist from "./userArtist";
import featuredPlaylist from "./featuredPlaylist";

export default combineReducers({
  auth,
  user,
  userArtist,
  featuredPlaylist,
});
