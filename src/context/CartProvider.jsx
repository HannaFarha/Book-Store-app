import { useState } from "react";
import CartContext from "./cartContext";

const CartProvider = ( {children}) => {
    const[cartItems,setCartItems]=useState([])

    const addToCart=(item)=>

    {
        console.log(item)

        setCartItems(prev=>[...prev,item])
    }

    const removeFromCart=(id)=>{
        const cart=cartItems.filter(c=>c.id !==id);
        setCartItems(cart);
    }
    return (<CartContext.Provider  value={{
        cartItems,
        addToCart,
        removeFromCart,
    }}>
        {children}
    </CartContext.Provider>  );
}
 
export default CartProvider;