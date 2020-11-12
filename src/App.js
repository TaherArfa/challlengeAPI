import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import NavBar from "./Components/NavBar";
import AboutUs from "./Components/AboutUs";
import ListCoctail from "./Components/ListCoctail";
import SingleCoctail from "./Components/SingleCoctail";


function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/" component={ListCoctail} />
        {/* <Route path="/cocktail/:search" component={ListCoctail} /> */}
        <Route path="/cocktail/:id" component={SingleCoctail} />
        <Route path="/aboutus" component={AboutUs} />

        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
}


export default App;
