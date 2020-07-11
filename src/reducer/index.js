import {combineReducers} from "redux";
import {reducer as main} from "./main/main.js";
import {reducer as initialOffers} from "./data/data.js";
// import {reducer as user} from "./user/user.js";
import NameSpace from "./name-spaces";

export default combineReducers({
  [NameSpace.MAIN]: main,
  [NameSpace.DATA]: initialOffers,
  // [NameSpace.USER]: user,
});
