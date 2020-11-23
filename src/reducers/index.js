const { combineReducers } = require("redux")
const { default: gamesReducer } = require("./gamesReducer")

const rootReducer = combineReducers({
  gaames: gamesReducer,
})

export default rootReducer
