import {useEffect,useState,useContext} from 'react'
import "./cart.css"
import OrderSummary from './OrderSummary';
import CartContext from '../../context/cartContext';

const Card = () => {
    const{cartItems,addToCart,removeFromCart}=useContext(CartContext)
    
    return ( <div className="cart">
    <h1 className="cart-title">Your Shopping Cart</h1>
    <div className="cart-wrapper">
      <div className="cart-items">
{cartItems.map(item =><div key={item.id} className="cart-item">
    <img src={`/books/${item.image}`} alt={item.title} className="cart-item-img" />
    <div className="cart-item-info">
        <div>
            <div className="cart-item-book-title">
                <b>Title: </b>{item.title}
            </div>
            <div className="cart-item-book-author">
                <b>Author: </b>{item.author}
            </div>
            </div>
           <div>
           <div className="cart-item-quantity">
                <button onClick={()=>addToCart({...item,quantity:item.quantity +1})}>
                    <i className="bi bi-plus-lg"></i>
                </button >
                <b>{item.quantity}</b>
                {item.quantity>1 &&<button  onClick={()=>addToCart({...item,quantity:item.quantity -1})}
                >
                    <i className="bi bi-dash-lg"></i>
                </button>}
            </div>
            <div className="cart-item-price">
                ${(item.price * item.quantity).toFixed(2)}
            </div>
            <i onClick={()=>removeFromCart(item.id)} className="bi bi-trash-fill"></i>
           </div>
    </div>
    </div>
    )}
        </div> 
        <OrderSummary key= {cartItems.id} books={cartItems} />
        </div> 
       </div>
         );
}
 
export default Card;
                   