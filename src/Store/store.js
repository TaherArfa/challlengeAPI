import { createStore } from "redux";
// import { reducerTask } from "../Reducers/reducerTask";
import {composeWithDevTools} from "redux-devtools-extension"
import {applyMiddleware} from "redux"
import thunk from "redux-thunk"
import reducerTask from "../Reducers/reducerTask";

import RootReducers from "../Reducers/RootReducers"

const store = createStore(
    // reducerTask,
    RootReducers,
    composeWithDevTools(applyMiddleware(thunk))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     );

     export default store 