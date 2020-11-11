import { combineReducers } from "redux";
import reducerTask from "./reducerTask";

const RootReducers = combineReducers(
  ({
    CocktailList: reducerTask,
  })
);

export default RootReducers
