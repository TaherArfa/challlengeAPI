import React from "react";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { useEffect } from "react";
import { GetCocktailList } from "../Actions/actionTask";

function ListCoctail() {
  const dispatch = useDispatch();
  const cocktailList = useSelector(state => state.CocktailList );
  console.log(cocktailList)


  useEffect( () => {
      FetchData()
  },[]);

  const FetchData = () => {
      dispatch(GetCocktailList())
  }

  const showData = () => {
    if (!_.isEmpty(cocktailList.data)) {
      return <p> have data </p>;
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
    <div>
      {/* <h1> listCoctail </h1> */}
      {showData()}
    </div>
  );
}

export default ListCoctail;
