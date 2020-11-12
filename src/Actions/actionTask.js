import axios from "axios";
import { COCKTAIL_LIST_FAIL, COCKTAIL_LIST_LOADING, COCKTAIL_LIST_SUCCESS, COCKTAIL_MULTIPULE_FAIL, COCKTAIL_MULTIPULE_LOADING, COCKTAIL_MULTIPULE_SUCCESS } from "../Constants/actionTypes";


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
                // {console.log("res.data",res.data)}

    } catch (e){
        dispatch({
            type: COCKTAIL_LIST_FAIL,
        })

    }

};



export const GetCocktail = (idDrink) => async dispatch => {

    dispatch({
        type: COCKTAIL_MULTIPULE_LOADING
    })
    try{
        // const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${id}`)
        const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`)
        dispatch({
            type: COCKTAIL_MULTIPULE_SUCCESS,
            payload : res.data,
            idCocktail : idDrink,
        })
                // {console.log("res.data.MULTIPULE",res.data)}

    } catch (e){
        dispatch({
            type: COCKTAIL_MULTIPULE_FAIL,
        })

    }

};
