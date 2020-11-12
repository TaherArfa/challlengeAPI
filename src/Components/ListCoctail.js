import React from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { useEffect } from "react";
import { GetCocktailList } from "../Actions/actionTask";
import { Card, Button, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

function ListCoctail(props) {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const cocktailList = useSelector((state) => state.CocktailList);
  console.log("ccccccc", cocktailList);

  useEffect(() => {
    FetchData();
  }, [search]);

  const FetchData = () => {
    dispatch(GetCocktailList(search));
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

    return <div style={{
      // display: "flex",
      FlexWrap:"wrap",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "200px"
  }}>
    <img src="data:image/jpeg;base64,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" alt="sadSmile" />
    <h1> we can not find Your Cocktail</h1>;
  </div>
  };

  return (
    <div className="listCocktail">
   
      {showData()}
    </div>
  );
}

export default ListCoctail;
