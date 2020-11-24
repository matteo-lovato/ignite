import detailReducer from "./detailReducer";
import gamesReducer from "./gamesReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    games: gamesReducer,
    detail: detailReducer,
});

export default rootReducer;
