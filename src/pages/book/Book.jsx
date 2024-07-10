 import { useParams } from "react-router-dom";
 import "./book.css";
 import {useState, useEffect,useContext} from "react";
import Rating from "../../components/book-slider/Rating";
import CartContext from "../../context/cartContext";


const BookPage = () => {
   const {addToCart} = useContext(CartContext);
   const[qty,setQty]=useState(1);
    const { id } = useParams();

const [books,setBooks]=useState();
   
 

const fetchBook = async () => {
    try {
      const response = await fetch(`https://api-backend.adaptable.app/book/${id}`, {
        method: 'GET',
        headers: {
          
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setBooks(data);
     
    } catch (error) {
      console.error('Error:', error);
    }
  }

useEffect(()=>{fetchBook()},[])

  return (
    <div className="book">
    <div className="book-content">
    {books &&  <img
        src={`/books/${books.image}`}
        alt={books.title}
        className="book-content-img"
      />}
      <div className="book-content-info">
      {books && <h1 className="book-title">{books.title}</h1>}
        <div className="book-author">
          by {books && <span>{books.author}</span>} (Author)
        </div>
        {books && <Rating  rating={books.rating} reviews={books.reviews}/>}

        <div className="book-add-to-cart">
            <input
              className="book-add-to-cart-input"
              type="number"
              min="1"
              max="100"
              value={qty}
              onChange={e => setQty(e.target.value)}
              
            />
            <button onClick={()=>addToCart({...books, quantity : qty})} className="book-add-to-cart-btn">
              <i className="bi bi-cart-plus"></i>
              Add To Cart
            </button>
          </div>

        </div>
        </div>
        <p className="book-description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
        molestiae corporis facere minima consequuntur, blanditiis voluptatem
        praesentium possimus odit, aliquam temporibus nulla! Delectus quas totam
        nihil est reiciendis sunt. Ex. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. A veritatis vitae hic corrupti voluptas dignissimos
        consequatur doloribus laborum adipisci quo voluptates dolorum cumque
        tempora expedita possimus, ab quae tenetur fugit. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Laudantium fugit illo porro
        perspiciatis fuga doloremque placeat assumenda labore! Harum numquam
        voluptate eveniet libero debitis consequuntur nostrum reiciendis
        officiis delectus rem.
      </p>

      <div className="book-icons">
        <div className="book-icon">
          <small>Print Length</small>
          <i className="bi bi-file-earmark-break"></i>
          {books && <b>{books.printLength}pages</b>}
        </div>
        <div className="book-icon">
          <small>Language</small>
          <i className="bi bi-globe"></i>
          {books && <b>{books.language}</b>}
        </div>
        <div className="book-icon">
          <small>Publication date</small>
          <i className="bi bi-calendar3"></i>
          {books && <b>{books.PublicationDate}</b>}
        </div>
      </div>
    </div>
  );
};

export default BookPage;
