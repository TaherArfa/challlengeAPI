import axios from "axios";
import { COCKTAIL_LIST_FAIL, COCKTAIL_LIST_LOADING, COCKTAIL_LIST_SUCCESS } from "../Constants/actionTypes";


export const GetCocktailList = () => async dispatch => {

    dispatch({
        type: COCKTAIL_LIST_LOADING
    })
    try{
        const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`)
        dispatch({
            type: COCKTAIL_LIST_SUCCESS,
            payload : res.data
        })
                {console.log("res.data",res.data)}

    } catch (e){
        dispatch({
            type: COCKTAIL_LIST_FAIL,
        })

    }

};
