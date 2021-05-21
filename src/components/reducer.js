const reducer = (state, action) => {
    switch (action.type) {
        case 'updateLocalStorage':
            localStorage.setItem('cartItemsList', JSON.stringify(action.payload))
            // console.log(action.payload);
            console.log({...state});
            return {
                ...state
            }
        case 'CLEAR':
            return { ...state, cart: [] }
        case 'REMOVE':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        case 'INCREASE':
            let tempCart = state.cart.map(cartItem => {
                if (cartItem.id === action.payload) {
                    return { ...cartItem, amount: cartItem.amount + 1 }
                }
                return cartItem
            })

            return { ...state, cart: tempCart }
        case 'DECREASE':
            // If less than 1, the item is filtered out

            let newCart = state.cart
                .map(cartItem => {
                    if (cartItem.id === action.payload) {
                        return { ...cartItem, amount: cartItem.amount - 1 }
                    }
                    return cartItem
                })
                .filter(cartItem => cartItem.amount !== 0)

            return { ...state, cart: newCart }

        case 'GETTOTAL':
            let { total, amount } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    cartTotal.total += cartItem.price * cartItem.amount
                    cartTotal.amount += cartItem.amount
                    return cartTotal
                },
                { total: 0, amount: 0 }
            )
            total = (Math.round(total * 100) / 100).toFixed(2)
            return { ...state, total, amount }
        default:
            return state
    }
}

export default reducer
