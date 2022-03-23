import { FETCH_PRODUCTS, FILTER_SIZE, FILTER_SORT } from "../actions/types";

export const productsReducer = (state = {}, action)=>{
    switch (action.type){
        case FETCH_PRODUCTS :
            return {
                    products : action.data,
                    productsByFilter : action.data
                   }
        case FILTER_SIZE :
            return {
                    ...state,
                    productsByFilter : action.data.products,
                    size : action.data.size
                   }
        case FILTER_SORT : 
            return {
                    ...state,
                    productsByFilter : action.data.products,
                    sort : action.data.sort
                   }  

        default : return state
    }

}

