const { COCKTAIL_MULTIPULE_FAIL, COCKTAIL_MULTIPULE_SUCCESS, COCKTAIL_MULTIPULE_LOADING } = require("../Constants/actionTypes");

const DefaultState = {
    loading : false,
    data : {} ,
    errorMsg : "",
     
};

const CocktailReducers = (state = DefaultState, action) => {
    switch (action.type){
        case COCKTAIL_MULTIPULE_LOADING:
        return {
            ...state,
            loading : true,
            errorMsg : "",
        };

        case COCKTAIL_MULTIPULE_FAIL:
        return {
            ...state,
            loading : false,
            errorMsg : "Unable to load Single Cocktail",
        };
        
        case COCKTAIL_MULTIPULE_SUCCESS:
        return {
            ...state,
            loading : false,
            errorMsg : "",
            data:  action.payload.drinks
            // data:{
            //     ...state.data,
            //     [action.idDrink]: action.payload
            // }
        };
        
         
        default :
        return state
    }
}
export default CocktailReducers;