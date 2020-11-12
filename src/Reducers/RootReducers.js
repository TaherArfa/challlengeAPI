import { combineReducers } from "redux";
import CocktailReducers from "./CocktailReducers";
import reducerTask from "./reducerTask";

const RootReducers = combineReducers({
  CocktailList: reducerTask,
  Cocktail: CocktailReducers,
});

export default RootReducers;
