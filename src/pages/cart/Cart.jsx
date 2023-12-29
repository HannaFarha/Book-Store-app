import {useEffect,useState} from 'react'
import "./cart.css"

const Card = () => {
    const [books,setBooks]=useState([]);
    const fetchBooks=async()=>{
        try{
            const response =await fetch('http://localhost:4000/cartInfo')
            if(response.ok){
                const booksData =await response.json()
                setBooks(booksData)
            }

        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{fetchBooks()},[])
    console.log(books)

    return ( <div className="cart">
    <h1 className="cart-title">Your Shopping Cart</h1>
    <div className="cart-wrapper">
      <div className="cart-items">
{books.map(item =><div key={item.id} className="cart-item">
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
            <div className="cart-item-quantity">
                <button>
                    <i className="bi bi-plus-lg"></i>
                </button>
                <b>{item.quantity}</b>
                <button>
                    <i className="bi bi-dash-lg"></i>
                </button>
            </div>
    </div>
    </div>
    )}
        </div> 
        </div> 
        <div className='cart-order-summary'>
            Order Summary
            </div> </div>
         );
}
 
export default Card;