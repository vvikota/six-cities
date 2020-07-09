import {combineReducers} from "redux";
import {reducer as main} from "./main/main.js";
import {reducer as data} from "./data/data.js";
// import {reducer as user} from "./user/user.js";
import NameSpace from "./name-spaces";

export default combineReducers({
  [NameSpace.MAIN]: main,
  [NameSpace.DATA]: data,
  // [NameSpace.USER]: user,
});
