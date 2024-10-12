import "./book-slider.css"
import {useContext, useEffect,useState} from 'react'
import Rating from "./Rating";

import Modal from "../modal/Modal";
import CartContext from "../../context/cartContext";
 
const BookSlider = () => {
    const {addToCart}=useContext(CartContext);
    const [slideIndex,setSlideIndex]=useState(0);
    const [openModal,setOpenModal]=useState(false);
    const [bookData,setBookData]=useState(null);
    const [books,setBooks]=useState([]);

const handleModal=(book)=>
{
    setOpenModal(true);
    setBookData(book);
}
    const handleClick =direction=>{
        if(direction==="left"){
            setSlideIndex(slideIndex -1);
        }else{
            setSlideIndex(slideIndex +1);
        }
    }
    // https://upcdn.io/FW25bqM/raw/db-5NGi.json
    const fetchBooks=async()=>{
        try{
            const response =await fetch('https://api-fack-json-server-backend-1.onrender.com/book')
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
    return (
     <div  className="book-slider-container">
    {slideIndex >=0 && <i onClick={()=>handleClick("left")} className="bi bi-chevron-left book-slider-arrow-left"></i>}
        <div style={{transform:`translateX(${slideIndex * -340}px)`}} className ="book-slider-wrapper">
            {books.map(book=>(
                <div key={book.title} className="book-slide-item">
                <img src={`books/${book.image}`} alt={book.title}  className="book-slide-item-img" />
                <h1 className="book-slide-item-title">{book.title}</h1>
                <Rating rating={book.rating} reviews ={book.reviews} />
                <div className="book-slider-item-price">${book.price}</div>
                <div className="book-slider-icons-wrapper">
                    <i onClick={()=>handleModal(book)} className="bi bi-eye-fill"></i>
                    <i onClick={()=>addToCart({...book,quantity:1})} className="bi bi-cart-plus"></i>      
                </div>
                </div>
                
            )) }
        </div>
        
       {slideIndex <= books.length -1 && <i onClick={()=>handleClick("right")} className="bi bi-chevron-right book-slider-arrow-right" ></i>}
       {openModal && <Modal bookData={bookData} setOpenModal={setOpenModal} />}
     </div>  
    );
}
export default BookSlider;