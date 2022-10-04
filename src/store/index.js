import {createStore} from 'redux';
const INICIO = {
    data: [
        'listagem 1',
        'listagem 2'
    ]
}
function  Listagem(state = INICIO, action){//reducer
    switch(action.type){
        case 'LISTAGENS':
            return {...state, data:[...state.data, action.title]};
        default:
            return state;
    }
}
const store = createStore(Listagem);

export  default store;