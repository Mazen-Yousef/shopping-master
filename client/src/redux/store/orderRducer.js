import { CLEAR_ORDER, CREATE_ORDER } from "../actions/types";


export const orderRducer = (state={},action) =>{
    switch(action.type){
        case CREATE_ORDER :
            return {
                order:action.data.order
            };

        case CLEAR_ORDER  :
            return {
                order : false
            };
        
        default:
            return state 
                

    }
}

