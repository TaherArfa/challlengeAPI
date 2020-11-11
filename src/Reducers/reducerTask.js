import { COCKTAIL_LIST_FAIL, COCKTAIL_LIST_LOADING, COCKTAIL_LIST_SUCCESS } from "../Constants/actionTypes";

const intialState = {
    loading : false,
    data : [] ,
    errorMsg : "",
  };
  

export const reducerTask = (state = intialState, action) => {
    switch (action.type) {  
      case COCKTAIL_LIST_LOADING:
        return {
            ...state,
            loading: true,    
            errorMsg : "",     
        };

        case COCKTAIL_LIST_FAIL:
            return { 
                ...state,
                loading : false,
                errorMsg : "Unable to get the list of Cocktail"
             };

      case COCKTAIL_LIST_SUCCESS:
        return {
         ...state,
         loading: false,
         data : action.payload,
         errorMsg : "",
        };
         
      default:
        return state;
    }
    // {console.log("aaa",intialState);}
  };
  export default reducerTask;