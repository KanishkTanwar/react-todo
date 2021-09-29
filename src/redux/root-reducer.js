import { combineReducers } from "redux";
import CardReducer from "./card/card-reducer";
import SearchReducer from "./search/search-reducer";

export default combineReducers({
    card: CardReducer,
    search: SearchReducer,
})