import * as actioType from '../actions/type';


export const todosReducers =(state = [],action)=>{
    
    switch(action.type){
        case actioType.ADDNEW_TODO:
            return [action.payload, ...state]

        default:
            return[];
    }
}