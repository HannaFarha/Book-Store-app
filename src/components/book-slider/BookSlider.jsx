import "./book-slider.css"
import {useEffect,useState} from 'react'
const BookSlider = () => {
    const [books,setBooks]=useState([])
    const fetchBooks=async()=>{
        try{
            const response =await fetch('http://localhost:4000/book')
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
    <i className="bi bi-chevron-left"></i>
        <div className ="book-slider-wrapper">
            {books.map(book=>(
                <div key={book.title} className="book-slide-item">
                <img src={`books/${book.image}`} alt={book.title}  className="book-slide-item-img" />
                <h1 className="book-slide-item-title">{book.title}</h1>
                <div className="rating">rating</div>
                <div className="book-slide-item-price">${book.price}</div>
                <div className="book-slider-icons-wrapper">
                    <i className="bi bi-eye-fill"></i>
                    <i className="bi bi-cart-plus"></i>      
                </div>
                </div>
                
            )) }
        </div>
        
        <i className="bi bi-chevron-right"></i>
     </div>  
    );
}
 
export default BookSlider;