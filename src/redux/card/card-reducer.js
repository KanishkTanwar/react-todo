import _ from 'lodash'
const CardReducer = (state={}, action) => {
    switch (action.type) {
        case 'ADD_CARD':
            return {...state, ..._.mapKeys(action.payload,"id")};
            
        case 'FETCH_CARDS':
            return {...state, ..._.mapKeys(action.payload,"id")};

        case 'DELETE_CARD':
            return _.omit(state,action.payload);
    
        default:
            return state;
    }
}

export default CardReducer;