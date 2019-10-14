export const todos = (state=[], action) => {
    switch(action.type){
        case 'ADD':
            return [...state, {added: 1}]
        default:
            return state
    }
}