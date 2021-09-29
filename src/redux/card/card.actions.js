export const addCard = card => {
    return {
        type:'ADD_CARD',
        payload: card
    }
}

export const fetchCards = cards => {
    return {
        type:'FETCH_CARDS',
        payload: cards
    }
}

export const deleteCard = id => {
    return {
        type:'DELETE_CARD',
        payload: id
    }
}