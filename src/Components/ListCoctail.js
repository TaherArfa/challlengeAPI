import React from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { useEffect } from "react";
import { GetCocktailList } from "../Actions/actionTask";
import { Card, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

function ListCoctail(props) {
  
  const [search, setSearch] = useState("")
  const dispatch = useDispatch();
  const cocktailList = useSelector((state) => state.CocktailList);
  console.log("ccccccc",cocktailList);

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = () => {
    dispatch(GetCocktailList());
  };

  const showData = () => {
    if (!_.isEmpty(cocktailList.data)) {
      return cocktailList.data.map((el) => {
        // return <p>  </p>;
        return (
          <div className="cocktailList">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={el.strDrinkThumb} />
              <Card.Body>
                <Card.Title>{el.strDrink}</Card.Title>
                <Card.Text>{el.strInstructions}</Card.Text>
                <Button variant="primary">
                  <Link to={`/cocktail/${el.idDrink}`} className="cocktailLink">
                    About Cocktail
                  </Link>
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      });
    }

    if (cocktailList.loading) {
      return (
        <div className="SpinnerLoading">
          <Spinner animation="border" />
          <p> loading</p>
        </div>
      );
    }

    if (cocktailList.errorMsg !== "") {
      return <p> {cocktailList.errorMsg} </p>;
    }

    return <p> unable to get data</p>;
  };

  return (
    <div className="listCocktail">

      {/* <div> 
        
        <p> Search </p>
        <input type="text" onChange={e => setSearch(e.target.value)}/>
        <button onClick={()=> props.history.push(`/cocktail/${search}`)}>search</button>
      
      </div> */}
      {/* <h1> listCoctail </h1> */}
      {showData()}
    </div>
  );
}

export default ListCoctail;
