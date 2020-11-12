import React from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { useEffect } from "react";
import { GetCocktailList } from "../Actions/actionTask";
import { Card,  Button } from "react-bootstrap";
import { Link } from "react-router-dom";


function ListCoctail() {
  const dispatch = useDispatch();
  const cocktailList = useSelector(state => state.CocktailList );
  console.log("listcoctail",cocktailList)



 useEffect( () => {

      FetchData()
  },[]);

  const FetchData = () => {
      dispatch(GetCocktailList())
  }

  const showData = () => {
    if (!_.isEmpty(cocktailList.data)) {
      return cocktailList.data.map(el => {
        // return <p>  </p>;
        return <div className="cocktailList">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={el.strDrinkThumb} />
              <Card.Body>
                <Card.Title>{el.strDrink}</Card.Title>
                <Card.Text>
                 {el.strInstructions}
                </Card.Text>
                <Button variant="primary"><Link to={`/cocktail/${el.idDrink}`} className="cocktailLink">About Cocktail</Link></Button>
              </Card.Body>
            </Card>
        </div>



      })
     
    }

    if (cocktailList.loading) {
      return <p> loading</p>;
    }

    if (cocktailList.errorMsg !== "") {
      return <p> {cocktailList.errorMsg} </p>;
    }

    return <p> unable to get data</p>
  };

  return (
    <div className="listCocktail">
      {/* <h1> listCoctail </h1> */}
      {showData()}
    </div>
  );
}

export default ListCoctail;
