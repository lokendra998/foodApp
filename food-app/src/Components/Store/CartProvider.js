import CartContext from './Cart-context';
import {useReducer} from 'react';

const defaultCartState ={
    items:[],
    totalAmount:0
}

const cartReducer =(state, action) => {
if (action.type ==='ADD'){

const updatedtotalAmount = state.totalAmount +action.item.price * action.item.amount;

const updatedItems = state.items.concat(action.item);

// const existingCartItemIndex = state.items.findIndex(item => item.id===action.item.id);

// const existingCartItem = state.item[existingCartItemIndex];
// let updatedItems;

// let updatedItem;

// if(existingCartItem)
// {
//     updatedItem ={
//         ...existingCartItem,
//         amount:existingCartItem.amount + action.item.amount
//     };
//     updatedItems = [...state.items];
//     updatedItems[existingCartItemIndex]= updatedItem;
// }else{
//     // updatedItem = {...action.item}
    // updatedItems = state.items.concat(action.item)
// }


return {
    items:updatedItems,
    totalAmount: updatedtotalAmount
};

}
return defaultCartState;
};

const CartProvider =(props)=>{

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCardHandler =(item) =>{
        dispatchCartAction({type:'ADD',item:item});
    }

const removeItemFromCardHandler =(id) =>{
    dispatchCartAction({type:'REMOVE',id:id})
};

const cartContext = {

    items:cartState.items,
    totalAmount:cartState.totalAmount,
    addItem: addItemToCardHandler,
    removeItem: removeItemFromCardHandler
};


    return <CartContext.Provider value={cartContext} >
        {props.children}
    </CartContext.Provider>

};

export default CartProvider;